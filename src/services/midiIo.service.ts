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
    devicesByName: {[name: string]: {input?: MIDIInput, output?: MIDIOutput}};
    devices: Array<{name: string, input?: MIDIInput, output?: MIDIOutput}>;


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
                this.enableInput(name);
            });
        });
    }

    private retrieveDevices() {
        this.devicesByName = {};

        this.midiUtil.midi.inputs.forEach((input: MIDIInput) => {
            this.devicesByName[input.name] = {input}
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

    //TODO: if this is not needed remove it
    // getInputDevices(): MIDIInput[] {
    //     return Array.from(this.midiUtil.midi.inputs.values());
    // }

    inputIsEnabled(deviceName: string) {
        return this.enabledInputNames.has(deviceName);
    }

    enableInput(deviceName: string) {
        let input = this.devicesByName[deviceName].input;
        input['lastEventListener'] = this.onInputMsg.bind(this);
        input.addEventListener('midimessage', input['lastEventListener']);

        this.enabledInputNames.add(deviceName);

        this.saveInputPreferences();
    }

    disableInput(deviceName: string) {
        let input = this.devicesByName[deviceName].input;
        if(input['lastEventListener']) {
            input.removeEventListener('midimessage', input['lastEventListener']);
        }
        input.close();

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
        for (let name of <any>this.enabledOutputNames) {
            let outputDevice = this.devicesByName[name].output;
            outputDevice.send(this.midiUtil.serializeMsg(msg));
        }
    }

    saveInputPreferences() {
        this.preferencesDb.setEnabledMidiInputNames(this.enabledInputNames);
    }

    saveOutputPreferences() {
        this.preferencesDb.setEnabledMidiOutputNames(this.enabledOutputNames);
    }

    private onInputMsg(msgEvent: MIDIMessageEvent) {
        let msg = this.midiUtil.parseRawMsg(msgEvent.data);
        this.msg.next(msg);
    }
}