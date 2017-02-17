import {Injectable} from "@angular/core";
import MIDIAccess = WebMidi.MIDIAccess;

@Injectable()
export class MidiUtil {

    midiInitialized: Promise<MIDIAccess>;
    midi: MIDIAccess;

    private resolveMidiInitialized: (access: MIDIAccess) => void;
    private rejectMidiInitialized: (rejection?) => void;

    constructor() {
        this.midiInitialized = new Promise((resolve, reject) => {
            this.resolveMidiInitialized = resolve;
            this.rejectMidiInitialized = reject;
        });
    }

    initialize() {
        if (navigator.requestMIDIAccess) {
            navigator.requestMIDIAccess()
                .then((midiAccess) => {
                    this.midi = midiAccess;
                    this.resolveMidiInitialized(midiAccess);
                })
                .catch(() => {
                    this.rejectMidiInitialized();
                    console.error("No access to MIDI devices or your browser doesn't support WebMIDI API");
                });
        } else {
            this.rejectMidiInitialized();
            console.error("No MIDI support in your browser.");
        }
    }

    parseRawMsg(rawMessage: Uint8Array): MidiMsg {
        let byte1 = rawMessage[0];
        let byte2 = rawMessage[1];
        let byte3 = rawMessage[2];

        let msgType: MidiMsgType = byte1 >> 4;
        let channel = (byte1 & 0b00001111) + 1;

        let subType: number;
        let amount: number;

        switch (msgType) {
            case MidiMsgType.ProgramChange: {
                subType = byte2;
                amount = 1;
                break;
            }
            case MidiMsgType.ChannelAfterTouch: {
                subType = 0;
                amount = byte2 / 127;
                break;
            }
            case MidiMsgType.PitchBend: {
                subType = 0;
                amount = ((byte3 << 7) + byte2) / ((1 << 14) - 1);
                break;
            }
            default: {
                subType = byte2;
                amount = byte3 / 127;
            }
        }

        return {msgType, channel, subType, amount};
    }

    serializeMsg(msg: MidiMsg): number[] {
        let byte1 = (msg.msgType << 4) + (msg.channel - 1);

        let byte2;
        let byte3;

        switch (msg.msgType) {
            case MidiMsgType.ProgramChange: {
                byte2 = msg.subType;
                byte3 = 0;
                break;
            }
            case MidiMsgType.ChannelAfterTouch: {
                byte2 = Math.round(msg.amount * 127);
                byte3 = 0;
                break;
            }
            case MidiMsgType.PitchBend: {
                let integerAmount = Math.round(msg.amount * ((1 << 14) - 1));
                byte2 = integerAmount & 0b1111111;
                byte3 = integerAmount >> 7;
                break;
            }
            default: {
                byte2 = msg.subType;
                byte3 = Math.round(msg.amount * 127);
            }
        }

        return [byte1, byte2, byte3];
    }
}

export enum MidiMsgType {
    NoteOff = 8,
    NoteOn = 9,
    PolyAfterTouch = 10,
    CC = 11,
    ProgramChange = 12,
    ChannelAfterTouch = 13,
    PitchBend = 14,
    SysEx = 15
}

export interface MidiControl {
    msgType: MidiMsgType,
    //1 - 16
    channel: number;
    //0 - 127
    subType: number;
}

export interface MidiMsg extends MidiControl {
    //0 - 1
    amount: number;
}