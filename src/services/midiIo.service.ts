import {Injectable} from "@angular/core";
import {MidiMsg, MidiUtil} from "./midiUtil.service";
import {Subject, Observable} from "rxjs";
import MIDIOutput = WebMidi.MIDIOutput;
import MIDIInput = WebMidi.MIDIInput;
import MIDIMessageEvent = WebMidi.MIDIMessageEvent;

@Injectable()
export class MidiIo {

    private enabledDeviceIds = new Set<string>();
    private msg = new Subject<MidiMsg>();

    get msg$(): Observable<MidiMsg> {
        return this.msg.asObservable();
    }

    constructor(private midiUtil: MidiUtil) {

    }

    getInputDevices(): MIDIInput[] {
        let inputDevices = [];

        this.midiUtil.midi.inputs.forEach((device) => {
            inputDevices.push(device);
        });

        return inputDevices;
    }

    enableDevice(deviceId: string) {
        let input = this.getInput(deviceId);
        input && input.addEventListener('midimessage', this.onInputMsg.bind(this));

        this.enabledDeviceIds.add(deviceId);
    }

    deviceIsEnabled(deviceId: string) {
        return this.enabledDeviceIds.has(deviceId);
    }

    disableDevice(deviceId: string) {
        let input = this.getInput(deviceId);
        input && (input.close());

        this.enabledDeviceIds.delete(deviceId);
    }

    toggleDevice(deviceId: string) {
        if (this.deviceIsEnabled(deviceId)) {
            this.disableDevice(deviceId);
        } else {
            this.enableDevice(deviceId);
        }
    }

    sendMessage(msg: MidiMsg) {
        for (let name of <any>this.enabledDeviceIds) {
            let outputDevice = this.getOutput(name);
            outputDevice.send(this.midiUtil.serializeMsg(msg));
        }
    }

    private onInputMsg(msgEvent: MIDIMessageEvent) {
        let msg = this.midiUtil.parseRawMsg(msgEvent.data);
        this.msg.next(msg);
    }

    private getInput(deviceId): MIDIInput {
        return this.midiUtil.midi.inputs.get(deviceId);
    }

    private getOutput(deviceId): MIDIOutput {
        return this.midiUtil.midi.outputs.get(deviceId);
    }
}