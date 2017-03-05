import {MidiMsgType, MidiUtil} from "../../src/services/midi/midiUtil.service";

describe("midiUtil", () => {
    let midiUtil: MidiUtil;

    beforeEach(() => {
        window.navigator.requestMIDIAccess = () => new Promise(() => {
        });
        midiUtil = new MidiUtil();
    });

    it("should parse and serialize note off messages", () => {

        let rawMsg = [0b10000000, 0, 0];

        let msg = midiUtil.parseRawMsg(new Uint8Array(rawMsg));

        expect(msg.msgType).toEqual(MidiMsgType.NoteOff);
        expect(msg.channel).toEqual(1);
        expect(msg.subType).toEqual(0);
        expect(msg.amount).toEqual(0);

        expect(midiUtil.serializeMsg(msg)).toEqual(rawMsg);
    });

    it("should parse and serialize note on messages", () => {
        let rawMsg = [0b10011111, 127, 127];

        let msg = midiUtil.parseRawMsg(new Uint8Array(rawMsg));

        expect(msg.msgType).toEqual(MidiMsgType.NoteOn);
        expect(msg.channel).toEqual(16);
        expect(msg.subType).toEqual(127);
        expect(msg.amount).toEqual(1);

        expect(midiUtil.serializeMsg(msg)).toEqual(rawMsg);
    });

    it("should parse and serialize program change messages", () => {
        let rawMsg = [0b11001001, 100, 0];

        let msg = midiUtil.parseRawMsg(new Uint8Array(rawMsg));

        expect(msg.msgType).toEqual(MidiMsgType.ProgramChange);
        expect(msg.channel).toEqual(10);
        expect(msg.subType).toEqual(100);
        expect(msg.amount).toEqual(1);

        expect(midiUtil.serializeMsg(msg)).toEqual(rawMsg);
    });

    it("should parse and serialize channel aftertouch messages", () => {
        let rawMsg = [0b11010001, 100, 0];

        let msg = midiUtil.parseRawMsg(new Uint8Array(rawMsg));

        expect(msg.msgType).toEqual(MidiMsgType.ChannelAfterTouch);
        expect(msg.channel).toEqual(2);
        expect(msg.subType).toEqual(0);
        expect(msg.amount).toEqual(100 / 127);

        expect(midiUtil.serializeMsg(msg)).toEqual(rawMsg);
    });

    it("should parse and serialize pitch bend messages", () => {
        let rawMsg = [0b11100000, 127, 127];

        let msg = midiUtil.parseRawMsg(new Uint8Array(rawMsg));

        expect(msg.msgType).toEqual(MidiMsgType.PitchBend);
        expect(msg.channel).toEqual(1);
        expect(msg.subType).toEqual(0);
        expect(msg.amount).toEqual(1);

        expect(midiUtil.serializeMsg(msg)).toEqual(rawMsg);
    });
});