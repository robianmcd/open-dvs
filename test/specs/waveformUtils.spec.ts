import {WaveformUtil} from "../../src/services/waveformUtil";

describe("waveformUtil", () => {
    let waveformUtil: WaveformUtil;

    beforeEach(() => {
        waveformUtil = new WaveformUtil();
    });

    it("should output the original samples when the output size matches the input", () => {
        let waveform = waveformUtil.projectWaveform(
            [0, .5, 1, .5, 0],
            1, //sampleRate
            5, //outputSize
            0, //startTime
            5 //endTime
        );

        let boostedValue = 0.5 * waveformUtil.WAVEFORM_BOOST;
        expect(waveform).toEqual([0, boostedValue, 1, boostedValue, 0]);
    });

    it("should add 0s to the start of the output if startTime is negative", () => {
        let waveform = waveformUtil.projectWaveform(
            [1, 1, 1, 1, 1],
            1, //sampleRate
            4, //outputSize
            -2, //startTime
            2 //endTime
        );

        expect(waveform).toEqual([0, 0, 1, 1]);
    });

    it("should add 0s to the end when endTime is past end of samples", () => {
        let waveform = waveformUtil.projectWaveform(
            [1, 1, 1, 1, 1],
            1, //sampleRate
            4, //outputSize
            4, //startTime
            8 //endTime
        );

        expect(waveform).toEqual([1,0,0,0]);
    });
});