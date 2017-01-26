import {WaveformDetails} from "../models/songDetails";
import {ThemeId} from "../app/app.component";
export class WaveformUtil {
    constructor() {

    }


    getWaveformData(buffer: AudioBuffer) {
        const numSamplesInPreview = 2000;
        let samples = buffer.getChannelData(0);

        //TODO: run these calls in web workers
        let previewPeakAvgs = this.getWeightedPeakAvgs({samples, numBuckets: numSamplesInPreview});
        let detailedPeakAvgs = this.getWeightedPeakAvgs({samples, samplesPerBucket: 100});

        let compress100X = [];
        for (let i = 0; i < detailedPeakAvgs.positivePeakAvgs.length; i++) {
            let positiveVal = detailedPeakAvgs.positivePeakAvgs[i];
            let absNegativeVal = Math.abs(detailedPeakAvgs.negativePeakAvgs[i]);
            compress100X.push(Math.max(positiveVal, absNegativeVal));
        }

        return {
            positiveSamples: previewPeakAvgs.positivePeakAvgs,
            negativeSamples: previewPeakAvgs.negativePeakAvgs,
            previewSzie: numSamplesInPreview,
            compress100X
        };
    }

    drawWaveform(canvas: HTMLCanvasElement, waveformDetails: WaveformDetails, themeId: ThemeId) {
        let mainColor;
        let highlightColor;
        switch (themeId) {
            case ThemeId.DECK1:
                mainColor = '#632B9B';
                highlightColor = '#9b49f2';
                break;
            case ThemeId.DECK2:
                mainColor = '#165eaa';
                highlightColor = '#219bff';
                break;
            case ThemeId.DEFAULT:
                mainColor = '#5b5b5b';
                highlightColor = '#a6a6a6';
                break;
        }
        let showPositive = !!waveformDetails.positiveSamples;
        let showNegative = !!waveformDetails.negativeSamples;
        let showBoth = showPositive && showNegative;

        let waveformSize = waveformDetails.numSamples;
        let positiveWaveform = waveformDetails.positiveSamples;
        let negativeWaveform = waveformDetails.negativeSamples;

        let canvasCtx = canvas.getContext('2d');
        canvasCtx.clearRect(0, 0, canvas.width, canvas.height);

        let previewSamplesPerPixel = Math.round(waveformSize / canvas.width);

        for (let col = 0; col < canvas.width; col++) {
            let firstSampleI = col * previewSamplesPerPixel;
            let lastSampleI = Math.min(firstSampleI + previewSamplesPerPixel, waveformDetails.numSamples);

            let positiveSum = 0;
            let negativeSum = 0;
            for (let sampleI = firstSampleI; sampleI < lastSampleI; sampleI++) {
                showPositive && (positiveSum += positiveWaveform[sampleI]);
                showNegative && (negativeSum += negativeWaveform[sampleI]);
            }

            let positiveMean;
            if(showPositive) {
                positiveMean = positiveSum / (lastSampleI - firstSampleI);
                //Give the waveform a bit of a boost to make up for what gets lost from taking averages.
                positiveMean = Math.min(1, positiveMean * 1.4);
            }

            let negativeMean;
            if(showNegative) {
                negativeMean = negativeSum / (lastSampleI - firstSampleI);
                negativeMean = Math.min(1, negativeMean * 1.4);
            }

            let topY;
            let bottomY;
            let startY;
            let halfWaveformHeight;
            if(showBoth) {
                topY = (1 - positiveMean) / 2 * canvas.height;
                bottomY = (1 - negativeMean) / 2 * canvas.height;
                startY = canvas.height / 2;
                halfWaveformHeight = canvas.height / 2;
            } else if(showPositive) {
                topY = (1 - positiveMean) * canvas.height;
                startY = canvas.height;
                halfWaveformHeight = canvas.height;
            } else {
                //This is a bit of a hack. Right now if showNegative is true all the values are actually positive.
                //This is why the equation isn't (1 - negativeMean) * canvas.height
                //Should find a better way of handling this
                bottomY = negativeMean * canvas.height;
                startY = 0;
                halfWaveformHeight = canvas.height;
            }

            if(showPositive) {
                canvasCtx.beginPath();
                canvasCtx.moveTo(col, startY);
                canvasCtx.lineTo(col, topY);

                let gradient = canvasCtx.createLinearGradient(col, topY + halfWaveformHeight, col, topY + (halfWaveformHeight-topY)/3);
                gradient.addColorStop(0, highlightColor);
                gradient.addColorStop(1, mainColor);
                canvasCtx.strokeStyle = gradient;
                canvasCtx.stroke();
            }

            if(showNegative) {
                canvasCtx.beginPath();
                canvasCtx.moveTo(col, startY);
                canvasCtx.lineTo(col, bottomY);

                let gradient = canvasCtx.createLinearGradient(col, bottomY - halfWaveformHeight, col, bottomY - (bottomY-halfWaveformHeight)/3);
                gradient.addColorStop(0, highlightColor);
                gradient.addColorStop(1, mainColor);
                canvasCtx.strokeStyle = gradient;
                canvasCtx.stroke();
            }
        }
    }

