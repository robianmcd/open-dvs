import {Injectable} from "@angular/core";
import {MidiMsg, MidiUtil} from "./midiUtil.service";
import {Subject, Observable} from "rxjs";
import {PreferencesDb} from "./db/preferencesDb.service";
import MIDIOutput = WebMidi.MIDIOutput;
import MIDIInput = WebMidi.MIDIInput;
import MIDIMessageEvent = WebMidi.MIDIMessageEvent;

@Injectable()
export class MidiIo {

    private enabledInputNames = new Set<string>();
    private enabledOutputNames = new Set<string>();

    private msg = new Subject<MidiMsg>();
    devicesByName: { [name: string]: { input?: MIDIInput, output?: MIDIOutput } };
    devices: Array<{ name: string, input?: MIDIInput, output?: MIDIOutput }>;


    get msg$(): Observable<MidiMsg> {
        return this.msg.asObservable();
    }

    constructor(private midiUtil: MidiUtil, private preferencesDb: PreferencesDb) {
        this.midiUtil.midiInitialized.then(() => {
            midiUtil.midi.onstatechange = () => {
                this.retrieveDevices();
            };
            this.retrieveDevices();
        });

        preferencesDb.initialized.then(() => {
            this.enabledOutputNames = preferencesDb.getEnabledMidiOutputNames();
            preferencesDb.getEnabledMidiInputNames().forEach((name) => {
                if (this.devicesByName[name]) {
                    this.enableInput(name);
                }
            });
        });
    }

    private retrieveDevices() {
        this.devicesByName = {};

        this.midiUtil.midi.inputs.forEach((input: MIDIInput) => {
            this.devicesByName[input.name] = {input};

            //This could occur if an input was saved as enabled in the preferences but the diver was not connected to
            //the computer until after the app started.
            if(this.inputIsEnabled(input.name) === false && this.enabledInputNames.has(input.name)) {
                this.enableInput(input.name);
            }
        });

        this.midiUtil.midi.outputs.forEach((output: MIDIOutput) => {
            this.devicesByName[output.name] = this.devicesByName[output.name] || {};
            this.devicesByName[output.name].output = output;
        });

        this.devices = [];
        for (let name in this.devicesByName) {
            let device = this.devicesByName[name];
            this.devices.push({name, input: device.input, output: device.output});
        }
    }

    inputIsEnabled(deviceName: string) {
        let input = this.getDevice(deviceName).input;
        return !!input && !!input['lastEventListener'];
    }

    enableInput(deviceName: string) {
        this.enabledInputNames.add(deviceName);
        this.saveInputPreferences();

        let device = this.getDevice(deviceName);

        if (device.input) {
            device.input['lastEventListener'] = this.onInputMsg.bind(this);
            device.input.addEventListener('midimessage', device.input['lastEventListener']);
        }

    }

    disableInput(deviceName: string) {
        let device = this.getDevice(deviceName);

        if (device.input) {
            if (device.input['lastEventListener']) {
                device.input.removeEventListener('midimessage', device.input['lastEventListener']);
                device.input['lastEventListener'] = undefined;
            }
            device.input.close();
        }

        this.enabledInputNames.delete(deviceName);
        this.saveInputPreferences();
    }

    toggleInput(deviceName: string) {
        if (this.inputIsEnabled(deviceName)) {
            this.disableInput(deviceName);
        } else {
            this.enableInput(deviceName);
        }
    }

    outputIsEnabled(deviceName: string) {
        return this.enabledOutputNames.has(deviceName);
    }

    enableOutput(deviceName: string) {
        this.enabledOutputNames.add(deviceName);
        this.saveOutputPreferences();
    }

    disableOutput(deviceName: string) {
        this.enabledOutputNames.delete(deviceName);
        this.saveOutputPreferences();
    }

    toggleOutput(deviceName: string) {
        if (this.outputIsEnabled(deviceName)) {
            this.disableOutput(deviceName);
        } else {
            this.enableOutput(deviceName);
        }
    }

    sendMessage(msg: MidiMsg) {
        this.enabledOutputNames.forEach((name) => {
            let device = this.getDevice(name);
            if(device.output) {
                device.output.send(this.midiUtil.serializeMsg(msg));
            }
        });
    }

    saveInputPreferences() {
        this.preferencesDb.setEnabledMidiInputNames(this.enabledInputNames);
    }

    saveOutputPreferences() {
        this.preferencesDb.setEnabledMidiOutputNames(this.enabledOutputNames);
    }

    //Always returns an object even if the device doesn't exist
    getDevice(name: string) {
        return this.devicesByName[name] || {};
    }

    private onInputMsg(msgEvent: MIDIMessageEvent) {
        let msg = this.midiUtil.parseRawMsg(msgEvent.data);
        this.msg.next(msg);
    }
}