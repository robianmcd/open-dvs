import {WaveformUtil} from "../../src/services/waveformUtil";

describe("A suite is just a function", function() {
    let a;
    let waveformUtil = new WaveformUtil();

    it("and so is a spec", function() {
        a = true;

        expect(a).toBe(true);
    });
});