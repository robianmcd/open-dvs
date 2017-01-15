import {WaveformDetails} from "../models/songDetails";
import {ThemeId} from "../app/app.component";
export class WaveformUtil {
    constructor() {

    }

    //Also generate
    //441 avg extremems / second
    //used for center graph where we show 6 seconds of data
    //TODO look into doing this on a web worker
    getWaveformData(buffer: AudioBuffer) {
        const waveformPreviewSize = 2000;
        let samples = buffer.getChannelData(0);

        let positiveWaveformPreview = [];
        let negativeWaveformPreview = [];

        let bucketSize = Math.floor(samples.length / waveformPreviewSize);

        for (let col = 0; col < waveformPreviewSize; col++) {
            let positiveSum = 0;
            let positiveCount = 0;
            let negativeSum = 0;
            let negativeCount = 0;

            let bucketOffset = col * bucketSize;

            let cycleExtreme = 0;
            let cycleSize = 0;
            for (let sampleI = 1; sampleI < bucketSize; sampleI++) {

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

            positiveWaveformPreview.push(positiveMean);
            negativeWaveformPreview.push(negativeMean);
        }

        return {
            positivePreview: positiveWaveformPreview,
            negativePreview: negativeWaveformPreview,
            previewSzie: waveformPreviewSize
        };
    }

    drawWaveform(canvas: HTMLCanvasElement, waveformDetails: WaveformDetails, themeId) {
        let mainColor;
        let highlightColor;
        switch(themeId) {
            case ThemeId.DECK1:
                mainColor = '#632B9B';
                highlightColor = '#782EB3';
                break;
            case ThemeId.DECK2:
                mainColor = '#165eaa';
                highlightColor = '#1773C3';
                break;
            case ThemeId.DEFAULT:
                mainColor = '#5b5b5b';
                highlightColor = '#757575';
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

            let maxY = (1 - positiveMean) / 2 * canvas.height;
            let minY = (1 - negativeMean) / 2 * canvas.height;

            let centerY = canvas.height / 2;

            canvasCtx.beginPath();
            canvasCtx.moveTo(col, centerY);
            canvasCtx.lineTo(col, maxY);

            let gradient = canvasCtx.createLinearGradient(col, centerY, col, maxY);
            gradient.addColorStop(0, highlightColor);
            gradient.addColorStop(1, mainColor);
            canvasCtx.strokeStyle = gradient;
            canvasCtx.stroke();

            canvasCtx.beginPath();
            canvasCtx.moveTo(col, centerY);
            canvasCtx.lineTo(col, minY);

            gradient = canvasCtx.createLinearGradient(col, centerY, col, minY);
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
}