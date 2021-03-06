import {Injectable} from "@angular/core";

@Injectable()
export class DspUtil {

    constructor() {

    }

    isPlayingForward(leftBuf, rightBuf, periodSamples) {
        let seperation = Math.round(periodSamples * 0.23);

        let leftDcOffset = 0;
        let rightDcOffset = 0;
        for (let i = 0; i < leftBuf.length; i++) {
            leftDcOffset += leftBuf[i] / leftBuf.length;
            rightDcOffset += rightBuf[i] / rightBuf.length;
        }

        let leftAbsTotalAmp = 0;
        let rightAbsTotalAmp = 0;
        for (let i = 0; i < leftBuf.length; i++) {
            leftAbsTotalAmp += Math.abs(leftBuf[i] - leftDcOffset);
            rightAbsTotalAmp += Math.abs(rightBuf[i] - rightDcOffset);
        }

        let leftAmpMult = rightAbsTotalAmp / leftAbsTotalAmp;

        let forwardSum = 0;
        let reverseSum = 0;
        for(let i = seperation; i < leftBuf.length - seperation; i++) {
            forwardSum += Math.abs((leftBuf[i] - leftDcOffset) * leftAmpMult - (rightBuf[i - seperation] - rightDcOffset));
            reverseSum += Math.abs((leftBuf[i] - leftDcOffset) * leftAmpMult - (rightBuf[i + seperation] - rightDcOffset));
        }

        let significance = Math.max(forwardSum, reverseSum) / Math.min(forwardSum, reverseSum);

        if(significance > 2) {
            return forwardSum < reverseSum;
        } else {
            return undefined;
        }
    }

    //TODO make this code less dumb
    isPlayingForwardMaxMin(leftBuf, rightBuf, periodSamples) {
        let nextLeftExtreme = undefined;
        let nextRightExtreme = undefined;

        let leftMaxes = [];
        let leftMins = [];
        let rightMaxes = [];
        let rightMins = [];

        for (let i = 1; i < leftBuf.length-1; i++) {
            if(nextLeftExtreme !== 'min' && leftBuf[i-1] <= leftBuf[i] && leftBuf[i] >= leftBuf[i+1]) {
                nextLeftExtreme = 'min';
                leftMaxes.push(i);
            }

            if(nextLeftExtreme !== 'max' && leftBuf[i-1] >= leftBuf[i] && leftBuf[i] <= leftBuf[i+1]) {
                nextLeftExtreme = 'max';
                leftMins.push(i);
            }

            if(nextRightExtreme !== 'min' && rightBuf[i-1] <= rightBuf[i] && rightBuf[i] >= rightBuf[i+1]) {
                nextRightExtreme = 'min';
                rightMaxes.push(i);
            }

            if(nextRightExtreme !== 'max' && rightBuf[i-1] >= rightBuf[i] && rightBuf[i] <= rightBuf[i+1]) {
                nextRightExtreme = 'max';
                rightMins.push(i);
            }
        }

        let leftMaxI = 0;
        let rightMaxI = 0;

        let forwardCount = 0;
        let reverseCount = 0;

        while(leftMaxI < leftMaxes.length) {


            while(rightMaxI < rightMaxes.length-1 && rightMaxes[rightMaxI+1] < leftMaxes[leftMaxI]) {
                rightMaxI++;
            }

            if(rightMaxI <= rightMaxes.length-1) {
                if(leftMaxes[leftMaxI] - rightMaxes[rightMaxI] < rightMaxes[rightMaxI+1] - leftMaxes[leftMaxI]) {
                    forwardCount++;
                } else {
                    reverseCount++;
                }
            }

            leftMaxI++;
        }

        //1 is best.
        let confidence = Math.abs(forwardCount - reverseCount) / (forwardCount + reverseCount);

        if(confidence < 0.12) {
            return undefined;
        } else {
            return forwardCount > reverseCount;
        }

    }

    getRms(buf) {
        let rms = 0;

        for (let i = 0; i < buf.length; i++) {
            let val = buf[i];
            rms += val * val;
        }
        rms = Math.sqrt(rms / buf.length);
        return rms;
    }

