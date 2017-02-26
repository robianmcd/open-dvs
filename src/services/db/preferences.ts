import {MidiMapping} from "../midiMapper.service";

export class Preferences {
    crossfaderCurveSharpness = 0;
    midiMappings = new Map<string, MidiMapping>();
    enabledMidiInputNames = new Set<string>();
    enabledMidiOutputNames = new Set<string>();
    audioSettings = {
        input: {
            deckA: {controlDeviceId: undefined, liveDeviceId: undefined},
            deckB: {controlDeviceId: undefined, liveDeviceId: undefined}
        }
    }
}