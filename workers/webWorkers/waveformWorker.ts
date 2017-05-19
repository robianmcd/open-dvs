self.addEventListener('message', function(e: MessageEvent) {
    let result;

    try {
        switch(e.data.method) {
            case 'getWaveformData':
                result = getWaveformData(e.data.params[0]);
                break;
            default:
                console.error(`waveformWorker: unknown method "${e.data.method}"`);
                return;
        }

        postMessage({msgId: e.data.msgId, result});
    } catch(error) {
        postMessage({msgId: e.data.msgId, error});
    }

}, false);

function getWaveformData(buffer: ArrayBuffer) {
    const numSamplesInPreview = 2000;
    let samples = new Float32Array(buffer);

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
        numSamples: numSamplesInPreview,
        compress100X
    };

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
function getWeightedPeakAvgs({samples, numBuckets, samplesPerBucket}: {samples: Float32Array, numBuckets?: number, samplesPerBucket?: number}) {

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
        if (positiveCount > 0) {
            positiveMean = positiveSum / positiveCount;
        }

        let negativeMean = 0;
        if (negativeCount > 0) {
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