    generateDataUrlWaveform(waveformDetails: WaveformDetails, width: number, height: number, themeId: ThemeId) {
        let canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;

        this.drawWaveform(canvas, waveformDetails, themeId);

        return canvas.toDataURL();
    }

    // @formatter:off
    /*
          +-+              XXXXXX
          |              XX      XXX        Peak Avg = (A1*W1 + A2*W2) / (W1 + W2)
          |            XX          XX
          |          XXX            XX
          |          X               X
    A1  +-+         XX               XX
          |        XX                 XX                   +-+        XXXX
          |       XX         1         XX                  |        XX    XX
          |       X                     X            A2  +-+      XX       XX
          |      XX                     XX                 |     XX    2    XX
          |     XX                       X                 +-+  XX           XX
          +-+ +XX------------------------XX--------------------XX-------------XX--+
                                          XXX                XXX               XX
               +                         +  XX              XX  +            +  XX
               +-------------+-----------+   XX          XXXX   +-----+------+   XX
                             |                XXX      XXX            |
                             +                  XXXXXXX               +
                             W1                                       W2
     */
    // @formatter:on
    getWeightedPeakAvgs({samples, numBuckets, samplesPerBucket}: {samples: Float32Array, numBuckets?: number, samplesPerBucket?: number}) {

        if (numBuckets !== undefined) {
            //TODO: this will lead to rounding errors. Use exact value instead and round it for each bucket.
            samplesPerBucket = Math.floor(samples.length / numBuckets);
        } else if (samplesPerBucket !== undefined) {
            //TODO: run this equation backwards to calculate the exact average samplesPerBucket
            numBuckets = Math.floor(samples.length / samplesPerBucket);
        } else {
            throw new Error('Must specify either numBuckets or samplesPerBucket');
        }


        let positivePeakAvgs = [];
        let negativePeakAvgs = [];


        for (let col = 0; col < numBuckets; col++) {
            let positiveSum = 0;
            let positiveCount = 0;
            let negativeSum = 0;
            let negativeCount = 0;

            let bucketOffset = col * samplesPerBucket;

            let cycleExtreme = 0;
            let cycleSize = 0;
            for (let sampleI = 1; sampleI < samplesPerBucket; sampleI++) {

                let curSampleI = bucketOffset + sampleI;
                let curSample = samples[curSampleI];
                let nextSample = samples[curSampleI + 1];
                cycleSize++;

                if (curSample >= 0) {
                    cycleExtreme = Math.max(curSample, cycleExtreme);
                    positiveCount++;
                } else {
                    cycleExtreme = Math.min(curSample, cycleExtreme);
                    negativeCount++;
                }

                if (curSample >= 0 && nextSample < 0) {
                    positiveSum += cycleExtreme * cycleSize;
                    cycleExtreme = 0;
                    cycleSize = 0;
                } else if (curSample < 0 && nextSample >= 0) {
                    negativeSum += cycleExtreme * cycleSize;
                    cycleExtreme = 0;
                    cycleSize = 0;
                }
            }

            let positiveMean = 0;
            if(positiveCount > 0) {
                positiveMean = positiveSum / positiveCount;
            }

            let negativeMean = 0;
            if(negativeCount > 0) {
                negativeMean = negativeSum / negativeCount;
            }

            positivePeakAvgs.push(positiveMean);
            negativePeakAvgs.push(negativeMean);
        }

        return {
            positivePeakAvgs: positivePeakAvgs,
            negativePeakAvgs: negativePeakAvgs
        };
    }
}

