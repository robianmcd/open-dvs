import {ThemeId} from "../../app/app.component";
import {WorkerType, WorkerUtil} from '../workerUtil';
import {Injectable} from '@angular/core';

@Injectable()
export class WaveformUtil {
    constructor(private workerUtil: WorkerUtil) {

    }

    //Give the waveform a bit of a boost to make up for what gets lost from taking averages.
    WAVEFORM_BOOST = 1.4;

    //Side effect: Clears the data from the buffer.
    getWaveformData(buffer: AudioBuffer) {
        let samples = buffer.getChannelData(0);

        return this.workerUtil.run({
            workerType: WorkerType.Waveform,
            method: 'getWaveformData',
            params: [samples.buffer],
            transferObjs: [samples.buffer]
        });
    }

    projectWaveform(samples: number[], sampleRate: number, outputSize: number, startTime: number = undefined, endTime: number = undefined): number[] {
        let outputSamples = [];

        if (startTime === undefined) {
            startTime = 0;
        }

        if (endTime === undefined) {
            endTime = samples.length / sampleRate;
        }

        //Tiny variations in the output length caused by the limitations of floating point percision cause the waveform
        //to jitter so desiredOutputLength is rounded to 5 decimal places.
        let desiredOutputLength = Math.round((endTime - startTime) * 100000) / 100000;
        let samplesPerPixel = (desiredOutputLength * sampleRate) / outputSize;
        let timePerPixel = samplesPerPixel / sampleRate;

        let pixelOffset = Math.round(startTime / timePerPixel);

        for (let col = 0; col < outputSize; col++) {
            if (pixelOffset < 0 && col + pixelOffset < 0) {
                outputSamples.push(0);
                continue;
            }

            let firstSampleInBucketIndex = Math.floor((pixelOffset + col) * samplesPerPixel);
            let lastSampleInBucketIndex = Math.floor((pixelOffset + col + 1) * samplesPerPixel);

            //Make sure the samples for the current column are not outside of the samples array
            firstSampleInBucketIndex = Math.min(firstSampleInBucketIndex, samples.length);
            lastSampleInBucketIndex = Math.min(lastSampleInBucketIndex, samples.length);

            let sum = 0;
            for (let sampleI = firstSampleInBucketIndex; sampleI < lastSampleInBucketIndex; sampleI++) {
                sum += samples[sampleI];
            }

            let mean: number;
            if (lastSampleInBucketIndex - firstSampleInBucketIndex === 0) {
                mean = 0;
            } else {
                mean = sum / (lastSampleInBucketIndex - firstSampleInBucketIndex);
            }
            mean = Math.min(1, mean * this.WAVEFORM_BOOST);
            outputSamples.push(mean);
        }

        return outputSamples;
    }

