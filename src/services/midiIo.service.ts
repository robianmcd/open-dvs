import {Injectable} from "@angular/core";
import {MidiMsg, MidiUtil} from "./midiUtil.service";
import MIDIOutput = WebMidi.MIDIOutput;
import MIDIInput = WebMidi.MIDIInput;

@Injectable()
export class MidiIo {

    private outputDeviceIds = new Set<string>();

    constructor(private midiUtil: MidiUtil) {

    }

    getInputDevices() {
        let inputDevices = [];

        this.midiUtil.midi.inputs.forEach((device) => {
            inputDevices.push(device);
        });

        return inputDevices;
    }

    connectDevice(deviceId: string) {
        let input = this.getInput(deviceId);
        let output = this.getOutput(deviceId);

        input && (input.onmidimessage = this.onInputMsg.bind(this));
        output && this.outputDeviceIds.add(deviceId);
    }

    disconnectDevice(deviceName: string) {

    }

    sendMessage(msg: MidiMsg) {
        for (let name of <any>this.outputDeviceIds) {
            let outputDevice = this.getOutput(name);
            outputDevice.send(this.midiUtil.serializeMsg(msg));
        }
    }

    private onInputMsg(rawMsg: number[]) {

    }

    private getInput(deviceId): MIDIInput {
        return this.midiUtil.midi.inputs[deviceId];
    }

    private getOutput(deviceId): MIDIOutput {
        return this.midiUtil.midi.outputs[deviceId];
    }
}