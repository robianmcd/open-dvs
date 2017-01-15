import {WaveformDetails} from "../models/songDetails";
import {ThemeId} from "../app/app.component";
export class WaveformUtil {
    constructor() {

    }


    getWaveformData(buffer: AudioBuffer) {
        const waveformPreviewSize = 2000;
        let samples = buffer.getChannelData(0);

        //TODO: run these calls in web workers
        let previewPeakAvgs = this.getWeightedPeakAvgs({samples, numBuckets: waveformPreviewSize});
        let detailedPeakAvgs = this.getWeightedPeakAvgs({samples, samplesPerBucket: 100});

        let compress100X = [];
        for (let i = 0; i < detailedPeakAvgs.positivePeakAvgs.length; i++) {
            let positiveVal = detailedPeakAvgs.positivePeakAvgs[i];
            let absNegativeVal = Math.abs(detailedPeakAvgs.negativePeakAvgs[i]);
            compress100X.push(Math.max(positiveVal, absNegativeVal));
        }

        return {
            positivePreview: previewPeakAvgs.positivePeakAvgs,
            negativePreview: previewPeakAvgs.negativePeakAvgs,
            previewSzie: waveformPreviewSize,
            compress100X
        };
    }

    drawWaveform(canvas: HTMLCanvasElement, waveformDetails: WaveformDetails, themeId) {
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

        let waveformPreviewSize = waveformDetails.waveformPreviewSize;
        let positiveWaveformPreview = waveformDetails.positiveWaveformPreview;
        let negativeWaveformPreview = waveformDetails.negativeWaveformPreview;

        let canvasCtx = canvas.getContext('2d');

        let previewSamplesPerPixel = waveformPreviewSize / canvas.width;

        for (let col = 0; col < canvas.width; col++) {
            let firstSampleI = Math.floor(col * previewSamplesPerPixel);
            let lastSampleI = Math.floor(firstSampleI + previewSamplesPerPixel);

            let positiveSum = 0;
            let negativeSum = 0;
            for (let sampleI = firstSampleI; sampleI < lastSampleI; sampleI++) {
                positiveSum += positiveWaveformPreview[sampleI];
                negativeSum += negativeWaveformPreview[sampleI];
            }

            let positiveMean = positiveSum / (lastSampleI - firstSampleI);
            let negativeMean = negativeSum / (lastSampleI - firstSampleI);
            //Give the waveform a bit of a boost to make up for what gets lost from taking averages.
            positiveMean = Math.min(1, positiveMean * 1.4);
            negativeMean = Math.min(1, negativeMean * 1.4);

            let topY = (1 - positiveMean) / 2 * canvas.height;
            let bottomY = (1 - negativeMean) / 2 * canvas.height;

            let centerY = canvas.height / 2;

            canvasCtx.beginPath();
            canvasCtx.moveTo(col, centerY);
            canvasCtx.lineTo(col, topY);

            let gradient = canvasCtx.createLinearGradient(col, topY + centerY, col, topY + (centerY-topY)/3);
            gradient.addColorStop(0, highlightColor);
            gradient.addColorStop(1, mainColor);
            canvasCtx.strokeStyle = gradient;
            canvasCtx.stroke();

            canvasCtx.beginPath();
            canvasCtx.moveTo(col, centerY);
            canvasCtx.lineTo(col, bottomY);

            gradient = canvasCtx.createLinearGradient(col, bottomY - centerY, col, bottomY - (bottomY-centerY)/3);
            gradient.addColorStop(0, highlightColor);
            gradient.addColorStop(1, mainColor);
            canvasCtx.strokeStyle = gradient;
            canvasCtx.stroke();
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
               +                         +  XX              XX  +            + XX
               +-------------+-----------+   XX          XXXX   +-----+------+  XX
                             |                XXX      XXX            |          XX
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

            let positiveMean = positiveSum / positiveCount;
            let negativeMean = negativeSum / negativeCount;

            positivePeakAvgs.push(positiveMean);
            negativePeakAvgs.push(negativeMean);
        }

        return {
            positivePeakAvgs: positivePeakAvgs,
            negativePeakAvgs: negativePeakAvgs
        };
    }
}