    drawWaveform({canvas, themeId, positiveSamples, negativeSamples, firstColorPixel, useGradient = true, drawFromX = 0, drawToX}: DrawWaveformOptions) {
        if (drawToX === undefined) {
            drawToX = canvas.width;
        }

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
        let showPositive = !!positiveSamples;
        let showNegative = !!negativeSamples;
        let showBoth = showPositive && showNegative;

        let positiveWaveform = positiveSamples;
        let negativeWaveform = negativeSamples;

        let numSamples = positiveWaveform ? positiveWaveform.length : negativeWaveform.length;

        let canvasCtx = canvas.getContext('2d');

        canvasCtx.clearRect(drawFromX-1, 0, drawToX-drawFromX, canvas.height);

        for (let col = Math.max(drawFromX, 0); col < Math.min(drawToX, numSamples); col++) {
            let topY;
            let bottomY;
            let startY;
            let halfWaveformHeight;
            if (showBoth) {
                topY = (1 - positiveWaveform[col]) / 2 * canvas.height;
                bottomY = (1 - negativeWaveform[col]) / 2 * canvas.height;
                startY = canvas.height / 2;
                halfWaveformHeight = canvas.height / 2;
            } else if (showPositive) {
                topY = (1 - positiveWaveform[col]) * canvas.height;
                startY = canvas.height;
                halfWaveformHeight = canvas.height;
            } else {
                //This is a bit of a hack. Right now if showNegative is true all the values are actually positive.
                //This is why the equation isn't (1 - negativeMean) * canvas.height
                //Should find a better way of handling this
                bottomY = negativeWaveform[col] * canvas.height;
                startY = 0;
                halfWaveformHeight = canvas.height;
            }

            let curPixedMainColor = mainColor;
            let curPixelHighlightColor = highlightColor;

            if (firstColorPixel !== undefined && firstColorPixel > col) {
                curPixedMainColor = '#5b5b5b';
                curPixelHighlightColor = '#a6a6a6';
            }

            if (showPositive) {
                canvasCtx.beginPath();
                canvasCtx.moveTo(col, startY);
                canvasCtx.lineTo(col, topY);

                if (useGradient) {
                    let gradient = canvasCtx.createLinearGradient(col, topY + halfWaveformHeight, col, topY + (halfWaveformHeight - topY) / 3);
                    gradient.addColorStop(0, curPixelHighlightColor);
                    gradient.addColorStop(1, curPixedMainColor);
                    canvasCtx.strokeStyle = gradient;
                } else {
                    canvasCtx.strokeStyle = mainColor;
                }

                canvasCtx.stroke();
            }

            if (showNegative) {
                canvasCtx.beginPath();
                canvasCtx.moveTo(col, startY);
                canvasCtx.lineTo(col, bottomY);

                if (useGradient) {
                    let gradient = canvasCtx.createLinearGradient(col, bottomY - halfWaveformHeight, col, bottomY - (bottomY - halfWaveformHeight) / 3);
                    gradient.addColorStop(0, curPixelHighlightColor);
                    gradient.addColorStop(1, curPixedMainColor);
                    canvasCtx.strokeStyle = gradient;
                }
                else {
                    canvasCtx.strokeStyle = mainColor;
                }

                canvasCtx.stroke();
            }
        }
    }

    generateDataUrlWaveform(positiveSamples: number[], negativeSamples: number[], sampleRate: number, width: number, height: number, themeId: ThemeId, cues: number[], startTime: number, duration: number) {
        let canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;

        let projectedPositiveSamples = this.projectWaveform(positiveSamples, sampleRate, width);
        let projectedNegativeSamples = this.projectWaveform(negativeSamples, sampleRate, width);

        this.drawWaveform({
            canvas,
            positiveSamples: projectedPositiveSamples,
            negativeSamples: projectedNegativeSamples,
            themeId
        });
        this.overlayCues(canvas, cues, startTime, duration);

        return canvas.toDataURL();
    }

    overlayCues(canvas: HTMLCanvasElement, cues: number[], startTime: number, duration: number, labelAtTop: boolean = true) {
        cues.forEach((cueTime, index) => {
            if (cueTime >= startTime && cueTime <= startTime + duration) {
                let cueX = (cueTime - startTime) / duration * canvas.width;

                let canvasCtx = canvas.getContext('2d');

                canvasCtx.fillStyle = 'white';
                canvasCtx.fillRect(cueX, 0, 0.5, canvas.height);

                let textBottom = labelAtTop ? 10 : canvas.height - 4;
                let textTop = textBottom - 10;

                let lastStrokeStyle = canvasCtx.strokeStyle;
                canvasCtx.strokeStyle = 'white';

                canvasCtx.clearRect(cueX - 14, textTop, 14, 14);
                canvasCtx.strokeRect(cueX - 14, textTop, 14, 14);

                canvasCtx.strokeStyle = lastStrokeStyle;

                canvasCtx.strokeText((index + 1).toString(), cueX - 10, textBottom);

            }
        })
    }
}

export interface DrawWaveformOptions {
    canvas: HTMLCanvasElement,
    themeId: ThemeId,
    positiveSamples?: number[],
    negativeSamples?: number[],
    firstColorPixel?: number,
    useGradient?: boolean,
    drawFromX?: number,
    drawToX?: number
}