    autoCorrelate(buf, sampleRate) {
        const MIN_SAMPLES = 0;  // will be initialized when AudioContext is created.
        const GOOD_ENOUGH_CORRELATION = 0.1; // this is the "bar" for how close a correlation needs to be

        let SIZE = buf.length;
        let offsetIterations = Math.floor(SIZE * 3/4);
        let compareChunkSize = Math.floor(SIZE / 4);
        let best_offset = -1;
        let best_correlation = 0;
        let foundGoodCorrelation = false;
        let correlations = new Array(offsetIterations);

        let rms = this.getRms(buf);
        // not enough signal
        if (rms < 0.05) {
            return -1;
        }

        let lastCorrelation = 1;
        for (let offset = MIN_SAMPLES; offset < offsetIterations; offset++) {
            let correlation = 0;

            for (let i = 0; i < compareChunkSize; i++) {
                correlation += Math.abs((buf[i]) - (buf[i + offset]));
            }
            correlation = 1 - (correlation / compareChunkSize);
            correlations[offset] = correlation; // store it, for the tweaking we need to do below.
            if ((correlation > GOOD_ENOUGH_CORRELATION) && (correlation > lastCorrelation)) {
                foundGoodCorrelation = true;
                if (correlation > best_correlation) {
                    best_correlation = correlation;
                    best_offset = offset;
                }
            } else if (foundGoodCorrelation) {
                // short-circuit - we found a good correlation, then a bad one, so we'd just be seeing copies from here.
                // Now we need to tweak the offset - by interpolating between the values to the left and right of the
                // best offset, and shifting it a bit.  This is complex, and HACKY in this code (happy to take PRs!) -
                // we need to do a curve fit on correlations[] around best_offset in order to better determine precise
                // (anti-aliased) offset.

                // we know best_offset >=1,
                // since foundGoodCorrelation cannot go to true until the second pass (offset=1), and
                // we can't drop into this clause until the following pass (else if).
                let shift = (correlations[best_offset + 1] - correlations[best_offset - 1]) / correlations[best_offset];
                return sampleRate / (best_offset + (8 * shift));
            }
            lastCorrelation = correlation;
        }
        if (best_correlation > 0.01 && best_offset !== offsetIterations-1) {
            // console.log("f = " + sampleRate/best_offset + "Hz (rms: " + rms + " confidence: " + best_correlation + ")")
            return sampleRate / best_offset;
        }
        return -1;
    }

    //Returns phase difference in samples between buf1 and buf2
    //TODO: don't need to wait for correlation > lastCorrelation to set foundGoodCorrelation
    crossCorrelate(buf1, buf2) {
        const MIN_SAMPLES = 0;  // will be initialized when AudioContext is created.
        const GOOD_ENOUGH_CORRELATION = 0.9; // this is the "bar" for how close a correlation needs to be

        let SIZE = Math.min(buf1.length, buf2.length);
        let MAX_SAMPLES = Math.floor(SIZE / 2);
        let best_offset = -1;
        let best_correlation = 0;
        let foundGoodCorrelation = false;
        let correlations = new Array(MAX_SAMPLES);

        let lastCorrelation = 1;
        for (let offset = MIN_SAMPLES; offset < MAX_SAMPLES; offset++) {
            let correlation = 0;

            for (let i = 0; i < MAX_SAMPLES; i++) {
                correlation += Math.abs((buf1[i]) - (buf2[i + offset]));
            }
            correlation = 1 - (correlation / MAX_SAMPLES);
            correlations[offset] = correlation; // store it, for the tweaking we need to do below.
            if ((correlation > GOOD_ENOUGH_CORRELATION) && (correlation > lastCorrelation)) {
                foundGoodCorrelation = true;
                if (correlation > best_correlation) {
                    best_correlation = correlation;
                    best_offset = offset;
                }
            } else if (foundGoodCorrelation) {
                // short-circuit - we found a good correlation, then a bad one, so we'd just be seeing copies from here.
                // Now we need to tweak the offset - by interpolating between the values to the left and right of the
                // best offset, and shifting it a bit.  This is complex, and HACKY in this code (happy to take PRs!) -
                // we need to do a curve fit on correlations[] around best_offset in order to better determine precise
                // (anti-aliased) offset.

                // we know best_offset >=1,
                // since foundGoodCorrelation cannot go to true until the second pass (offset=1), and
                // we can't drop into this clause until the following pass (else if).
                let shift = (correlations[best_offset + 1] - correlations[best_offset - 1]) / correlations[best_offset];
                return best_offset + (8 * shift);
            }
            lastCorrelation = correlation;
        }
        if (best_correlation > 0.01) {
            return best_offset;
        }
        return -1;
    }
}