import {Injectable} from "@angular/core";

//Based on https://github.com/jussi-kalliokoski/sink.js/blob/master/src/utils/resample.js
@Injectable()
export class Resampler {

    constructor() {
    }

    /**
     * Resamples a sample buffer from a frequency to a frequency and / or from a sample rate to a sample rate.
     *
     * @static Sink
     * @name resample
     *
     * @arg {Buffer} buffer The sample buffer to resample.
     * @arg {Number} fromRate The original sample rate of the buffer, or if the last argument, the speed ratio to convert with.
     * @arg {Number} fromFrequency The original frequency of the buffer, or if the last argument, used as toRate and the secondary comparison will not be made.
     * @arg {Number} toRate The sample rate of the created buffer.
     * @arg {Number} toFrequency The frequency of the created buffer.
     *
     * @return The new resampled buffer.
     */
    resample(buffer, fromRate /* or speed */, fromFrequency /* or toRate */, toRate?, toFrequency?): Float32Array {
        let argc = arguments.length;

        let speed;
        if(argc === 2) {
            speed = fromRate;
        } else if (argc === 3) {
            speed = fromRate / fromFrequency;
        } else {
            speed = toRate / fromRate * toFrequency / fromFrequency;
        }

        let l = buffer.length;
        let length = Math.ceil(l / speed);
        let newBuffer = new Float32Array(length);
        let i, n;
        for (i = 0, n = 0; i < l; i += speed) {
            newBuffer[n++] = this.interpolate(buffer, i);
        }
        return newBuffer;
    };

    private interpolate(arr, pos) {
        let first = Math.floor(pos),
            second = first + 1,
            frac = pos - first;

        second = second < arr.length ? second : first;
        return arr[first] * (1 - frac) + arr[second] * frac;
    }

}