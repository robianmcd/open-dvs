import {Injectable} from "@angular/core";
import {MidiMsg, MidiUtil} from "./midiUtil.service";
import MIDIOutput = WebMidi.MIDIOutput;
import MIDIInput = WebMidi.MIDIInput;

@Injectable()
export class MidiIo {

    private outputDeviceNames = new Set<string>();

    constructor(private midiUtil: MidiUtil) {

    }

    getDeviceNames() {
        let inputs = Object.keys(this.midiUtil.midi.inputs);
        let outputs = Object.keys(this.midiUtil.midi.outputs.values());

        return Array.from(new Set([...inputs, ...outputs]));
    }

    connectDevice(deviceName: string) {
        let input = this.getInput(deviceName);
        let output = this.getOutput(deviceName);

        input && (input.onmidimessage = this.onInputMsg.bind(this));
        output && this.outputDeviceNames.add(deviceName);
    }

    disconnectDevice(deviceName: string) {

    }

    sendMessage(msg: MidiMsg) {
        for(let name of <any>this.outputDeviceNames) {
            let outputDevice = this.getOutput(name);
            outputDevice.send(this.midiUtil.serializeMsg(msg));
        }
    }

    private onInputMsg(rawMsg: number[]) {

    }

    private getInput(deviceName): MIDIInput {
        return this.midiUtil.midi.inputs[deviceName];
    }

    private getOutput(deviceName): MIDIOutput {
        return this.midiUtil.midi.outputs[deviceName];
    }
}