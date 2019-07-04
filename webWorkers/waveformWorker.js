self.addEventListener('message', function (e) {
    var result;
    try {
        switch (e.data.method) {
            case 'getWaveformData':
                result = getWaveformData(e.data.params[0]);
                break;
            default:
                console.error("waveformWorker: unknown method \"" + e.data.method + "\"");
                return;
        }
        postMessage({ msgId: e.data.msgId, result: result });
    }
    catch (error) {
        postMessage({ msgId: e.data.msgId, error: error });
    }
}, false);
function getWaveformData(buffer) {
    var numSamplesInPreview = 2000;
    var samples = new Float32Array(buffer);
    var previewPeakAvgs = this.getWeightedPeakAvgs({ samples: samples, numBuckets: numSamplesInPreview });
    var detailedPeakAvgs = this.getWeightedPeakAvgs({ samples: samples, samplesPerBucket: 100 });
    var compress100X = [];
    for (var i = 0; i < detailedPeakAvgs.positivePeakAvgs.length; i++) {
        var positiveVal = detailedPeakAvgs.positivePeakAvgs[i];
        var absNegativeVal = Math.abs(detailedPeakAvgs.negativePeakAvgs[i]);
        compress100X.push(Math.max(positiveVal, absNegativeVal));
    }
    return {
        positiveSamples: previewPeakAvgs.positivePeakAvgs,
        negativeSamples: previewPeakAvgs.negativePeakAvgs,
        numSamples: numSamplesInPreview,
        compress100X: compress100X
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
function getWeightedPeakAvgs(_a) {
    var samples = _a.samples, numBuckets = _a.numBuckets, samplesPerBucket = _a.samplesPerBucket;
    if (numBuckets !== undefined) {
        //TODO: this will lead to rounding errors. Use exact value instead and round it for each bucket.
        samplesPerBucket = Math.floor(samples.length / numBuckets);
    }
    else if (samplesPerBucket !== undefined) {
        //TODO: run this equation backwards to calculate the exact average samplesPerBucket
        numBuckets = Math.floor(samples.length / samplesPerBucket);
    }
    else {
        throw new Error('Must specify either numBuckets or samplesPerBucket');
    }
    var positivePeakAvgs = [];
    var negativePeakAvgs = [];
    for (var col = 0; col < numBuckets; col++) {
        var positiveSum = 0;
        var positiveCount = 0;
        var negativeSum = 0;
        var negativeCount = 0;
        var bucketOffset = col * samplesPerBucket;
        var cycleExtreme = 0;
        var cycleSize = 0;
        for (var sampleI = 1; sampleI < samplesPerBucket; sampleI++) {
            var curSampleI = bucketOffset + sampleI;
            var curSample = samples[curSampleI];
            var nextSample = samples[curSampleI + 1];
            cycleSize++;
            if (curSample >= 0) {
                cycleExtreme = Math.max(curSample, cycleExtreme);
                positiveCount++;
            }
            else {
                cycleExtreme = Math.min(curSample, cycleExtreme);
                negativeCount++;
            }
            if (curSample >= 0 && nextSample < 0) {
                positiveSum += cycleExtreme * cycleSize;
                cycleExtreme = 0;
                cycleSize = 0;
            }
            else if (curSample < 0 && nextSample >= 0) {
                negativeSum += cycleExtreme * cycleSize;
                cycleExtreme = 0;
                cycleSize = 0;
            }
        }
        var positiveMean = 0;
        if (positiveCount > 0) {
            positiveMean = positiveSum / positiveCount;
        }
        var negativeMean = 0;
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
