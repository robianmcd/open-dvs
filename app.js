(function (_angular_platformBrowserDynamic,_angular_core,_angular_platformBrowser,_angular_material,rxjs,rxjs_BehaviorSubject,_angular_forms) {
'use strict';

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}

var WaveformUtil = (function () {
    function WaveformUtil() {
        //Give the waveform a bit of a boost to make up for what gets lost from taking averages.
        this.WAVEFORM_BOOST = 1.4;
    }
    WaveformUtil.prototype.getWaveformData = function (buffer) {
        var numSamplesInPreview = 2000;
        var samples = buffer.getChannelData(0);
        //TODO: run these calls in web workers
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
    };
    WaveformUtil.prototype.projectWaveform = function (samples, sampleRate, outputSize, startTime, endTime) {
        if (startTime === void 0) { startTime = undefined; }
        if (endTime === void 0) { endTime = undefined; }
        var outputSamples = [];
        if (startTime === undefined) {
            startTime = 0;
        }
        if (endTime === undefined) {
            endTime = samples.length / sampleRate;
        }
        //Tiny variations in the output length caused by the limitations of floating point percision cause the waveform
        //to jitter so desiredOutputLength is rounded to 5 decimal places.
        var desiredOutputLength = Math.round((endTime - startTime) * 100000) / 100000;
        var samplesPerPixel = (desiredOutputLength * sampleRate) / outputSize;
        var timePerPixel = samplesPerPixel / sampleRate;
        var pixelOffset = Math.round(startTime / timePerPixel);
        for (var col = 0; col < outputSize; col++) {
            if (pixelOffset < 0 && col + pixelOffset < 0) {
                outputSamples.push(0);
                continue;
            }
            var firstSampleInBucketIndex = Math.floor((pixelOffset + col) * samplesPerPixel);
            var lastSampleInBucketIndex = Math.floor((pixelOffset + col + 1) * samplesPerPixel);
            //Make sure the samples for the current column are not outside of the samples array
            firstSampleInBucketIndex = Math.min(firstSampleInBucketIndex, samples.length);
            lastSampleInBucketIndex = Math.min(lastSampleInBucketIndex, samples.length);
            var sum = 0;
            for (var sampleI = firstSampleInBucketIndex; sampleI < lastSampleInBucketIndex; sampleI++) {
                sum += samples[sampleI];
            }
            var mean = void 0;
            if (lastSampleInBucketIndex - firstSampleInBucketIndex === 0) {
                mean = 0;
            }
            else {
                mean = sum / (lastSampleInBucketIndex - firstSampleInBucketIndex);
            }
            mean = Math.min(1, mean * this.WAVEFORM_BOOST);
            outputSamples.push(mean);
        }
        return outputSamples;
    };
    WaveformUtil.prototype.drawWaveform = function (_a) {
        var canvas = _a.canvas, themeId = _a.themeId, positiveSamples = _a.positiveSamples, negativeSamples = _a.negativeSamples, firstColorPixel = _a.firstColorPixel, _b = _a.useGradient, useGradient = _b === void 0 ? true : _b, _c = _a.drawFromX, drawFromX = _c === void 0 ? 0 : _c, drawToX = _a.drawToX;
        if (drawToX === undefined) {
            drawToX = canvas.width;
        }
        var mainColor;
        var highlightColor;
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
        var showPositive = !!positiveSamples;
        var showNegative = !!negativeSamples;
        var showBoth = showPositive && showNegative;
        var positiveWaveform = positiveSamples;
        var negativeWaveform = negativeSamples;
        var numSamples = positiveWaveform ? positiveWaveform.length : negativeWaveform.length;
        var canvasCtx = canvas.getContext('2d');
        canvasCtx.clearRect(drawFromX - 1, 0, drawToX - drawFromX, canvas.height);
        for (var col = Math.max(drawFromX, 0); col < Math.min(drawToX, numSamples); col++) {
            var topY = void 0;
            var bottomY = void 0;
            var startY = void 0;
            var halfWaveformHeight = void 0;
            if (showBoth) {
                topY = (1 - positiveWaveform[col]) / 2 * canvas.height;
                bottomY = (1 - negativeWaveform[col]) / 2 * canvas.height;
                startY = canvas.height / 2;
                halfWaveformHeight = canvas.height / 2;
            }
            else if (showPositive) {
                topY = (1 - positiveWaveform[col]) * canvas.height;
                startY = canvas.height;
                halfWaveformHeight = canvas.height;
            }
            else {
                //This is a bit of a hack. Right now if showNegative is true all the values are actually positive.
                //This is why the equation isn't (1 - negativeMean) * canvas.height
                //Should find a better way of handling this
                bottomY = negativeWaveform[col] * canvas.height;
                startY = 0;
                halfWaveformHeight = canvas.height;
            }
            var curPixedMainColor = mainColor;
            var curPixelHighlightColor = highlightColor;
            if (firstColorPixel !== undefined && firstColorPixel > col) {
                curPixedMainColor = '#5b5b5b';
                curPixelHighlightColor = '#a6a6a6';
            }
            if (showPositive) {
                canvasCtx.beginPath();
                canvasCtx.moveTo(col, startY);
                canvasCtx.lineTo(col, topY);
                if (useGradient) {
                    var gradient = canvasCtx.createLinearGradient(col, topY + halfWaveformHeight, col, topY + (halfWaveformHeight - topY) / 3);
                    gradient.addColorStop(0, curPixelHighlightColor);
                    gradient.addColorStop(1, curPixedMainColor);
                    canvasCtx.strokeStyle = gradient;
                }
                else {
                    canvasCtx.strokeStyle = mainColor;
                }
                canvasCtx.stroke();
            }
            if (showNegative) {
                canvasCtx.beginPath();
                canvasCtx.moveTo(col, startY);
                canvasCtx.lineTo(col, bottomY);
                if (useGradient) {
                    var gradient = canvasCtx.createLinearGradient(col, bottomY - halfWaveformHeight, col, bottomY - (bottomY - halfWaveformHeight) / 3);
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
    };
    WaveformUtil.prototype.generateDataUrlWaveform = function (positiveSamples, negativeSamples, sampleRate, width, height, themeId, cues, startTime, duration) {
        var canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        var projectedPositiveSamples = this.projectWaveform(positiveSamples, sampleRate, width);
        var projectedNegativeSamples = this.projectWaveform(negativeSamples, sampleRate, width);
        this.drawWaveform({
            canvas: canvas,
            positiveSamples: projectedPositiveSamples,
            negativeSamples: projectedNegativeSamples,
            themeId: themeId
        });
        this.overlayCues(canvas, cues, startTime, duration);
        return canvas.toDataURL();
    };
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
    WaveformUtil.prototype.getWeightedPeakAvgs = function (_a) {
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
    };
    WaveformUtil.prototype.overlayCues = function (canvas, cues, startTime, duration, labelAtTop) {
        if (labelAtTop === void 0) { labelAtTop = true; }
        cues.forEach(function (cueTime, index) {
            if (cueTime >= startTime && cueTime <= startTime + duration) {
                var cueX = (cueTime - startTime) / duration * canvas.width;
                var canvasCtx = canvas.getContext('2d');
                canvasCtx.fillStyle = 'white';
                canvasCtx.fillRect(cueX, 0, 0.5, canvas.height);
                var textBottom = labelAtTop ? 10 : canvas.height - 4;
                var textTop = textBottom - 10;
                var lastStrokeStyle = canvasCtx.strokeStyle;
                canvasCtx.strokeStyle = 'white';
                canvasCtx.clearRect(cueX - 14, textTop, 14, 14);
                canvasCtx.strokeRect(cueX - 14, textTop, 14, 14);
                canvasCtx.strokeStyle = lastStrokeStyle;
                canvasCtx.strokeText((index + 1).toString(), cueX - 10, textBottom);
            }
        });
    };
    return WaveformUtil;
}());

var ActiveSong = (function () {
    function ActiveSong(deckId, audioUtil, deckAudioSettings, dspUtil, resampler, audioOutput) {
        var _this = this;
        this.deckId = deckId;
        this.audioUtil = audioUtil;
        this.deckAudioSettings = deckAudioSettings;
        this.dspUtil = dspUtil;
        this.resampler = resampler;
        this.audioOutput = audioOutput;
        this.song$ = new rxjs.ReplaySubject();
        this._playbackRate = 0;
        this.lastPlaybackDirectionIsForward = true;
        this.controlled = false;
        this.BUFFER_SIZE = 1024;
        this.song$.subscribe(function (song) { return _this.song = song; });
        this.gainNode = this.audioUtil.context.createGain();
        this.gainNode.connect(this.audioOutput.getInputForDeck(deckId));
        this.scriptNode = this.audioUtil.context.createScriptProcessor(this.BUFFER_SIZE);
        this.scriptNode.onaudioprocess = function (e) { return _this.processControlAudio(e); };
    }
    Object.defineProperty(ActiveSong.prototype, "playbackRate", {
        get: function () {
            return this._playbackRate;
        },
        set: function (value) {
            this._playbackRate = value;
            if (value !== 0) {
                this.lastPlaybackDirectionIsForward = (value > 0);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActiveSong.prototype, "isPlaying", {
        get: function () {
            return this.buffer !== undefined && this.playbackRate !== 0 && !this.isControlled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActiveSong.prototype, "isLoaded", {
        get: function () {
            return !!this.buffer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActiveSong.prototype, "songObservable", {
        get: function () {
            return this.song$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActiveSong.prototype, "currentSongOffset", {
        get: function () {
            var songOffsetSinceLastRecording = (this.audioUtil.context.currentTime - this.songOffsetRecordedTime) * this.playbackRate;
            return this.songOffset + songOffsetSinceLastRecording;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActiveSong.prototype, "isControlled", {
        get: function () {
            return this.controlled;
        },
        enumerable: true,
        configurable: true
    });
    ActiveSong.prototype.enableControl = function () {
        var _this = this;
        var controlDevice = this.deckAudioSettings.getControlIn();
        if (controlDevice) {
            if (this.isPlaying) {
                this.pauseBuffer();
            }
            this.controlled = true;
            var constraints = {
                audio: {
                    deviceId: controlDevice.deviceId,
                    echoCancellation: { exact: false }
                }
            };
            navigator.mediaDevices.getUserMedia(constraints)
                .then(function (stream) {
                _this.controlInputNode = _this.audioUtil.context.createMediaStreamSource(stream);
                _this.controlInputNode.connect(_this.scriptNode);
                _this.scriptNode.connect(_this.gainNode);
            }, function (error) {
                console.error('Could not load control device.', error);
                _this.controlled = false;
            });
        }
    };
    ActiveSong.prototype.disableControl = function () {
        this.controlInputNode.disconnect();
        this.controlInputNode = undefined;
        this.scriptNode.disconnect();
        this.controlled = false;
        this.updateSongOffset();
        this.playbackRate = 0;
    };
    ActiveSong.prototype.toggleControl = function () {
        this.isControlled ? this.disableControl() : this.enableControl();
    };
    ActiveSong.prototype.processControlAudio = function (event) {
        //This could happen once after you disable control
        if (!this.isControlled) {
            return;
        }
        var context = this.audioUtil.context;
        var leftInputBuffer = event.inputBuffer.getChannelData(0);
        var rightInputBuffer = event.inputBuffer.getChannelData(1);
        var leftScriptOutputBuffer = event.outputBuffer.getChannelData(0);
        var rightScriptOutputBuffer = event.outputBuffer.getChannelData(1);
        var subChunkSize = 512;
        var defaultPilotHz = 2000;
        try {
            for (var subChunkOffset = 0; subChunkOffset < this.BUFFER_SIZE; subChunkOffset += subChunkSize) {
                var leftSubInputBuffer = this.audioUtil.copyBuffer(leftInputBuffer, subChunkOffset, subChunkSize);
                var rightSubInputBuffer = this.audioUtil.copyBuffer(rightInputBuffer, subChunkOffset, subChunkSize);
                var _a = this.getControlFreq(leftSubInputBuffer), pilotHz = _a.pilotHz, periodSamples = _a.periodSamples;
                var playingForward = this.controlIsPlayingForward(leftSubInputBuffer, rightSubInputBuffer, periodSamples);
                var playDirectionMultiplier = playingForward ? 1 : -1;
                var songSize = Math.round(subChunkSize * (pilotHz / defaultPilotHz));
                var songPlaybackRate = songSize / subChunkSize;
                var songSampleRate = context.sampleRate * songPlaybackRate;
                var _b = this.getChunkOfSongForControl(songSize, playingForward), leftSongBuffer = _b.leftSongBuffer, rightSongBuffer = _b.rightSongBuffer;
                var leftRenderedBuffer = this.resampler.resample(leftSongBuffer, songSampleRate, context.sampleRate);
                var rightRenderedBuffer = this.resampler.resample(rightSongBuffer, songSampleRate, context.sampleRate);
                for (var i = 0; i < subChunkSize; i++) {
                    leftScriptOutputBuffer[i + subChunkOffset] = leftRenderedBuffer[i];
                    rightScriptOutputBuffer[i + subChunkOffset] = rightRenderedBuffer[i];
                }
                this.songOffset += songSize * playDirectionMultiplier / this.audioUtil.context.sampleRate;
                this.playbackRate = songSize * playDirectionMultiplier / this.BUFFER_SIZE;
                this.songOffsetRecordedTime = this.audioUtil.context.currentTime;
            }
        }
        catch (e) {
            this.playbackRate = 0;
            this.songOffsetRecordedTime = this.audioUtil.context.currentTime;
            for (var i = 0; i < this.BUFFER_SIZE; i++) {
                leftScriptOutputBuffer[i] = 0;
                rightScriptOutputBuffer[i] = 0;
            }
        }
    };
    ActiveSong.prototype.getControlFreq = function (buf) {
        var pilotHz = this.dspUtil.autoCorrelate(buf, this.audioUtil.context.sampleRate);
        var periodSamples = this.audioUtil.context.sampleRate / pilotHz;
        //Not enough of a signal to detect/too quiet or too slow
        if (pilotHz === -1) {
            throw new Error('Could not detect frequency');
        }
        else {
            return { pilotHz: pilotHz, periodSamples: periodSamples };
        }
    };
    ActiveSong.prototype.controlIsPlayingForward = function (leftBuf, rightBuf, periodSamples) {
        var isPlayingForward = this.dspUtil.isPlayingForwardMaxMin(leftBuf, rightBuf, periodSamples);
        if (isPlayingForward !== undefined) {
            return isPlayingForward;
        }
        else {
        }
        var phaseSamples = this.dspUtil.crossCorrelate(leftBuf, rightBuf);
        //This should be from 0.22 to 0.25
        var relPhaseSeperation = Math.min(periodSamples - phaseSamples, phaseSamples) / periodSamples;
        if (phaseSamples === -1 || relPhaseSeperation < 0.2 || relPhaseSeperation > 0.3 || phaseSamples > periodSamples) {
            return this.lastPlaybackDirectionIsForward;
        }
        else {
            return phaseSamples > periodSamples - phaseSamples;
        }
    };
    ActiveSong.prototype.getChunkOfSongForControl = function (size, playingForward) {
        var leftFullSongBuffer = this.buffer.getChannelData(0);
        var rightFullSongBuffer = this.buffer.getChannelData(1);
        var leftSongBuffer = new Float32Array(size);
        var rightSongBuffer = new Float32Array(size);
        var playDirectionMultiplier = playingForward ? 1 : -1;
        var offsetSamples = Math.round(this.songOffset * this.audioUtil.context.sampleRate);
        var _loop_1 = function(i) {
            var songIndex = i * playDirectionMultiplier + offsetSamples;
            var songIndexIsValid = function () { return songIndex >= 0 && songIndex <= leftFullSongBuffer.length; };
            leftSongBuffer[i] = songIndexIsValid() ? leftFullSongBuffer[songIndex] : 0;
            rightSongBuffer[i] = songIndexIsValid() ? rightFullSongBuffer[songIndex] : 0;
        };
        for (var i = 0; i < size; i++) {
            _loop_1(i);
        }
        return { leftSongBuffer: leftSongBuffer, rightSongBuffer: rightSongBuffer };
    };
    ActiveSong.prototype.setSongOffset = function (time) {
        this.songOffset = time;
        this.songOffsetRecordedTime = this.audioUtil.context.currentTime;
        if (!this.isControlled && this.isPlaying) {
            this.pauseBuffer();
            this.playBuffer();
        }
    };
    ActiveSong.prototype.loadSong = function (song) {
        var _this = this;
        var context = this.audioUtil.context;
        return context.decodeAudioData(song.buffer)
            .then(function (audioBuffer) {
            _this.buffer = audioBuffer;
            _this.songOffset = 0;
            _this.songOffsetRecordedTime = context.currentTime;
            _this.playbackRate = 0;
            _this.song$.next(song);
        });
    };
    ActiveSong.prototype.playBuffer = function () {
        if (this.buffer && !this.isPlaying && !this.isControlled) {
            var context = this.audioUtil.context;
            if (this.source) {
                this.source.stop();
            }
            this.updateSongOffset();
            //todo: replace 1 with value of the tempo slider
            this.playbackRate = 1;
            this.source = context.createBufferSource();
            this.source.playbackRate.value = this.playbackRate;
            this.source.buffer = this.buffer;
            this.source.connect(this.gainNode);
            this.source.start(context.currentTime, this.songOffset);
        }
    };
    ActiveSong.prototype.pauseBuffer = function () {
        if (this.buffer) {
            this.updateSongOffset();
            this.playbackRate = 0;
            this.source.stop();
            this.source = undefined;
        }
    };
    ActiveSong.prototype.setGain = function (gain) {
        //delay when gain is set to make up for audio latency. Maybe set this to 40ms in OSX and 170ms on windows
        this.gainNode.gain.setValueAtTime(gain, this.audioUtil.context.currentTime + 40 / 1000);
        //this.gainNode.gain.value = gain;
    };
    ActiveSong.prototype.updateSongOffset = function () {
        this.songOffset = this.currentSongOffset;
        this.songOffsetRecordedTime = this.audioUtil.context.currentTime;
    };
    return ActiveSong;
}());

var AudioUtil = (function () {
    function AudioUtil() {
        var _this = this;
        this.context = new AudioContext();
        this.inputDevices = new rxjs.ReplaySubject();
        this.outputDevices = new rxjs.ReplaySubject();
        //The requests for microphone access. Without this we can't get the names of audio inputs and outputs
        //TODO: can this be replaced with navigator.mediaDevices.getUserMedia
        navigator.getUserMedia({ audio: true }, function () { return _this.onUserMediaLoad(); }, function () { return _this.onUserMediaError(); });
    }
    Object.defineProperty(AudioUtil.prototype, "inputDevices$", {
        get: function () {
            return this.inputDevices.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioUtil.prototype, "outputDevices$", {
        get: function () {
            return this.outputDevices.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    AudioUtil.prototype.copyBuffer = function (buf, start, size) {
        if (start === undefined) {
            start = 0;
        }
        if (size === undefined) {
            size = buf.length;
        }
        var output = new Float32Array(size);
        for (var i = 0; i < size; i++) {
            output[i] = buf[i + start];
        }
        return output;
    };
    AudioUtil.prototype.onUserMediaLoad = function () {
        var _this = this;
        //TODO: check if this event actually triggers change detection. Might have issues with zone.js
        navigator.mediaDevices.ondevicechange = function () { return _this.updateDeviceLists(); };
        this.updateDeviceLists();
    };
    AudioUtil.prototype.onUserMediaError = function () {
        console.error('Could not get access to audio inputs');
    };
    AudioUtil.prototype.updateDeviceLists = function () {
        var _this = this;
        navigator.mediaDevices.enumerateDevices().then(function (devices) {
            var inputDevices = [];
            var outputDevices = [];
            devices.forEach(function (device) {
                //Not sure what the 'Communications' device is...
                if (device.label !== 'Communications') {
                    if (device.kind === 'audioinput') {
                        inputDevices.push(device);
                    }
                    else if (device.kind === 'audiooutput') {
                        outputDevices.push(device);
                    }
                }
            });
            _this.inputDevices.next(inputDevices);
            _this.outputDevices.next(outputDevices);
        });
    };
    AudioUtil = __decorate([
        _angular_core.Injectable(), 
        __metadata('design:paramtypes', [])
    ], AudioUtil);
    return AudioUtil;
}());

function dbMigration1(db) {
    db.createObjectStore('songDetails', { autoIncrement: true, keyPath: 'id' });
    db.createObjectStore('songBuffer');
    db.createObjectStore('preferences');
}

function dbMigration20(db, upgradeTransaction) {
    var getSongCursor = upgradeTransaction.objectStore('songDetails').openCursor();
    var albumDataUrlById = {};
    var resizingImagesPromises = [];
    getSongCursor.onsuccess = function (e) {
        var cursor = e.target['result'];
        if (cursor) {
            var details_1 = cursor.value;
            if (details_1['base64Pic']) {
                resizingImagesPromises.push(resizeBase64Img(details_1['picFormat'], details_1['base64Pic'], 100, 100)
                    .then(function (albumDataUrl) {
                    albumDataUrlById[details_1.id] = albumDataUrl;
                    delete details_1['picFormat'];
                    delete details_1['base64Pic'];
                    details_1.albumDataUrl = albumDataUrl;
                }));
            }
            cursor.continue();
        }
        else {
            //ლ(ಠ_ಠლ)
            setTimeout(function () {
                updateAlbumPics(db, albumDataUrlById, resizingImagesPromises);
            });
        }
    };
}
function updateAlbumPics(db, albumDataUrlById, resizingImagesPromises) {
    Promise.all(resizingImagesPromises)
        .then(function () {
        var updateAlbumCoversTransaction = db.transaction(['songDetails'], Db.READWRITE_TRANSACTION);
        var getSongCursor = updateAlbumCoversTransaction.objectStore('songDetails').openCursor();
        getSongCursor.onsuccess = function (e) {
            var cursor = e.target['result'];
            if (cursor) {
                var details = cursor.value;
                if (details['base64Pic']) {
                    delete details['picFormat'];
                    delete details['base64Pic'];
                    details.albumDataUrl = albumDataUrlById[details.id];
                    cursor.update(details);
                    cursor.continue();
                }
                else {
                    cursor.continue();
                }
            }
        };
    });
}
//based on http://stackoverflow.com/a/20965997/373655
function resizeBase64Img(type, base64, maxWidth, maxHeight) {
    return new Promise(function (resolve) {
        var img = new Image;
        img.onload = resizeImage;
        img.src = "data:" + type + ";base64," + base64;
        function resizeImage() {
            var targetWidth = img.width;
            var targetHeight = img.height;
            if (img.width > maxWidth) {
                targetWidth = maxWidth;
                targetHeight = img.height / (img.width / maxWidth);
            }
            if (targetHeight > maxHeight) {
                targetHeight = maxHeight;
                targetWidth = img.width / (img.height / maxHeight);
            }
            resolve(imageToDataUri(img, targetWidth, targetHeight));
        }
        function imageToDataUri(img, width, height) {
            // create an off-screen canvas
            var canvas = document.createElement('canvas'), ctx = canvas.getContext('2d');
            // set its dimension to target size
            canvas.width = width;
            canvas.height = height;
            // draw source image into the off-screen canvas:
            ctx.drawImage(img, 0, 0, width, height);
            // encode image to data-uri with base64 version of compressed image
            return canvas.toDataURL('image/jpeg', 0.8);
        }
    });
}

function dbMigration21(db, transaction) {
    var getSongCursor = transaction.objectStore('songDetails').openCursor();
    getSongCursor.onsuccess = function (e) {
        var cursor = e.target['result'];
        if (cursor) {
            var details = cursor.value;
            details.cues = details.cues || [];
            cursor.update(details);
            cursor.continue();
        }
    };
}

var Db = (function () {
    function Db() {
        var _this = this;
        this.dbInitialized = new Promise(function (resolve, reject) {
            _this.resolveInitialized = resolve;
            _this.rejectInitialized = reject;
        });
    }
    Db.reqToPromise = function (req) {
        return new Promise(function (resolve, reject) {
            req.onsuccess = resolve;
            req.onerror = reject;
        });
    };
    Db.arrayBufferToBase64 = function (buffer) {
        var binary = '';
        var bytes = new Uint8Array(buffer);
        var len = bytes.byteLength;
        for (var i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        return btoa(binary);
    };
    Db.prototype.initialize = function () {
        var _this = this;
        var openRequest = indexedDB.open('dvs', Db.DB_VERSION);
        var oldVersion;
        openRequest.onupgradeneeded = function (versionEvent) {
            var db = versionEvent.target['result'];
            var transaction = versionEvent.target['transaction'];
            oldVersion = versionEvent.oldVersion;
            if (oldVersion !== undefined) {
                if (oldVersion < 1) {
                    dbMigration1(db);
                }
                if (oldVersion >= 1 && oldVersion < 20) {
                    dbMigration20(db, transaction);
                }
                if (oldVersion >= 1 && oldVersion < 21) {
                    dbMigration21(db, transaction);
                }
            }
        };
        openRequest.onsuccess = function (event) {
            _this.db = event.target['result'];
            _this.resolveInitialized(_this.db);
        };
        openRequest.onerror = this.rejectInitialized;
        return this.dbInitialized;
    };
    Db.READONLY_TRANSACTION = 'readonly';
    Db.READWRITE_TRANSACTION = 'readwrite';
    Db.DB_VERSION = 21;
    Db = __decorate([
        _angular_core.Injectable(), 
        __metadata('design:paramtypes', [])
    ], Db);
    return Db;
}());

var Preferences = (function () {
    function Preferences() {
        this.crossfaderCurveSharpness = 0;
        this.midiMappings = new Map();
        this.enabledMidiInputNames = new Set();
        this.enabledMidiOutputNames = new Set();
        this.audioSettings = {
            input: {
                deckA: { controlDeviceId: undefined, liveDeviceId: undefined },
                deckB: { controlDeviceId: undefined, liveDeviceId: undefined }
            }
        };
    }
    return Preferences;
}());

var PreferencesDb = (function () {
    function PreferencesDb(dbService) {
        var _this = this;
        var resolveInitialized;
        var rejectInitialized;
        this.initialized = new Promise(function (resolve, reject) {
            resolveInitialized = resolve;
            rejectInitialized = reject;
        });
        dbService.dbInitialized.then(function (db) {
            _this.db = db;
            _this.preferences = new Preferences();
            var prefCursor = _this.db.transaction(['preferences'], Db.READONLY_TRANSACTION)
                .objectStore('preferences')
                .openCursor();
            prefCursor.onsuccess = function (e) {
                var cursor = e.target['result'];
                if (cursor) {
                    if (!(cursor.key in _this.preferences)) {
                        console.warn('Found preference key in DB that does not exist in preference model: ' + cursor.key);
                    }
                    _this.preferences[cursor.key] = cursor.value;
                    cursor.continue();
                }
                else {
                    resolveInitialized();
                }
            };
        });
    }
    PreferencesDb.prototype.setCrossfaderCurveSharpness = function (value) {
        return this.setPreference('crossfaderCurveSharpness', value);
    };
    PreferencesDb.prototype.getCrossfaderCurveSharpness = function () {
        return this.preferences.crossfaderCurveSharpness;
    };
    PreferencesDb.prototype.getEnabledMidiInputNames = function () {
        return this.preferences.enabledMidiInputNames;
    };
    PreferencesDb.prototype.setEnabledMidiInputNames = function (inputs) {
        return this.setPreference('enabledMidiInputNames', inputs);
    };
    PreferencesDb.prototype.getEnabledMidiOutputNames = function () {
        return this.preferences.enabledMidiOutputNames;
    };
    PreferencesDb.prototype.setEnabledMidiOutputNames = function (outputs) {
        return this.setPreference('enabledMidiOutputNames', outputs);
    };
    PreferencesDb.prototype.getMidiMappings = function () {
        return this.preferences.midiMappings;
    };
    PreferencesDb.prototype.setMidiMappings = function (mappings) {
        return this.setPreference('midiMappings', mappings);
    };
    PreferencesDb.prototype.getAudioSettings = function () {
        return this.preferences.audioSettings;
    };
    PreferencesDb.prototype.setAudioSettings = function (settings) {
        return this.setPreference('audioSettings', settings);
    };
    PreferencesDb.prototype.setPreference = function (key, value) {
        this.preferences[key] = value;
        return Db.reqToPromise(this.db.transaction(['preferences'], Db.READWRITE_TRANSACTION)
            .objectStore('preferences')
            .put(value, key));
    };
    PreferencesDb = __decorate([
        _angular_core.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof Db !== 'undefined' && Db) === 'function' && _a) || Object])
    ], PreferencesDb);
    return PreferencesDb;
    var _a;
}());

var AudioSettings = (function () {
    function AudioSettings(preferencesDb, audioUtil) {
        var _this = this;
        this.preferencesDb = preferencesDb;
        this.deckSettings = new Map();
        var deckASettings = new DeckAudioSettings();
        var deckBSettings = new DeckAudioSettings();
        this.deckSettings.set(DeckId.LEFT, deckASettings);
        this.deckSettings.set(DeckId.RIGHT, deckBSettings);
        preferencesDb.initialized.then(function () {
            var audioSettings = preferencesDb.getAudioSettings();
            audioUtil.inputDevices$.first().subscribe(function (inputDevices) {
                deckASettings.setLiveIn(_this.findDeviceById(inputDevices, audioSettings.input.deckA.liveDeviceId));
                deckASettings.setControlIn(_this.findDeviceById(inputDevices, audioSettings.input.deckA.controlDeviceId));
                deckBSettings.setLiveIn(_this.findDeviceById(inputDevices, audioSettings.input.deckB.liveDeviceId));
                deckBSettings.setControlIn(_this.findDeviceById(inputDevices, audioSettings.input.deckB.controlDeviceId));
                deckASettings.liveIn$.subscribe(function () { return _this.saveAudioSettings(); });
                deckASettings.controlIn$.subscribe(function () { return _this.saveAudioSettings(); });
                deckBSettings.liveIn$.subscribe(function () { return _this.saveAudioSettings(); });
                deckBSettings.controlIn$.subscribe(function () { return _this.saveAudioSettings(); });
            });
        });
    }
    AudioSettings.prototype.getDeckAudioSettings = function (deckId) {
        return this.deckSettings.get(deckId);
    };
    AudioSettings.prototype.saveAudioSettings = function () {
        var deckAAudioSettings = this.deckSettings.get(DeckId.LEFT);
        var deckBAudioSettings = this.deckSettings.get(DeckId.RIGHT);
        this.preferencesDb.setAudioSettings({
            input: {
                deckA: {
                    liveDeviceId: deckAAudioSettings.getLiveIn() && deckAAudioSettings.getLiveIn().deviceId,
                    controlDeviceId: deckAAudioSettings.getControlIn() && deckAAudioSettings.getControlIn().deviceId
                },
                deckB: {
                    liveDeviceId: deckBAudioSettings.getLiveIn() && deckBAudioSettings.getLiveIn().deviceId,
                    controlDeviceId: deckBAudioSettings.getControlIn() && deckBAudioSettings.getControlIn().deviceId
                }
            }
        });
    };
    AudioSettings.prototype.findDeviceById = function (deviceList, id) {
        var matchingDevices = deviceList.filter(function (device) { return device.deviceId === id; });
        if (matchingDevices.length) {
            return matchingDevices[0];
        }
    };
    AudioSettings = __decorate([
        _angular_core.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof PreferencesDb !== 'undefined' && PreferencesDb) === 'function' && _a) || Object, (typeof (_b = typeof AudioUtil !== 'undefined' && AudioUtil) === 'function' && _b) || Object])
    ], AudioSettings);
    return AudioSettings;
    var _a, _b;
}());
var DeckAudioSettings = (function () {
    function DeckAudioSettings() {
        this.liveIn = new rxjs.BehaviorSubject(undefined);
        this.controlIn = new rxjs.BehaviorSubject(undefined);
    }
    Object.defineProperty(DeckAudioSettings.prototype, "liveIn$", {
        get: function () {
            return this.liveIn.asObservable().distinctUntilChanged();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeckAudioSettings.prototype, "controlIn$", {
        get: function () {
            return this.controlIn.asObservable().distinctUntilChanged();
        },
        enumerable: true,
        configurable: true
    });
    DeckAudioSettings.prototype.getLiveIn = function () {
        return this.liveIn.getValue();
    };
    DeckAudioSettings.prototype.getControlIn = function () {
        return this.controlIn.getValue();
    };
    DeckAudioSettings.prototype.setLiveIn = function (device) {
        this.liveIn.next(device);
    };
    DeckAudioSettings.prototype.setControlIn = function (device) {
        this.controlIn.next(device);
    };
    return DeckAudioSettings;
}());

var DspUtil = (function () {
    function DspUtil() {
    }
    DspUtil.prototype.isPlayingForward = function (leftBuf, rightBuf, periodSamples) {
        var seperation = Math.round(periodSamples * 0.23);
        var leftDcOffset = 0;
        var rightDcOffset = 0;
        for (var i = 0; i < leftBuf.length; i++) {
            leftDcOffset += leftBuf[i] / leftBuf.length;
            rightDcOffset += rightBuf[i] / rightBuf.length;
        }
        var leftAbsTotalAmp = 0;
        var rightAbsTotalAmp = 0;
        for (var i = 0; i < leftBuf.length; i++) {
            leftAbsTotalAmp += Math.abs(leftBuf[i] - leftDcOffset);
            rightAbsTotalAmp += Math.abs(rightBuf[i] - rightDcOffset);
        }
        var leftAmpMult = rightAbsTotalAmp / leftAbsTotalAmp;
        var forwardSum = 0;
        var reverseSum = 0;
        for (var i = seperation; i < leftBuf.length - seperation; i++) {
            forwardSum += Math.abs((leftBuf[i] - leftDcOffset) * leftAmpMult - (rightBuf[i - seperation] - rightDcOffset));
            reverseSum += Math.abs((leftBuf[i] - leftDcOffset) * leftAmpMult - (rightBuf[i + seperation] - rightDcOffset));
        }
        var significance = Math.max(forwardSum, reverseSum) / Math.min(forwardSum, reverseSum);
        if (significance > 2) {
            return forwardSum < reverseSum;
        }
        else {
            return undefined;
        }
    };
    //TODO make this code less dumb
    DspUtil.prototype.isPlayingForwardMaxMin = function (leftBuf, rightBuf, periodSamples) {
        var nextLeftExtreme = undefined;
        var nextRightExtreme = undefined;
        var leftMaxes = [];
        var leftMins = [];
        var rightMaxes = [];
        var rightMins = [];
        for (var i = 1; i < leftBuf.length - 1; i++) {
            if (nextLeftExtreme !== 'min' && leftBuf[i - 1] <= leftBuf[i] && leftBuf[i] >= leftBuf[i + 1]) {
                nextLeftExtreme = 'min';
                leftMaxes.push(i);
            }
            if (nextLeftExtreme !== 'max' && leftBuf[i - 1] >= leftBuf[i] && leftBuf[i] <= leftBuf[i + 1]) {
                nextLeftExtreme = 'max';
                leftMins.push(i);
            }
            if (nextRightExtreme !== 'min' && rightBuf[i - 1] <= rightBuf[i] && rightBuf[i] >= rightBuf[i + 1]) {
                nextRightExtreme = 'min';
                rightMaxes.push(i);
            }
            if (nextRightExtreme !== 'max' && rightBuf[i - 1] >= rightBuf[i] && rightBuf[i] <= rightBuf[i + 1]) {
                nextRightExtreme = 'max';
                rightMins.push(i);
            }
        }
        var leftMaxI = 0;
        var rightMaxI = 0;
        var forwardCount = 0;
        var reverseCount = 0;
        while (leftMaxI < leftMaxes.length) {
            while (rightMaxI < rightMaxes.length - 1 && rightMaxes[rightMaxI + 1] < leftMaxes[leftMaxI]) {
                rightMaxI++;
            }
            if (rightMaxI <= rightMaxes.length - 1) {
                if (leftMaxes[leftMaxI] - rightMaxes[rightMaxI] < rightMaxes[rightMaxI + 1] - leftMaxes[leftMaxI]) {
                    forwardCount++;
                }
                else {
                    reverseCount++;
                }
            }
            leftMaxI++;
        }
        //1 is best.
        var confidence = Math.abs(forwardCount - reverseCount) / (forwardCount + reverseCount);
        if (confidence < 0.12) {
            return undefined;
        }
        else {
            return forwardCount > reverseCount;
        }
    };
    DspUtil.prototype.getRms = function (buf) {
        var rms = 0;
        for (var i = 0; i < buf.length; i++) {
            var val = buf[i];
            rms += val * val;
        }
        rms = Math.sqrt(rms / buf.length);
        return rms;
    };
    DspUtil.prototype.autoCorrelate = function (buf, sampleRate) {
        var MIN_SAMPLES = 0; // will be initialized when AudioContext is created.
        var GOOD_ENOUGH_CORRELATION = 0.1; // this is the "bar" for how close a correlation needs to be
        var SIZE = buf.length;
        var offsetIterations = Math.floor(SIZE * 3 / 4);
        var compareChunkSize = Math.floor(SIZE / 4);
        var best_offset = -1;
        var best_correlation = 0;
        var foundGoodCorrelation = false;
        var correlations = new Array(offsetIterations);
        var rms = this.getRms(buf);
        // not enough signal
        if (rms < 0.05) {
            return -1;
        }
        var lastCorrelation = 1;
        for (var offset = MIN_SAMPLES; offset < offsetIterations; offset++) {
            var correlation = 0;
            for (var i = 0; i < compareChunkSize; i++) {
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
            }
            else if (foundGoodCorrelation) {
                // short-circuit - we found a good correlation, then a bad one, so we'd just be seeing copies from here.
                // Now we need to tweak the offset - by interpolating between the values to the left and right of the
                // best offset, and shifting it a bit.  This is complex, and HACKY in this code (happy to take PRs!) -
                // we need to do a curve fit on correlations[] around best_offset in order to better determine precise
                // (anti-aliased) offset.
                // we know best_offset >=1,
                // since foundGoodCorrelation cannot go to true until the second pass (offset=1), and
                // we can't drop into this clause until the following pass (else if).
                var shift = (correlations[best_offset + 1] - correlations[best_offset - 1]) / correlations[best_offset];
                return sampleRate / (best_offset + (8 * shift));
            }
            lastCorrelation = correlation;
        }
        if (best_correlation > 0.01 && best_offset !== offsetIterations - 1) {
            // console.log("f = " + sampleRate/best_offset + "Hz (rms: " + rms + " confidence: " + best_correlation + ")")
            return sampleRate / best_offset;
        }
        return -1;
    };
    //Returns phase difference in samples between buf1 and buf2
    //TODO: don't need to wait for correlation > lastCorrelation to set foundGoodCorrelation
    DspUtil.prototype.crossCorrelate = function (buf1, buf2) {
        var MIN_SAMPLES = 0; // will be initialized when AudioContext is created.
        var GOOD_ENOUGH_CORRELATION = 0.9; // this is the "bar" for how close a correlation needs to be
        var SIZE = Math.min(buf1.length, buf2.length);
        var MAX_SAMPLES = Math.floor(SIZE / 2);
        var best_offset = -1;
        var best_correlation = 0;
        var foundGoodCorrelation = false;
        var correlations = new Array(MAX_SAMPLES);
        var lastCorrelation = 1;
        for (var offset = MIN_SAMPLES; offset < MAX_SAMPLES; offset++) {
            var correlation = 0;
            for (var i = 0; i < MAX_SAMPLES; i++) {
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
            }
            else if (foundGoodCorrelation) {
                // short-circuit - we found a good correlation, then a bad one, so we'd just be seeing copies from here.
                // Now we need to tweak the offset - by interpolating between the values to the left and right of the
                // best offset, and shifting it a bit.  This is complex, and HACKY in this code (happy to take PRs!) -
                // we need to do a curve fit on correlations[] around best_offset in order to better determine precise
                // (anti-aliased) offset.
                // we know best_offset >=1,
                // since foundGoodCorrelation cannot go to true until the second pass (offset=1), and
                // we can't drop into this clause until the following pass (else if).
                var shift = (correlations[best_offset + 1] - correlations[best_offset - 1]) / correlations[best_offset];
                return best_offset + (8 * shift);
            }
            lastCorrelation = correlation;
        }
        if (best_correlation > 0.01) {
            return best_offset;
        }
        return -1;
    };
    DspUtil = __decorate([
        _angular_core.Injectable(), 
        __metadata('design:paramtypes', [])
    ], DspUtil);
    return DspUtil;
}());

//Based on https://github.com/jussi-kalliokoski/sink.js/blob/master/src/utils/resample.js
var Resampler = (function () {
    function Resampler() {
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
    Resampler.prototype.resample = function (buffer, fromRate /* or speed */, fromFrequency /* or toRate */, toRate, toFrequency) {
        var argc = arguments.length;
        var speed;
        if (argc === 2) {
            speed = fromRate;
        }
        else if (argc === 3) {
            speed = fromRate / fromFrequency;
        }
        else {
            speed = toRate / fromRate * toFrequency / fromFrequency;
        }
        var l = buffer.length;
        var length = Math.ceil(l / speed);
        var newBuffer = new Float32Array(length);
        var i, n;
        for (i = 0, n = 0; i < l; i += speed) {
            newBuffer[n++] = this.interpolate(buffer, i);
        }
        return newBuffer;
    };
    
    Resampler.prototype.interpolate = function (arr, pos) {
        var first = Math.floor(pos), second = first + 1, frac = pos - first;
        second = second < arr.length ? second : first;
        return arr[first] * (1 - frac) + arr[second] * frac;
    };
    Resampler = __decorate([
        _angular_core.Injectable(), 
        __metadata('design:paramtypes', [])
    ], Resampler);
    return Resampler;
}());

var AudioOutput = (function () {
    function AudioOutput(audioUtil) {
        this.audioUtil = audioUtil;
        this.inputGainNodes = new Map();
        this.inputGainNodes.set(DeckId.LEFT, audioUtil.context.createGain());
        this.inputGainNodes.set(DeckId.RIGHT, audioUtil.context.createGain());
        this.masterGain = audioUtil.context.createGain();
        this.inputGainNodes.get(DeckId.LEFT).connect(this.masterGain);
        this.inputGainNodes.get(DeckId.RIGHT).connect(this.masterGain);
        this.masterGain.connect(audioUtil.context.destination);
    }
    AudioOutput.prototype.getInputForDeck = function (deckId) {
        return this.inputGainNodes.get(deckId);
    };
    AudioOutput.prototype.setDeckGain = function (deckId, gain) {
        this.inputGainNodes.get(deckId).gain.value = gain;
    };
    AudioOutput.prototype.setMasterGain = function (gain) {
        this.masterGain.gain.value = gain;
    };
    AudioOutput.prototype.getDeckGain = function (deckId) {
        return this.inputGainNodes.get(deckId).gain.value;
    };
    AudioOutput.prototype.getMasterGain = function () {
        return this.masterGain.gain.value;
    };
    AudioOutput = __decorate([
        _angular_core.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof AudioUtil !== 'undefined' && AudioUtil) === 'function' && _a) || Object])
    ], AudioOutput);
    return AudioOutput;
    var _a;
}());

var ActiveSongs = (function () {
    function ActiveSongs(audioUtil, audioSettings, dspUtil, resampler, audioOutput) {
        this.activeSongByDeckId = new Map();
        this.activeSongByDeckId.set(DeckId.LEFT, new ActiveSong(DeckId.LEFT, audioUtil, audioSettings.getDeckAudioSettings(DeckId.LEFT), dspUtil, resampler, audioOutput));
        this.activeSongByDeckId.set(DeckId.RIGHT, new ActiveSong(DeckId.RIGHT, audioUtil, audioSettings.getDeckAudioSettings(DeckId.RIGHT), dspUtil, resampler, audioOutput));
    }
    ActiveSongs.prototype.getActiveSong = function (deckId) {
        return this.activeSongByDeckId.get(deckId);
    };
    ActiveSongs = __decorate([
        _angular_core.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof AudioUtil !== 'undefined' && AudioUtil) === 'function' && _a) || Object, (typeof (_b = typeof AudioSettings !== 'undefined' && AudioSettings) === 'function' && _b) || Object, (typeof (_c = typeof DspUtil !== 'undefined' && DspUtil) === 'function' && _c) || Object, (typeof (_d = typeof Resampler !== 'undefined' && Resampler) === 'function' && _d) || Object, (typeof (_e = typeof AudioOutput !== 'undefined' && AudioOutput) === 'function' && _e) || Object])
    ], ActiveSongs);
    return ActiveSongs;
    var _a, _b, _c, _d, _e;
}());

var AnimationFrames = (function () {
    function AnimationFrames(ngZone) {
        var _this = this;
        this.framesSubject = new rxjs.Subject();
        this.frames = this.framesSubject.asObservable();
        ngZone.runOutsideAngular(function () {
            requestAnimationFrame(function (time) {
                _this.onFrame(time);
            });
        });
    }
    AnimationFrames.prototype.onFrame = function (time) {
        var _this = this;
        this.framesSubject.next(time);
        requestAnimationFrame(function (time) {
            _this.onFrame(time);
        });
    };
    AnimationFrames = __decorate([
        _angular_core.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof _angular_core.NgZone !== 'undefined' && _angular_core.NgZone) === 'function' && _a) || Object])
    ], AnimationFrames);
    return AnimationFrames;
    var _a;
}());

var FormatTimePipe = (function () {
    function FormatTimePipe() {
    }
    FormatTimePipe.prototype.transform = function (timeInSeconds) {
        var minutes = Math.round(timeInSeconds / 60).toString();
        var seconds = Math.round(timeInSeconds % 60).toString();
        seconds.length === 1 && (seconds = '0' + seconds);
        return minutes + ":" + seconds;
    };
    FormatTimePipe = __decorate([
        _angular_core.Pipe({ name: 'formatTime' }), 
        __metadata('design:paramtypes', [])
    ], FormatTimePipe);
    return FormatTimePipe;
}());

var Song = (function () {
    function Song(_a) {
        var details = _a.details, buffer = _a.buffer, waveformCompressed100X = _a.waveformCompressed100X;
        this.details = details;
        this.buffer = buffer;
        this.waveformCompressed100x = waveformCompressed100X;
    }
    return Song;
}());

var SongDb = (function () {
    function SongDb(dbService, waveformUtil, audioUtil) {
        var _this = this;
        this.waveformUtil = waveformUtil;
        this.audioUtil = audioUtil;
        this.allSongDetails$ = new rxjs_BehaviorSubject.BehaviorSubject([]);
        dbService.dbInitialized.then(function (db) {
            _this.db = db;
            var getMetadataTransaction = _this.db.transaction(['songDetails'], Db.READONLY_TRANSACTION);
            var getMetadataCursor = getMetadataTransaction.objectStore('songDetails').openCursor();
            var allMetadata = [];
            getMetadataCursor.onsuccess = function (e) {
                var cursor = e.target['result'];
                if (cursor) {
                    allMetadata.push(cursor.value);
                    cursor.continue();
                }
            };
            getMetadataTransaction.oncomplete = function () {
                _this.allSongDetails$.next(allMetadata);
            };
        });
    }
    SongDb.prototype.getAllSongDetails = function () {
        return this.allSongDetails$.asObservable();
    };
    SongDb.prototype.updateSongDetails = function (details) {
        var updateTransaction = this.db.transaction(['songDetails'], Db.READWRITE_TRANSACTION);
        return Db.reqToPromise(updateTransaction
            .objectStore('songDetails')
            .put(details));
    };
    SongDb.prototype.addSong = function (arrayBuffer, audioBuffer, tags, fileName) {
        var _this = this;
        var songDetails;
        var songDetailsDraft = {
            title: undefined,
            lengthSeconds: audioBuffer.duration,
            positiveSamples: undefined,
            negativeSamples: undefined,
            numSamples: undefined,
            waveformDataUrl: undefined,
            cues: []
        };
        var waveformData = this.waveformUtil.getWaveformData(audioBuffer);
        songDetailsDraft.positiveSamples = waveformData.positiveSamples;
        songDetailsDraft.negativeSamples = waveformData.negativeSamples;
        songDetailsDraft.numSamples = waveformData.numSamples;
        songDetailsDraft.waveformDataUrl = this.waveformUtil.generateDataUrlWaveform(waveformData.positiveSamples, waveformData.negativeSamples, this.audioUtil.context.sampleRate, 150, 35, ThemeId.DEFAULT, [], 0, 0);
        var addTransaction;
        return Promise.resolve((function () {
            if (tags) {
                var parsedTrack = parseInt(tags.track);
                var parsedYear = parseInt(tags.year);
                songDetailsDraft.title = tags.title;
                songDetailsDraft.album = tags.album;
                songDetailsDraft.artist = tags.artist;
                songDetailsDraft.genre = tags.genre;
                !isNaN(parsedTrack) && (songDetailsDraft.track = parsedTrack);
                !isNaN(parsedYear) && (songDetailsDraft.year = parsedYear);
                if (tags.picture) {
                    var base64Album = Db.arrayBufferToBase64(tags.picture.data);
                    return _this.resizeBase64Img(tags.picture.format, base64Album, 100, 100)
                        .then(function (albumDataUrl) { return (songDetailsDraft.albumDataUrl = albumDataUrl); });
                }
            }
        })())
            .then(function () {
            if (!songDetailsDraft.title) {
                songDetailsDraft.title = fileName;
            }
            addTransaction = _this.db.transaction(['songDetails', 'songBuffer'], Db.READWRITE_TRANSACTION);
            return Db.reqToPromise(addTransaction
                .objectStore('songDetails')
                .add(songDetailsDraft));
        })
            .then(function (e) {
            var id = e.target['result'];
            songDetails = Object.assign({}, songDetailsDraft, { id: id });
            return id;
        })
            .then(function (id) {
            var songBuffer = {
                buffer: arrayBuffer,
                waveformCompressed100X: waveformData.compress100X
            };
            return Db.reqToPromise(addTransaction
                .objectStore('songBuffer')
                .add(songBuffer, id));
        })
            .then(function () {
            _this.allSongDetails$.next(_this.allSongDetails$.getValue().concat([songDetails]));
        });
    };
    SongDb.prototype.deleteSong = function (songDetails) {
        var _this = this;
        var deleteTransaction = this.db.transaction(['songDetails', 'songBuffer'], Db.READWRITE_TRANSACTION);
        var deleteDetailsReq = deleteTransaction.objectStore('songDetails').delete(songDetails.id);
        var deleteBufferReq = deleteTransaction.objectStore('songBuffer').delete(songDetails.id);
        Promise.all([Db.reqToPromise(deleteDetailsReq), Db.reqToPromise(deleteBufferReq)])
            .then(function () {
            var currentDetails = _this.allSongDetails$.getValue();
            var filteredDetails = currentDetails.filter(function (d) { return d.id !== songDetails.id; });
            _this.allSongDetails$.next(filteredDetails);
        });
    };
    SongDb.prototype.getSong = function (songDetails) {
        return Db.reqToPromise(this.db.transaction(['songBuffer'], Db.READONLY_TRANSACTION)
            .objectStore('songBuffer')
            .get(songDetails.id))
            .then(function (bufferEvent) {
            var songBuffer = bufferEvent.target['result'];
            return new Song({
                details: songDetails,
                buffer: songBuffer.buffer,
                waveformCompressed100X: songBuffer.waveformCompressed100X
            });
        });
    };
    //based on http://stackoverflow.com/a/20965997/373655
    SongDb.prototype.resizeBase64Img = function (type, base64, maxWidth, maxHeight) {
        return new Promise(function (resolve) {
            var img = new Image;
            img.onload = resizeImage;
            img.src = "data:" + type + ";base64," + base64;
            function resizeImage() {
                var targetWidth = img.width;
                var targetHeight = img.height;
                if (img.width > maxWidth) {
                    targetWidth = maxWidth;
                    targetHeight = img.height / (img.width / maxWidth);
                }
                if (targetHeight > maxHeight) {
                    targetHeight = maxHeight;
                    targetWidth = img.width / (img.height / maxHeight);
                }
                resolve(imageToDataUri(img, targetWidth, targetHeight));
            }
            function imageToDataUri(img, width, height) {
                // create an off-screen canvas
                var canvas = document.createElement('canvas'), ctx = canvas.getContext('2d');
                // set its dimension to target size
                canvas.width = width;
                canvas.height = height;
                // draw source image into the off-screen canvas:
                ctx.drawImage(img, 0, 0, width, height);
                // encode image to data-uri with base64 version of compressed image
                return canvas.toDataURL('image/jpeg', 0.8);
            }
        });
    };
    SongDb = __decorate([
        _angular_core.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof Db !== 'undefined' && Db) === 'function' && _a) || Object, (typeof (_b = typeof WaveformUtil !== 'undefined' && WaveformUtil) === 'function' && _b) || Object, (typeof (_c = typeof AudioUtil !== 'undefined' && AudioUtil) === 'function' && _c) || Object])
    ], SongDb);
    return SongDb;
    var _a, _b, _c;
}());

var DeckComponent = (function () {
    function DeckComponent(elementRef, waveformUtil, audioUtil, activeSongs, animationFrames, formatTime, songDb) {
        var _this = this;
        this.elementRef = elementRef;
        this.waveformUtil = waveformUtil;
        this.audioUtil = audioUtil;
        this.activeSongs = activeSongs;
        this.animationFrames = animationFrames;
        this.formatTime = formatTime;
        this.songDb = songDb;
        this.loadingSong = false;
        this.cueMode = CueMode.Jump;
        this.CueMode = CueMode;
        this.inputType = DeckInputType.File;
        this.inputTypeOptions = [
            { label: 'File', type: DeckInputType.File },
            { label: 'Live', type: DeckInputType.Live }
        ];
        animationFrames.frames.subscribe(function (time) { return _this.onAnimationFrame(); });
    }
    Object.defineProperty(DeckComponent.prototype, "deckName", {
        get: function () {
            return DeckId[this.deckId];
        },
        enumerable: true,
        configurable: true
    });
    DeckComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeSong = this.activeSongs.getActiveSong(this.deckId);
        this.formattedSongOffset$ = rxjs.Observable.interval(100 /* ms */)
            .map(function () {
            if (_this.activeSong.isLoaded) {
                return _this.formatTime.transform(_this.activeSong.currentSongOffset);
            }
            else {
                return '0:00';
            }
        });
    };
    DeckComponent.prototype.ngAfterViewInit = function () {
        this.deckElem = this.elementRef.nativeElement;
        this.waveformElem = this.deckElem.querySelector('.waveform');
        this.waveformElem.width = this.waveformElem.offsetWidth;
        this.waveformElem.getContext('2d').translate(0.5, 0);
    };
    DeckComponent.prototype.loadSong = function (song) {
        var _this = this;
        this.loadingSong = true;
        this.activeSong.loadSong(song)
            .then(function () {
            _this.songOffsetAtLastDraw = undefined;
            _this.loadingSong = false;
        }, function () { return _this.loadingSong = false; });
    };
    DeckComponent.prototype.play = function () {
        if (this.activeSong.isLoaded && !this.activeSong.isPlaying) {
            this.activeSong.playBuffer();
        }
    };
    DeckComponent.prototype.pause = function () {
        if (this.activeSong.isLoaded && this.activeSong.isPlaying) {
            this.activeSong.pauseBuffer();
        }
    };
    DeckComponent.prototype.onAnimationFrame = function () {
        if (this.activeSong.isLoaded) {
            this.drawWaveform(this.activeSong.song.details);
        }
    };
    DeckComponent.prototype.drawWaveform = function (songDetails) {
        var positiveSamples = this.waveformUtil.projectWaveform(songDetails.positiveSamples, songDetails.positiveSamples.length / songDetails.lengthSeconds, this.waveformElem.width);
        var negativeSamples = this.waveformUtil.projectWaveform(songDetails.negativeSamples, songDetails.negativeSamples.length / songDetails.lengthSeconds, this.waveformElem.width);
        var currentSongOffset = this.activeSong.currentSongOffset;
        var relativeSongOffset = currentSongOffset / this.activeSong.song.details.lengthSeconds;
        var curSample = Math.round(relativeSongOffset * this.waveformElem.width);
        var drawFromX = 0;
        var drawToX = this.waveformElem.width;
        if (this.songOffsetAtLastDraw !== undefined) {
            var timeElapsed = currentSongOffset - this.songOffsetAtLastDraw;
            var redrawWidth = this.waveformElem.width * (timeElapsed / this.activeSong.song.details.lengthSeconds);
            if (redrawWidth < this.waveformElem.width) {
                if (redrawWidth > 0) {
                    drawFromX = Math.max(curSample - Math.ceil(redrawWidth), 0);
                    drawToX = curSample;
                }
                else {
                    drawFromX = curSample;
                    drawToX = Math.min(curSample + Math.ceil(-redrawWidth), this.waveformElem.width);
                }
            }
        }
        this.songOffsetAtLastDraw = currentSongOffset;
        this.waveformUtil.drawWaveform({
            canvas: this.waveformElem,
            themeId: ThemeId.fromDeckId(this.deckId),
            positiveSamples: positiveSamples,
            negativeSamples: negativeSamples,
            firstColorPixel: curSample,
            drawFromX: drawFromX,
            drawToX: drawToX
        });
        this.waveformUtil.overlayCues(this.waveformElem, songDetails.cues, 0, songDetails.lengthSeconds);
    };
    DeckComponent.prototype.onCanvasClick = function (event) {
        if (this.activeSong.isLoaded) {
            var relativeSongOffse = event.offsetX / this.waveformElem.offsetWidth;
            this.activeSong.setSongOffset(relativeSongOffse * this.activeSong.song.details.lengthSeconds);
        }
    };
    DeckComponent.prototype.cueClicked = function (index) {
        if (this.activeSong.isLoaded) {
            var cues = this.activeSong.song.details.cues;
            var updateRequired = false;
            switch (this.cueMode) {
                case CueMode.Jump: {
                    if (cues[index]) {
                        this.activeSong.setSongOffset(cues[index]);
                    }
                    else {
                        cues[index] = this.activeSong.currentSongOffset;
                        updateRequired = true;
                    }
                    break;
                }
                case CueMode.Set: {
                    cues[index] = this.activeSong.currentSongOffset;
                    this.cueMode = CueMode.Jump;
                    updateRequired = true;
                    break;
                }
                case CueMode.Delete: {
                    cues[index] = undefined;
                    this.cueMode = CueMode.Jump;
                    updateRequired = true;
                    break;
                }
            }
            if (updateRequired) {
                this.activeSong.song.details.waveformDataUrl = this.waveformUtil.generateDataUrlWaveform(this.activeSong.song.details.positiveSamples, this.activeSong.song.details.negativeSamples, this.audioUtil.context.sampleRate, 150, 35, ThemeId.DEFAULT, this.activeSong.song.details.cues, 0, this.activeSong.song.details.lengthSeconds);
                this.songDb.updateSongDetails(this.activeSong.song.details);
            }
        }
    };
    DeckComponent.prototype.indexArray = function (num) {
        return Array(num).fill(0).map(function (x, i) { return i; });
    };
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', (typeof (_a = typeof DeckId !== 'undefined' && DeckId) === 'function' && _a) || Object)
    ], DeckComponent.prototype, "deckId", void 0);
    DeckComponent = __decorate([
        _angular_core.Component({
            selector: 'deck',
            template: "<div id=\"deck\">\n    <loading-overlay *ngIf=\"loadingSong\"></loading-overlay>\n    <div>\n        Input:\n        <md-radio-group [(ngModel)]=\"inputType\">\n            <md-radio-button disableRipple=\"true\" class=\"example-radio-button\" *ngFor=\"let inputTypeOption of inputTypeOptions\" [value]=\"inputTypeOption.type\">\n                {{inputTypeOption.label}} &nbsp;&nbsp;\n            </md-radio-button>\n        </md-radio-group>\n    </div>\n    <div class=\"song-details-section\">\n        <div *ngIf=\"activeSong.song\">\n            <img height=\"100px\" [src]=\"activeSong.song.details.albumDataUrl\" alt=\"Album Cover\">\n            <div class=\"song-labels\">\n                <div class=\"song-title\">{{activeSong.song.details.title}}</div>\n                <div>{{activeSong.song.details.album}}</div>\n                <div>{{activeSong.song.details.artist}}</div>\n            </div>\n        </div>\n    </div>\n    <div>\n        <canvas height=\"60\" width=\"1\"\n                class=\"waveform\" [class.clickable]=\"activeSong.isLoaded\"\n                (click)=\"onCanvasClick($event)\">\n        </canvas>\n    </div>\n\n    <div class=\"song-position-section\">\n        <div class=\"song-time\">\n            {{formattedSongOffset$ | async}}\n        </div>\n        <div class=\"song-time\">\n            {{activeSong.isLoaded ? (activeSong.song.details.lengthSeconds | formatTime) : '0:00'}}\n        </div>\n    </div>\n\n    <div>\n        <button [id]=\"deckName + '-play-pause'\"\n                class=\"align-top\"\n                (click)=\"activeSong.isPlaying ? pause() : play()\"\n                [disabled]=\"!activeSong.isLoaded || activeSong.isControlled\"\n                md-raised-button [color]=\"activeSong.isPlaying ? 'accent' : 'primary'\"\n                title=\"Play/Pause\">\n            <span class=\"icon-play\"></span>/<span class=\"icon-pause\"></span>\n        </button>\n        <midi-mapping [elemId]=\"deckName + '-play-pause'\" [amount]=\"activeSong.isPlaying ? 1 : 0\" (amountChange)=\"$event ? play() : pause()\"></midi-mapping>\n\n        <button [id]=\"deckName + '-toggle-control'\"\n                class=\"toggleControl align-top\"\n                md-raised-button\n                (click)=\"activeSong.toggleControl()\"\n                [disabled]=\"!activeSong.isLoaded\"\n                [color]=\"activeSong.isControlled ? 'accent' : 'primary'\"\n                title=\"Control Vinyl\">\n            <span class=\"icon-turntable\"></span>\n        </button>\n        <midi-mapping [elemId]=\"deckName + '-toggle-control'\" [amount]=\"activeSong.isControlled ? 1 : 0\"\n                      (amountChange)=\"$event ? activeSong.enableControl() : activeSong.disableControl()\"></midi-mapping>\n    </div>\n    <div class=\"cue-section\">\n        <div>Cues</div>\n        <div class=\"cues\">\n                <span *ngFor=\"let i of indexArray(5)\">\n                    <button [id]=\"deckName + '-cue-' + i\" md-raised-button [color]=\"activeSong.song?.details.cues[i] ? 'accent' : 'primary'\" [disabled]=\"!activeSong.isLoaded\" (click)=\"cueClicked(i)\">\n                        {{i+1}}\n                    </button>\n                    <midi-mapping [elemId]=\"deckName + '-cue-' + i\" [amount]=\"!!activeSong.song && (activeSong.song.details.cues[i] !== undefined)\"\n                                  (amountChange)=\"$event > 0 && cueClicked(i)\"></midi-mapping>\n                </span>\n        </div>\n        <div class=\"cue-mode-section\">\n            <md-radio-group [(ngModel)]=\"cueMode\">\n                <md-radio-button [id]=\"deckName + '-cue-mode-jump'\" disableRipple=\"true\" [value]=\"CueMode.Jump\" [disabled]=\"!activeSong.isLoaded\">\n                    <span class=\"icon-jump-to\"></span>\n                </md-radio-button>\n                <midi-mapping [elemId]=\"deckName + '-cue-mode-jump'\" [amount]=\"(cueMode === CueMode.Jump) ? 1 : 0\"\n                              (amountChange)=\"($event > 0) && (cueMode = CueMode.Jump)\"></midi-mapping>\n\n                <md-radio-button [id]=\"deckName + '-cue-mode-set'\" disableRipple=\"true\" [value]=\"CueMode.Set\" [disabled]=\"!activeSong.isLoaded\">\n                    <span class=\"icon-plus\"></span>\n                </md-radio-button>\n                <midi-mapping [elemId]=\"deckName + '-cue-mode-set'\" [amount]=\"(cueMode === CueMode.Set) ? 1 : 0\"\n                              (amountChange)=\"($event > 0) && (cueMode = CueMode.Set)\"></midi-mapping>\n\n                <md-radio-button [id]=\"deckName + '-cue-mode-delete'\" disableRipple=\"true\" [value]=\"CueMode.Delete\" [disabled]=\"!activeSong.isLoaded\">\n                    <span class=\"icon-bin\"></span>\n                </md-radio-button>\n                <midi-mapping [elemId]=\"deckName + '-cue-mode-delete'\" [amount]=\"(cueMode === CueMode.Delete) ? 1 : 0\"\n                              (amountChange)=\"($event > 0) && (cueMode = CueMode.Delete)\"></midi-mapping>\n            </md-radio-group>\n        </div>\n    </div>\n</div>",
            styles: [":host {\n  overflow: hidden; }\n\n#deck {\n  flex-grow: 1;\n  margin: 4px;\n  padding: 3px;\n  background-color: #161616;\n  border-radius: 2px;\n  position: relative;\n  overflow: hidden; }\n\n.waveform {\n  height: 60px;\n  width: 100%;\n  user-select: none; }\n\n.clickable {\n  cursor: pointer; }\n\n.song-details-section {\n  height: 100px;\n  padding: 16px 0 8px 0;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.song-labels {\n  display: inline-block;\n  vertical-align: top;\n  margin-left: 3px; }\n\n.song-title {\n  font-size: 24px; }\n\n.song-position-section {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 8px; }\n\n.toggleControl {\n  font-size: 24px; }\n\n.align-top {\n  vertical-align: top; }\n\n.cue-section {\n  margin-top: 15px; }\n\n.cue-mode-section {\n  margin-top: 5px; }\n  .cue-mode-section md-radio-button {\n    margin-right: 12px; }\n\n.cues button {\n  min-width: 20px;\n  font-weight: bold; }\n"]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof _angular_core.ElementRef !== 'undefined' && _angular_core.ElementRef) === 'function' && _b) || Object, (typeof (_c = typeof WaveformUtil !== 'undefined' && WaveformUtil) === 'function' && _c) || Object, (typeof (_d = typeof AudioUtil !== 'undefined' && AudioUtil) === 'function' && _d) || Object, (typeof (_e = typeof ActiveSongs !== 'undefined' && ActiveSongs) === 'function' && _e) || Object, (typeof (_f = typeof AnimationFrames !== 'undefined' && AnimationFrames) === 'function' && _f) || Object, (typeof (_g = typeof FormatTimePipe !== 'undefined' && FormatTimePipe) === 'function' && _g) || Object, (typeof (_h = typeof SongDb !== 'undefined' && SongDb) === 'function' && _h) || Object])
    ], DeckComponent);
    return DeckComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());
var DeckInputType;
(function (DeckInputType) {
    DeckInputType[DeckInputType["File"] = 0] = "File";
    DeckInputType[DeckInputType["Live"] = 1] = "Live";
})(DeckInputType || (DeckInputType = {}));
var CueMode;
(function (CueMode) {
    CueMode[CueMode["Jump"] = 0] = "Jump";
    CueMode[CueMode["Set"] = 1] = "Set";
    CueMode[CueMode["Delete"] = 2] = "Delete";
})(CueMode || (CueMode = {}));

var SideNav = (function () {
    function SideNav() {
        this.state = new rxjs.BehaviorSubject(SideNavState.Closed);
    }
    Object.defineProperty(SideNav.prototype, "state$", {
        get: function () {
            return this.state.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    SideNav.prototype.setState = function (state) {
        this.state.next(state);
    };
    SideNav.prototype.getState = function () {
        return this.state.getValue();
    };
    SideNav = __decorate([
        _angular_core.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SideNav);
    return SideNav;
}());
var SideNavState;
(function (SideNavState) {
    SideNavState[SideNavState["Closed"] = 0] = "Closed";
    SideNavState[SideNavState["Audio"] = 1] = "Audio";
    SideNavState[SideNavState["Midi"] = 2] = "Midi";
})(SideNavState || (SideNavState = {}));

var MidiUtil = (function () {
    function MidiUtil() {
        var _this = this;
        this.midiInitialized = new Promise(function (resolve, reject) {
            _this.resolveMidiInitialized = resolve;
            _this.rejectMidiInitialized = reject;
        });
    }
    MidiUtil.prototype.initialize = function () {
        var _this = this;
        if (navigator.requestMIDIAccess) {
            navigator.requestMIDIAccess()
                .then(function (midiAccess) {
                _this.midi = midiAccess;
                _this.resolveMidiInitialized(midiAccess);
            })
                .catch(function () {
                _this.rejectMidiInitialized();
                console.error("No access to MIDI devices or your browser doesn't support WebMIDI API");
            });
        }
        else {
            this.rejectMidiInitialized();
            console.error("No MIDI support in your browser.");
        }
    };
    MidiUtil.prototype.parseRawMsg = function (rawMessage) {
        var byte1 = rawMessage[0];
        var byte2 = rawMessage[1];
        var byte3 = rawMessage[2];
        var msgType = byte1 >> 4;
        var channel = (byte1 & 15) + 1;
        var subType;
        var amount;
        switch (msgType) {
            case MidiMsgType.ProgramChange: {
                subType = byte2;
                amount = 1;
                break;
            }
            case MidiMsgType.ChannelAfterTouch: {
                subType = 0;
                amount = byte2 / 127;
                break;
            }
            case MidiMsgType.PitchBend: {
                subType = 0;
                amount = ((byte3 << 7) + byte2) / ((1 << 14) - 1);
                break;
            }
            default: {
                subType = byte2;
                amount = byte3 / 127;
            }
        }
        return { msgType: msgType, channel: channel, subType: subType, amount: amount };
    };
    MidiUtil.prototype.serializeMsg = function (msg) {
        var byte1 = (msg.msgType << 4) + (msg.channel - 1);
        var byte2;
        var byte3;
        switch (msg.msgType) {
            case MidiMsgType.ProgramChange: {
                byte2 = msg.subType;
                byte3 = 0;
                break;
            }
            case MidiMsgType.ChannelAfterTouch: {
                byte2 = Math.round(msg.amount * 127);
                byte3 = 0;
                break;
            }
            case MidiMsgType.PitchBend: {
                var integerAmount = Math.round(msg.amount * ((1 << 14) - 1));
                byte2 = integerAmount & 127;
                byte3 = integerAmount >> 7;
                break;
            }
            default: {
                byte2 = msg.subType;
                byte3 = Math.round(msg.amount * 127);
            }
        }
        return [byte1, byte2, byte3];
    };
    MidiUtil = __decorate([
        _angular_core.Injectable(), 
        __metadata('design:paramtypes', [])
    ], MidiUtil);
    return MidiUtil;
}());
var MidiMsgType;
(function (MidiMsgType) {
    MidiMsgType[MidiMsgType["NoteOff"] = 8] = "NoteOff";
    MidiMsgType[MidiMsgType["NoteOn"] = 9] = "NoteOn";
    MidiMsgType[MidiMsgType["PolyAfterTouch"] = 10] = "PolyAfterTouch";
    MidiMsgType[MidiMsgType["CC"] = 11] = "CC";
    MidiMsgType[MidiMsgType["ProgramChange"] = 12] = "ProgramChange";
    MidiMsgType[MidiMsgType["ChannelAfterTouch"] = 13] = "ChannelAfterTouch";
    MidiMsgType[MidiMsgType["PitchBend"] = 14] = "PitchBend";
    MidiMsgType[MidiMsgType["SysEx"] = 15] = "SysEx";
})(MidiMsgType || (MidiMsgType = {}));

var AppComponent = (function () {
    function AppComponent(sideNav, midiUtil, db) {
        this.sideNav = sideNav;
        this.DeckId = DeckId;
        this.SideNavState = SideNavState;
        db.initialize();
        midiUtil.initialize();
        if ('serviceWorker' in navigator) {
            navigator['serviceWorker'].register('./sw.js');
        }
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        _a = this.decksQuery.toArray(), this.deck1 = _a[0], this.deck2 = _a[1];
        var _a;
    };
    AppComponent.prototype.onLoadSong = function (_a) {
        var song = _a.song, deckId = _a.deckId;
        var deck = this[("deck" + deckId)];
        deck.loadSong(song);
    };
    AppComponent.prototype.onCloseSideNav = function () {
        this.sideNav.setState(SideNavState.Closed);
    };
    __decorate([
        _angular_core.ViewChildren(DeckComponent), 
        __metadata('design:type', (typeof (_a = typeof _angular_core.QueryList !== 'undefined' && _angular_core.QueryList) === 'function' && _a) || Object)
    ], AppComponent.prototype, "decksQuery", void 0);
    AppComponent = __decorate([
        _angular_core.Component({
            selector: 'my-app',
            template: "<md-sidenav-container>\n    <md-sidenav [opened]=\"(sideNav.state$ | async) !== SideNavState.Closed\" (close)=\"onCloseSideNav()\">\n        <side-nav></side-nav>\n    </md-sidenav>\n    <div  class=\"main-content\">\n        <md-toolbar>\n            <toolbar></toolbar>\n        </md-toolbar>\n        <div class=\"deck-section flex\">\n            <div class=\"deck1 deck flex\">\n                <deck class=\"flex flex-grow\" [deckId]=\"DeckId.LEFT\"></deck>\n            </div>\n            <div class=\"center-controls flex\">\n                <center-controls class=\"flex flex-grow\"></center-controls>\n            </div>\n            <div class=\"deck2 deck flex\">\n                <deck class=\"flex flex-grow\" [deckId]=\"DeckId.RIGHT\"></deck>\n            </div>\n        </div>\n        <div class=\"flex flex-grow\">\n            <library class=\"flex flex-grow\" (onLoadSong)=\"onLoadSong($event)\"></library>\n        </div>\n    </div>\n</md-sidenav-container>",
            styles: [".main-content {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  background-color: #5b5b5b; }\n\n.row {\n  margin-bottom: 4px; }\n\n.deck-section {\n  flex: 0 0 400px; }\n\n.deck {\n  width: 28.6%; }\n\n.center-controls {\n  width: 42.8%; }\n"]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof SideNav !== 'undefined' && SideNav) === 'function' && _b) || Object, (typeof (_c = typeof MidiUtil !== 'undefined' && MidiUtil) === 'function' && _c) || Object, (typeof (_d = typeof Db !== 'undefined' && Db) === 'function' && _d) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c, _d;
}());
var DeckId;
(function (DeckId) {
    DeckId[DeckId["LEFT"] = 1] = "LEFT";
    DeckId[DeckId["RIGHT"] = 2] = "RIGHT";
})(DeckId || (DeckId = {}));
var ThemeId;
(function (ThemeId) {
    ThemeId[ThemeId["DEFAULT"] = 0] = "DEFAULT";
    ThemeId[ThemeId["DECK1"] = 1] = "DECK1";
    ThemeId[ThemeId["DECK2"] = 2] = "DECK2";
})(ThemeId || (ThemeId = {}));
var ThemeId;
(function (ThemeId) {
    function fromDeckId(deckId) {
        switch (deckId) {
            case DeckId.LEFT:
                return ThemeId.DECK1;
            case DeckId.RIGHT:
                return ThemeId.DECK2;
        }
    }
    ThemeId.fromDeckId = fromDeckId;
})(ThemeId || (ThemeId = {}));

var LibraryComponent = (function () {
    function LibraryComponent(audioUtil, songDb) {
        this.audioUtil = audioUtil;
        this.songDb = songDb;
        this.fileIsOverDrop = false;
        this.uploadingFile = false;
        this.DeckId = DeckId;
        this.onLoadSong = new _angular_core.EventEmitter();
        this.allSongDetails = this.songDb.getAllSongDetails();
    }
    LibraryComponent.prototype.onFileOverDrop = function (fileIsOver) {
        this.fileIsOverDrop = fileIsOver;
    };
    LibraryComponent.prototype.uploadFile = function (file) {
        var _this = this;
        this.uploadingFile = true;
        var arrayBuffer;
        var readAsArrayBufferPromise = new Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.readAsArrayBuffer(file);
            reader.onload = function () {
                arrayBuffer = reader.result;
                resolve(reader.result);
            };
            reader.onerror = reject;
        });
        var readAsAudioBufferPromise = readAsArrayBufferPromise
            .then(function (arrayBuffer) { return _this.audioUtil.context.decodeAudioData(arrayBuffer); });
        var readMediaTagsPromise = new Promise(function (resolve) {
            jsmediatags.read(file, {
                onSuccess: function (result) { return resolve(result.tags); },
                onError: function (error) { return resolve(null); }
            });
        });
        Promise.all([readAsAudioBufferPromise, readMediaTagsPromise])
            .then(function (_a) {
            var audioBuffer = _a[0], tags = _a[1];
            _this.songDb.addSong(arrayBuffer, audioBuffer, tags, file.name);
            _this.uploadingFile = false;
        })
            .catch(function (error) {
            console.error(error);
            _this.uploadingFile = false;
        });
    };
    LibraryComponent.prototype.deleteSong = function (songDetails) {
        this.songDb.deleteSong(songDetails);
    };
    LibraryComponent.prototype.loadSong = function (songDetails, deckId) {
        var _this = this;
        this.songDb.getSong(songDetails)
            .then(function (song) {
            _this.onLoadSong.emit({ song: song, deckId: deckId });
        });
    };
    __decorate([
        _angular_core.Output(), 
        __metadata('design:type', Object)
    ], LibraryComponent.prototype, "onLoadSong", void 0);
    LibraryComponent = __decorate([
        _angular_core.Component({
            selector: 'library',
            template: "<div id=\"library\"\n     fileDrop\n     (fileOver)=\"onFileOverDrop($event)\"\n     (onFileDrop)=\"uploadFile($event)\">\n    <loading-overlay\n        *ngIf=\"fileIsOverDrop || uploadingFile\"\n        [msg]=\"uploadingFile ? 'Loading file...' : 'Drop audio files here.'\"\n        [showSpinner]=\"uploadingFile\">\n    </loading-overlay>\n    <div class=\"file-list-section\" fixedTableHeaderContainer>\n        <table class=\"file-list-table\">\n            <tr>\n                <th>Cover</th>\n                <th>Title</th>\n                <th>Artist</th>\n                <th>Album</th>\n                <th>Waveform</th>\n                <th>Genre</th>\n                <th>Year</th>\n                <th>Length</th>\n            </tr>\n            <tr *ngFor=\"let songDetails of allSongDetails | async\" class=\"file-row\">\n                <td class=\"cover-img-container\">\n                    <div class=\"\">\n                        <img *ngIf=\"songDetails.albumDataUrl\" [src]=\"songDetails.albumDataUrl\" alt=\"Album Cover\" width=\"75px\" class=\"cover-img\">\n                    </div>\n                </td>\n                <td>\n                    <div class=\"song-buttons-container\">\n                        {{songDetails.title}}\n                        <div class=\"song-buttons\">\n                            <span class=\"deck1\">\n                                <button md-mini-fab (click)=\"loadSong(songDetails, DeckId.LEFT)\">\n                                    <span class=\"icon-undo\"></span>\n                                </button>\n                            </span>\n                            <span class=\"deck2\">\n                                <button md-mini-fab (click)=\"loadSong(songDetails, DeckId.RIGHT)\">\n                                    <span class=\"icon-redo\"></span>\n                                </button>\n                            </span>\n                            <span>\n                                <button md-mini-fab (click)=\"deleteSong(songDetails)\">\n                                    <span class=\"icon-bin\"></span>\n                                </button>\n                            </span>\n                        </div>\n                    </div>\n                </td>\n                <td>{{songDetails.artist}}</td>\n                <td>{{songDetails.album}}</td>\n                <td>\n                    <img [src]=\"songDetails.waveformDataUrl\" alt=\"waveform\">\n                </td>\n\n                <td>{{songDetails.genre}}</td>\n                <td>{{songDetails.year}}</td>\n                <td>{{songDetails.lengthSeconds | formatTime}}</td>\n            </tr>\n        </table>\n    </div>\n</div>",
            styles: ["#library {\n  flex-grow: 1;\n  display: flex;\n  margin: 0 4px 4px 4px;\n  padding: 3px;\n  border-radius: 2px;\n  position: relative; }\n\n.dragging-overlay {\n  border: 4px dashed #b4b4b4;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: none;\n  z-index: 3;\n  pointer-events: none;\n  background-color: rgba(100, 100, 100, 0.7); }\n  .dragging-overlay .drop-msg {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, 35px); }\n\n.dragging-overlay.show {\n  display: block; }\n\n.file-list-section {\n  background-color: #161616;\n  flex-grow: 1;\n  margin-left: 3px;\n  overflow: auto; }\n  .file-list-section .file-list-table {\n    border-spacing: 0;\n    width: 100%; }\n  .file-list-section th {\n    background-color: #5b5b5b;\n    position: relative;\n    top: -2px;\n    padding: 2px 0;\n    z-index: 2;\n    text-align: left;\n    font-weight: normal; }\n  .file-list-section .file-row td {\n    height: 35px;\n    padding: 0 8px; }\n  .file-list-section .file-row:nth-child(odd) td {\n    background-color: #2a2a2a; }\n  .file-list-section .file-row:hover td {\n    background-color: #3a3a3a; }\n  .file-list-section .file-row:not(:hover) .song-buttons {\n    display: none; }\n  .file-list-section .song-buttons-container {\n    position: relative; }\n  .file-list-section .song-buttons {\n    position: absolute;\n    right: 0;\n    top: -11px; }\n  .file-list-section .cover-img-container {\n    overflow: hidden;\n    position: relative;\n    height: 35px;\n    width: 75px; }\n  .file-list-section .cover-img {\n    position: absolute;\n    top: -10px; }\n"]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof AudioUtil !== 'undefined' && AudioUtil) === 'function' && _a) || Object, (typeof (_b = typeof SongDb !== 'undefined' && SongDb) === 'function' && _b) || Object])
    ], LibraryComponent);
    return LibraryComponent;
    var _a, _b;
}());

var FileDropDirective = (function () {
    function FileDropDirective(element) {
        this.fileOver = new _angular_core.EventEmitter();
        this.onFileDrop = new _angular_core.EventEmitter();
        this.dragLevel = 0;
        this.element = element;
    }
    FileDropDirective.prototype.onDragOver = function (event) {
        var transfer = this.getDataTransfer(event);
        if (!this.haveFiles(transfer.types)) {
            return;
        }
        transfer.dropEffect = 'copy';
        this.preventAndStop(event);
    };
    FileDropDirective.prototype.onDragEnter = function (event) {
        this.dragLevel++;
        this.emitFileOver();
    };
    FileDropDirective.prototype.onDragLeave = function (event) {
        this.dragLevel--;
        // if (event.currentTarget === (this as any).element[0]) {
        //     return;
        // }
        this.preventAndStop(event);
        if (this.dragLevel === 0) {
            this.emitFileOver();
        }
    };
    FileDropDirective.prototype.onDrop = function (event) {
        var transfer = this.getDataTransfer(event);
        if (!transfer) {
            return;
        }
        this.preventAndStop(event);
        this.dragLevel = 0;
        this.emitFileOver();
        this.readFile(transfer.files[0]);
    };
    FileDropDirective.prototype.readFile = function (file) {
        var _this = this;
        var strategy = this.pickStrategy();
        if (!strategy) {
            this.emitFileDrop(file);
        }
        else {
            // XXX Waiting for angular/zone.js#358
            var method = "readAs" + strategy;
            var reader = new FileReader();
            reader[method](file, function (event) {
                if (event.type === 'load') {
                    _this.emitFileDrop(event.result);
                }
                else if (event.type === 'error') {
                    throw new Error("Couldn't read file '" + file.name + "'");
                }
            });
        }
    };
    FileDropDirective.prototype.emitFileOver = function () {
        this.fileOver.emit(this.dragLevel > 0);
    };
    FileDropDirective.prototype.emitFileDrop = function (file) {
        this.onFileDrop.emit(file);
    };
    FileDropDirective.prototype.pickStrategy = function () {
        if (!this.options) {
            return;
        }
        if (this.hasStrategy(this.options.readAs)) {
            return this.options.readAs;
        }
    };
    FileDropDirective.prototype.hasStrategy = function (type) {
        return [
            'DataURL',
            'BinaryString',
            'ArrayBuffer',
            'Text',
        ].indexOf(type) !== -1;
    };
    FileDropDirective.prototype.getDataTransfer = function (event) {
        return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
    };
    FileDropDirective.prototype.preventAndStop = function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    FileDropDirective.prototype.haveFiles = function (types) {
        if (!types) {
            return false;
        }
        if (types.indexOf) {
            return types.indexOf('Files') !== -1;
        }
        if (types.contains) {
            return types.contains('Files');
        }
        return false;
    };
    __decorate([
        _angular_core.Output(), 
        __metadata('design:type', (typeof (_a = typeof _angular_core.EventEmitter !== 'undefined' && _angular_core.EventEmitter) === 'function' && _a) || Object)
    ], FileDropDirective.prototype, "fileOver", void 0);
    __decorate([
        _angular_core.Output(), 
        __metadata('design:type', (typeof (_b = typeof _angular_core.EventEmitter !== 'undefined' && _angular_core.EventEmitter) === 'function' && _b) || Object)
    ], FileDropDirective.prototype, "onFileDrop", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', Object)
    ], FileDropDirective.prototype, "options", void 0);
    __decorate([
        _angular_core.HostListener('dragover', [
            '$event',
        ]), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], FileDropDirective.prototype, "onDragOver", null);
    __decorate([
        _angular_core.HostListener('dragenter', [
            '$event',
        ]), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], FileDropDirective.prototype, "onDragEnter", null);
    __decorate([
        _angular_core.HostListener('dragleave', [
            '$event',
        ]), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], FileDropDirective.prototype, "onDragLeave", null);
    __decorate([
        _angular_core.HostListener('drop', [
            '$event',
        ]), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], FileDropDirective.prototype, "onDrop", null);
    FileDropDirective = __decorate([
        _angular_core.Directive({ selector: '[fileDrop]' }), 
        __metadata('design:paramtypes', [(typeof (_c = typeof _angular_core.ElementRef !== 'undefined' && _angular_core.ElementRef) === 'function' && _c) || Object])
    ], FileDropDirective);
    return FileDropDirective;
    var _a, _b, _c;
}());

var MidiIo = (function () {
    function MidiIo(midiUtil, preferencesDb) {
        var _this = this;
        this.midiUtil = midiUtil;
        this.preferencesDb = preferencesDb;
        this.enabledInputNames = new Set();
        this.enabledOutputNames = new Set();
        this.msg = new rxjs.Subject();
        this.midiUtil.midiInitialized.then(function () {
            midiUtil.midi.onstatechange = function () {
                _this.retrieveDevices();
            };
            _this.retrieveDevices();
        });
        preferencesDb.initialized.then(function () {
            _this.enabledOutputNames = preferencesDb.getEnabledMidiOutputNames();
            preferencesDb.getEnabledMidiInputNames().forEach(function (name) {
                if (_this.devicesByName[name]) {
                    _this.enableInput(name);
                }
            });
        });
    }
    Object.defineProperty(MidiIo.prototype, "msg$", {
        get: function () {
            return this.msg.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    MidiIo.prototype.retrieveDevices = function () {
        var _this = this;
        this.devicesByName = {};
        this.midiUtil.midi.inputs.forEach(function (input) {
            _this.devicesByName[input.name] = { input: input };
            //This could occur if an input was saved as enabled in the preferences but the diver was not connected to
            //the computer until after the app started.
            if (_this.inputIsEnabled(input.name) === false && _this.enabledInputNames.has(input.name)) {
                _this.enableInput(input.name);
            }
        });
        this.midiUtil.midi.outputs.forEach(function (output) {
            _this.devicesByName[output.name] = _this.devicesByName[output.name] || {};
            _this.devicesByName[output.name].output = output;
        });
        this.devices = [];
        for (var name in this.devicesByName) {
            var device = this.devicesByName[name];
            this.devices.push({ name: name, input: device.input, output: device.output });
        }
    };
    MidiIo.prototype.inputIsEnabled = function (deviceName) {
        var input = this.getDevice(deviceName).input;
        return !!input && !!input['lastEventListener'];
    };
    MidiIo.prototype.enableInput = function (deviceName) {
        this.enabledInputNames.add(deviceName);
        this.saveInputPreferences();
        var device = this.getDevice(deviceName);
        if (device.input) {
            device.input['lastEventListener'] = this.onInputMsg.bind(this);
            device.input.addEventListener('midimessage', device.input['lastEventListener']);
        }
    };
    MidiIo.prototype.disableInput = function (deviceName) {
        var device = this.getDevice(deviceName);
        if (device.input) {
            if (device.input['lastEventListener']) {
                device.input.removeEventListener('midimessage', device.input['lastEventListener']);
                device.input['lastEventListener'] = undefined;
            }
            device.input.close();
        }
        this.enabledInputNames.delete(deviceName);
        this.saveInputPreferences();
    };
    MidiIo.prototype.toggleInput = function (deviceName) {
        if (this.inputIsEnabled(deviceName)) {
            this.disableInput(deviceName);
        }
        else {
            this.enableInput(deviceName);
        }
    };
    MidiIo.prototype.outputIsEnabled = function (deviceName) {
        return this.enabledOutputNames.has(deviceName);
    };
    MidiIo.prototype.enableOutput = function (deviceName) {
        this.enabledOutputNames.add(deviceName);
        this.saveOutputPreferences();
    };
    MidiIo.prototype.disableOutput = function (deviceName) {
        this.enabledOutputNames.delete(deviceName);
        this.saveOutputPreferences();
    };
    MidiIo.prototype.toggleOutput = function (deviceName) {
        if (this.outputIsEnabled(deviceName)) {
            this.disableOutput(deviceName);
        }
        else {
            this.enableOutput(deviceName);
        }
    };
    MidiIo.prototype.sendMessage = function (msg) {
        var _this = this;
        this.enabledOutputNames.forEach(function (name) {
            var device = _this.getDevice(name);
            if (device.output) {
                device.output.send(_this.midiUtil.serializeMsg(msg));
            }
        });
    };
    MidiIo.prototype.saveInputPreferences = function () {
        this.preferencesDb.setEnabledMidiInputNames(this.enabledInputNames);
    };
    MidiIo.prototype.saveOutputPreferences = function () {
        this.preferencesDb.setEnabledMidiOutputNames(this.enabledOutputNames);
    };
    //Always returns an object even if the device doesn't exist
    MidiIo.prototype.getDevice = function (name) {
        return this.devicesByName[name] || {};
    };
    MidiIo.prototype.onInputMsg = function (msgEvent) {
        var msg = this.midiUtil.parseRawMsg(msgEvent.data);
        this.msg.next(msg);
    };
    MidiIo = __decorate([
        _angular_core.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof MidiUtil !== 'undefined' && MidiUtil) === 'function' && _a) || Object, (typeof (_b = typeof PreferencesDb !== 'undefined' && PreferencesDb) === 'function' && _b) || Object])
    ], MidiIo);
    return MidiIo;
    var _a, _b;
}());

var DocumentEvents = (function () {
    function DocumentEvents() {
        var _this = this;
        this.mouseMoveSubject = new rxjs.Subject();
        this.mouseUpSubject = new rxjs.Subject();
        this.dragEndSubject = new rxjs.Subject();
        this.keyUpSubject = new rxjs.Subject();
        document.addEventListener('mousemove', function (event) { return _this.mouseMoveSubject.next(event); });
        document.addEventListener('mouseup', function (event) { return _this.mouseUpSubject.next(event); });
        document.addEventListener('dragend', function (event) { return _this.dragEndSubject.next(event); });
        document.addEventListener('keyup', function (event) { return _this.keyUpSubject.next(event); });
    }
    Object.defineProperty(DocumentEvents.prototype, "mouseMove", {
        get: function () {
            return this.mouseMoveSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DocumentEvents.prototype, "mouseUp", {
        get: function () {
            return this.mouseUpSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DocumentEvents.prototype, "dragEnd", {
        get: function () {
            return this.dragEndSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DocumentEvents.prototype, "keyUp", {
        get: function () {
            return this.keyUpSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    DocumentEvents = __decorate([
        _angular_core.Injectable(), 
        __metadata('design:paramtypes', [])
    ], DocumentEvents);
    return DocumentEvents;
}());

var MidiMapper = (function () {
    function MidiMapper(midiIo, preferencesDb, documentEvents) {
        var _this = this;
        this.preferencesDb = preferencesDb;
        this.learnMode = new rxjs.BehaviorSubject(false);
        this.mappings = new Map();
        this.mappingComps = new Map();
        midiIo.msg$.subscribe(function (msg) { return _this.onInputMsg(msg); });
        preferencesDb.initialized.then(function () {
            _this.mappings = preferencesDb.getMidiMappings();
        });
        documentEvents.keyUp.subscribe(function (event) {
            if (_this.learnMode.getValue()) {
                if (event.code === 'Backspace' || event.code === 'Delete') {
                    if (_this.activeLearnMappingComp) {
                        _this.mappings.delete(_this.activeLearnMappingComp.elemId);
                    }
                }
            }
        });
    }
    Object.defineProperty(MidiMapper.prototype, "learnMode$", {
        get: function () {
            return this.learnMode.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    MidiMapper.prototype.setLearnMode = function (value) {
        !value && (this.activeLearnMappingComp = undefined);
        this.learnMode.next(value);
    };
    MidiMapper.prototype.toggleLearnMode = function () {
        this.setLearnMode(!this.learnMode.getValue());
    };
    MidiMapper.prototype.getLearnMode = function () {
        return this.learnMode.getValue();
    };
    MidiMapper.prototype.registerMappingComp = function (id, comp) {
        this.mappingComps.set(id, comp);
    };
    MidiMapper.prototype.setMapping = function (id, mapping) {
        this.mappings.set(id, mapping);
        this.preferencesDb.setMidiMappings(this.mappings);
    };
    MidiMapper.prototype.getMapping = function (id) {
        return this.mappings.get(id);
    };
    MidiMapper.prototype.onInputMsg = function (msg) {
        var _this = this;
        if (this.activeLearnMappingComp) {
            this.activeLearnMappingComp.onLearnMsg(msg);
        }
        else if (!this.getLearnMode()) {
            this.mappings.forEach(function (mapping, id) {
                if (mapping.control.msgType === msg.msgType &&
                    mapping.control.channel === msg.channel &&
                    mapping.control.subType === msg.subType) {
                    _this.mappingComps.get(id).onInputMsg(msg);
                }
            });
        }
    };
    MidiMapper = __decorate([
        _angular_core.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof MidiIo !== 'undefined' && MidiIo) === 'function' && _a) || Object, (typeof (_b = typeof PreferencesDb !== 'undefined' && PreferencesDb) === 'function' && _b) || Object, (typeof (_c = typeof DocumentEvents !== 'undefined' && DocumentEvents) === 'function' && _c) || Object])
    ], MidiMapper);
    return MidiMapper;
    var _a, _b, _c;
}());
var MappingType;
(function (MappingType) {
    //Map the amount directly to the control
    MappingType[MappingType["Amount"] = 0] = "Amount";
    //Toggle the control whenever a non-zero midi amount is sent
    //TODO use latch by default for note messages
    MappingType[MappingType["Latch"] = 1] = "Latch";
})(MappingType || (MappingType = {}));

var ToolbarComponent = (function () {
    function ToolbarComponent(sideNav, midiMapper) {
        this.sideNav = sideNav;
        this.midiMapper = midiMapper;
    }
    ToolbarComponent.prototype.toggleMidiSettings = function () {
        if (this.sideNav.getState() === SideNavState.Midi) {
            this.sideNav.setState(SideNavState.Closed);
        }
        else {
            this.sideNav.setState(SideNavState.Midi);
        }
    };
    ToolbarComponent.prototype.toggleAudioSettings = function () {
        if (this.sideNav.getState() === SideNavState.Audio) {
            this.sideNav.setState(SideNavState.Closed);
        }
        else {
            this.sideNav.setState(SideNavState.Audio);
        }
    };
    ToolbarComponent.prototype.toggleFullScreen = function () {
        var doc = document;
        //Taken from http://stackoverflow.com/a/10627148/373655
        if (!this.isFullScreen()) {
            if (doc.documentElement.requestFullScreen) {
                doc.documentElement.requestFullScreen();
            }
            else if (doc.documentElement.mozRequestFullScreen) {
                doc.documentElement.mozRequestFullScreen();
            }
            else if (doc.documentElement.webkitRequestFullScreen) {
                doc.documentElement.webkitRequestFullScreen(Element['ALLOW_KEYBOARD_INPUT']);
            }
        }
        else {
            if (doc.cancelFullScreen) {
                doc.cancelFullScreen();
            }
            else if (doc.mozCancelFullScreen) {
                doc.mozCancelFullScreen();
            }
            else if (doc.webkitCancelFullScreen) {
                doc.webkitCancelFullScreen();
            }
        }
    };
    ToolbarComponent.prototype.isFullScreen = function () {
        var doc = document;
        return !doc.fullScreenElement && (doc.mozFullScreen || doc.webkitIsFullScreen);
    };
    ToolbarComponent = __decorate([
        _angular_core.Component({
            selector: 'toolbar',
            template: "<div id=\"toolbar\">\n    <div>\n        Open DVS<span class=\"subtext\">\u03B2eta</span>\n    </div>\n    <div class=\"right-toolbar\">\n        <div class=\"toolbar-item\" md-tooltip=\"Learn MIDI Mapping\" (click)=\"midiMapper.toggleLearnMode()\">\n            <span class=\"icon-equalizer\" [class.active]=\"midiMapper.getLearnMode()\"></span>\n        </div>\n        <div class=\"toolbar-item\" mdTooltip=\"MIDI settings\" (click)=\"toggleMidiSettings()\">\n            <span class=\"icon-midi\"></span>\n        </div>\n        <div class=\"toolbar-item\" mdTooltip=\"Audio settings\" (click)=\"toggleAudioSettings()\">\n            <span class=\"icon-speaker\"></span>\n        </div>\n        <div class=\"toolbar-item\">\n            <span *ngIf=\"!isFullScreen()\" (click)=\"toggleFullScreen()\" mdTooltip=\"Fullscreen\">\n                <span class=\"icon-enlarge-color\">\n                    <span class=\"path1\"></span><span class=\"path2\"></span>\n                </span>\n            </span>\n                <span *ngIf=\"isFullScreen()\" (click)=\"toggleFullScreen()\" mdTooltip=\"Exit fullscreen\">\n                <span class=\"icon-shrink-color\">\n                    <span class=\"path1\"></span><span class=\"path2\"></span>\n                </span>\n            </span>\n        </div>\n    </div>\n</div>",
            styles: [":host {\n  display: flex;\n  flex-grow: 1; }\n\n#toolbar {\n  display: flex;\n  flex-grow: 1;\n  justify-content: space-between; }\n\n.right-toolbar {\n  font-size: 25px;\n  display: flex; }\n\n.toolbar-item {\n  margin: 0 10px;\n  cursor: pointer; }\n\n.icon-enlarge-color:not(:hover) span:before,\n.icon-shrink-color:not(:hover) span:before {\n  color: inherit; }\n\n.icon-midi:hover, .icon-equalizer:hover, .icon-equalizer.active {\n  color: #165eaa; }\n\n.icon-speaker:hover {\n  color: #632B9B; }\n\n.subtext {\n  font-size: 12px; }\n"]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof SideNav !== 'undefined' && SideNav) === 'function' && _a) || Object, (typeof (_b = typeof MidiMapper !== 'undefined' && MidiMapper) === 'function' && _b) || Object])
    ], ToolbarComponent);
    return ToolbarComponent;
    var _a, _b;
}());

var SpinnerComponent = (function () {
    function SpinnerComponent() {
    }
    SpinnerComponent = __decorate([
        _angular_core.Component({
            selector: 'spinner',
            template: "\n<div class=\"overlay\"></div>\n<div class='uil-ripple-css'> \n    <div></div> \n    <div></div> \n</div>",
            styles: ["\n@keyframes uil-ripple {\n  0% {\n    width: 0;\n    height: 0;\n    opacity: 0;\n    margin: 0 0 0 0;\n  }\n  33% {\n    width: 44%;\n    height: 44%;\n    margin: -22% 0 0 -22%;\n    opacity: 1;\n  }\n  100% {\n    width: 88%;\n    height: 88%;\n    margin: -44% 0 0 -44%;\n    opacity: 0;\n  }\n}\n.uil-ripple-css {\n  position: absolute;\n  width: 64px;\n  height: 64px;\n  transform: translate(-50%, -50%);\n  top: 50%;\n  left: 50%;\n}\n.uil-ripple-css div {\n  position: absolute;\n  z-index: 2;\n  top: 50%;\n  left: 50%;\n  margin: 0;\n  width: 0;\n  height: 0;\n  opacity: 0;\n  border-radius: 50%;\n  border-width: 4px;\n  border-style: solid;\n  animation: uil-ripple 2s linear infinite;\n}\n.uil-ripple-css div:nth-of-type(1) {\n  border-color: #165eaa;\n}\n.uil-ripple-css div:nth-of-type(2) {\n  border-color: #632b9b;\n  animation-delay: 1s;\n}\n.overlay {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(255, 255, 255, 0.1);\n    z-index: 1;\n    top: 0;\n}\n"]
        }), 
        __metadata('design:paramtypes', [])
    ], SpinnerComponent);
    return SpinnerComponent;
}());

var CenterControlsComponent = (function () {
    function CenterControlsComponent(activeSongs, waveformUtil, audioUtil, animationFrames, documentEvents, audioOutput) {
        var _this = this;
        this.activeSongs = activeSongs;
        this.waveformUtil = waveformUtil;
        this.audioUtil = audioUtil;
        this.animationFrames = animationFrames;
        this.documentEvents = documentEvents;
        this.audioOutput = audioOutput;
        this.DeckId = DeckId;
        this.deck1ActiveSong = activeSongs.getActiveSong(DeckId.LEFT);
        this.deck2ActiveSong = activeSongs.getActiveSong(DeckId.RIGHT);
        this.deck1ActiveSong.songObservable.subscribe(function (song) { return _this.onSongChange(DeckId.LEFT, song); });
        this.deck2ActiveSong.songObservable.subscribe(function (song) { return _this.onSongChange(DeckId.RIGHT, song); });
        animationFrames.frames.subscribe(function (time) { return _this.onAnimationFrame(); });
        this.documentEvents.mouseMove.subscribe(function (event) { return _this.onMouseMove(event); });
        this.documentEvents.mouseUp.subscribe(function (event) { return _this.endScrub(event); });
        this.documentEvents.dragEnd.subscribe(function (event) { return _this.endScrub(event); });
    }
    Object.defineProperty(CenterControlsComponent.prototype, "deck1Canvas", {
        get: function () {
            return this.deck1ElementRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CenterControlsComponent.prototype, "deck2Canvas", {
        get: function () {
            return this.deck2ElementRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    CenterControlsComponent.prototype.ngAfterViewInit = function () {
        this.deck1Canvas.width = this.deck1Canvas.offsetWidth;
        this.deck2Canvas.width = this.deck2Canvas.offsetWidth;
        this.deck1Canvas.getContext('2d').translate(0.5, 0);
        this.deck2Canvas.getContext('2d').translate(0.5, 0);
    };
    CenterControlsComponent.prototype.onAnimationFrame = function () {
        if (this.deck1ActiveSong.isLoaded) {
            this.drawSong(DeckId.LEFT, this.deck1ActiveSong.song);
        }
        if (this.deck2ActiveSong.isLoaded) {
            this.drawSong(DeckId.RIGHT, this.deck2ActiveSong.song);
        }
    };
    CenterControlsComponent.prototype.onSongChange = function (deckId, song) {
        this.setPixelOffsetAtLastDraw(undefined, deckId);
        this.drawSong(deckId, song);
    };
    CenterControlsComponent.prototype.setPixelOffsetAtLastDraw = function (offset, deckId) {
        if (deckId === DeckId.LEFT) {
            this.song1PixelOffsetAtLastDraw = offset;
        }
        else {
            this.song2PixelOffsetAtLastDraw = offset;
        }
    };
    CenterControlsComponent.prototype.getPixelOffsetAtLastDraw = function (deckId) {
        if (deckId === DeckId.LEFT) {
            return this.song1PixelOffsetAtLastDraw;
        }
        else {
            return this.song2PixelOffsetAtLastDraw;
        }
    };
    CenterControlsComponent.prototype.drawSong = function (deckId, song) {
        var waveformCanvas;
        var drawOptions;
        var waveformName;
        var activeSong;
        switch (deckId) {
            case DeckId.LEFT: {
                waveformCanvas = this.deck1Canvas;
                waveformName = 'negativeSamples';
                activeSong = this.deck1ActiveSong;
                break;
            }
            case DeckId.RIGHT: {
                waveformCanvas = this.deck2Canvas;
                waveformName = 'positiveSamples';
                activeSong = this.deck2ActiveSong;
            }
        }
        var currentSongOffset = activeSong.currentSongOffset;
        //TODO: when tempo slider is set multiple this by it
        var compressedSampleRate = this.audioUtil.context.sampleRate / 100;
        var startTime = currentSongOffset - 3;
        var endTime = currentSongOffset + 3;
        var drawFromX = 0;
        var drawToX = waveformCanvas.width;
        var pixelOffset = Math.round(currentSongOffset * waveformCanvas.width / 6);
        if (this.getPixelOffsetAtLastDraw(deckId) !== undefined) {
            var redrawWidth = pixelOffset - this.getPixelOffsetAtLastDraw(deckId);
            if (Math.abs(redrawWidth) < waveformCanvas.width) {
                if (redrawWidth >= 0) {
                    drawFromX = waveformCanvas.width - redrawWidth;
                    drawToX = waveformCanvas.width;
                }
                else {
                    drawFromX = 0;
                    drawToX = -redrawWidth;
                }
                if (redrawWidth !== 0) {
                    var canvasCtx = waveformCanvas.getContext('2d');
                    var imageData = canvasCtx.getImageData(0, 0, waveformCanvas.width, waveformCanvas.height);
                    //canvasCtx.clearRect(0,0, waveformCanvas.width, waveformCanvas.height);
                    canvasCtx.putImageData(imageData, -redrawWidth, 0);
                }
            }
        }
        this.setPixelOffsetAtLastDraw(pixelOffset, deckId);
        drawOptions = {
            canvas: waveformCanvas,
            themeId: ThemeId.fromDeckId(deckId),
            useGradient: false,
            drawFromX: drawFromX,
            drawToX: drawToX
        };
        drawOptions[waveformName] = this.waveformUtil.projectWaveform(song.waveformCompressed100x, compressedSampleRate, waveformCanvas.width, startTime, endTime);
        this.waveformUtil.drawWaveform(drawOptions);
        this.waveformUtil.overlayCues(waveformCanvas, song.details.cues, startTime, 6, deckId === DeckId.RIGHT);
    };
    CenterControlsComponent.prototype.onMouseMove = function (event) {
        if (this.activeScrubDeck) {
            var activeSong = this.getActiveSongFromDeckId(this.activeScrubDeck);
            var pixelsPerSecond = this.deck1Canvas.offsetWidth / 6;
            var deltaX = this.scrubOrigScreenX - event.screenX;
            var newSongOffset = this.scrubOrigSongOffset + (deltaX / pixelsPerSecond);
            newSongOffset = Math.max(0, newSongOffset);
            newSongOffset = Math.min(activeSong.song.details.lengthSeconds, newSongOffset);
            activeSong.setSongOffset(newSongOffset);
        }
    };
    CenterControlsComponent.prototype.endScrub = function (event) {
        if (this.activeScrubDeck !== undefined) {
            var activeSong = this.getActiveSongFromDeckId(this.activeScrubDeck);
            if (this.resumePlayingAfterScrub) {
                activeSong.playBuffer();
            }
            this.activeScrubDeck = undefined;
            document.body.classList.remove('scrubbing');
        }
    };
    CenterControlsComponent.prototype.startScrub = function (deckId, event) {
        var activeSong = this.getActiveSongFromDeckId(deckId);
        if (activeSong.isLoaded) {
            this.activeScrubDeck = deckId;
            this.resumePlayingAfterScrub = activeSong.isPlaying;
            this.scrubOrigSongOffset = activeSong.currentSongOffset;
            this.scrubOrigScreenX = event.screenX;
            activeSong.isPlaying && activeSong.pauseBuffer();
            document.body.classList.add('scrubbing');
        }
    };
    CenterControlsComponent.prototype.getActiveSongFromDeckId = function (deckId) {
        if (deckId === DeckId.LEFT) {
            return this.deck1ActiveSong;
        }
        else {
            return this.deck2ActiveSong;
        }
    };
    CenterControlsComponent.prototype.crossfaderChange = function (_a) {
        var leftGain = _a.leftGain, rightGain = _a.rightGain;
        this.deck1ActiveSong.setGain(leftGain);
        this.deck2ActiveSong.setGain(rightGain);
    };
    __decorate([
        _angular_core.ViewChild('deck1Canvas'), 
        __metadata('design:type', (typeof (_a = typeof _angular_core.ElementRef !== 'undefined' && _angular_core.ElementRef) === 'function' && _a) || Object)
    ], CenterControlsComponent.prototype, "deck1ElementRef", void 0);
    __decorate([
        _angular_core.ViewChild('deck2Canvas'), 
        __metadata('design:type', (typeof (_b = typeof _angular_core.ElementRef !== 'undefined' && _angular_core.ElementRef) === 'function' && _b) || Object)
    ], CenterControlsComponent.prototype, "deck2ElementRef", void 0);
    CenterControlsComponent = __decorate([
        _angular_core.Component({
            selector: 'center-controls',
            template: "<div id=\"center-controls\">\n    <div class=\"waveform-container\">\n        <div class=\"center-line\"></div>\n        <canvas height=\"80\" width=\"1\" class=\"waveform\"\n                #deck1Canvas (mousedown)=\"startScrub(DeckId.LEFT, $event)\"\n                [class.scrubbable]=\"deck1ActiveSong.isLoaded\">\n        </canvas>\n    </div>\n    <div class=\"waveform-container\">\n        <div class=\"center-line\"></div>\n        <canvas height=\"80\" width=\"1\" class=\"waveform\"\n                #deck2Canvas (mousedown)=\"startScrub(DeckId.RIGHT, $event)\"\n                [class.scrubbable]=\"deck2ActiveSong.isLoaded\">\n        </canvas>\n    </div>\n    <div class=\"volume-faders\">\n        <div>\n            <div class=\"deck1 volume-fader\">\n                <fader id=\"deckAGain\" name=\"deckAGain\" [value]=\"audioOutput.getDeckGain(DeckId.LEFT)\" (change)=\"audioOutput.setDeckGain(DeckId.LEFT, $event)\"></fader>\n            </div>\n            <div class=\"volume-fader\">\n                <fader name=\"masterGain\" [value]=\"audioOutput.getMasterGain()\" (change)=\"audioOutput.setMasterGain($event)\"></fader>\n            </div>\n            <div class=\"deck2 volume-fader\">\n                <fader name=\"deckBGain\" [value]=\"audioOutput.getDeckGain(DeckId.RIGHT)\" (change)=\"audioOutput.setDeckGain(DeckId.RIGHT, $event)\"></fader>\n            </div>\n        </div>\n    </div>\n    <crossfader (change)=\"crossfaderChange($event)\"></crossfader>\n</div>",
            styles: ["#center-controls {\n  margin: 4px 0;\n  padding: 3px;\n  flex-grow: 1;\n  background-color: #161616;\n  border-radius: 2px; }\n\n.waveform {\n  user-select: none;\n  width: 100%;\n  height: 80px; }\n\n.volume-faders {\n  display: flex;\n  justify-content: space-around;\n  margin: 10px; }\n\n.volume-fader {\n  display: inline-block;\n  margin: 0 25px; }\n\n.scrubbable {\n  cursor: -webkit-grab;\n  cursor: -moz-grab;\n  cursor: grab; }\n\n.waveform-container {\n  position: relative; }\n\n.center-line {\n  position: absolute;\n  left: 50%;\n  height: 100%;\n  width: 1px;\n  background-color: grey; }\n"]
        }), 
        __metadata('design:paramtypes', [(typeof (_c = typeof ActiveSongs !== 'undefined' && ActiveSongs) === 'function' && _c) || Object, (typeof (_d = typeof WaveformUtil !== 'undefined' && WaveformUtil) === 'function' && _d) || Object, (typeof (_e = typeof AudioUtil !== 'undefined' && AudioUtil) === 'function' && _e) || Object, (typeof (_f = typeof AnimationFrames !== 'undefined' && AnimationFrames) === 'function' && _f) || Object, (typeof (_g = typeof DocumentEvents !== 'undefined' && DocumentEvents) === 'function' && _g) || Object, (typeof (_h = typeof AudioOutput !== 'undefined' && AudioOutput) === 'function' && _h) || Object])
    ], CenterControlsComponent);
    return CenterControlsComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

var CrossfaderComponent = (function () {
    function CrossfaderComponent(preferencesDb) {
        var _this = this;
        this.preferencesDb = preferencesDb;
        this.sliderValue = new rxjs.BehaviorSubject(0.5);
        //0 represents an equal power fade
        //1 represents a scratch fade
        this.crossfaderCurveSharpness = new rxjs.BehaviorSubject(0);
        this.change = new _angular_core.EventEmitter();
        preferencesDb.initialized.then(function () {
            _this.crossfaderCurveSharpness.next(preferencesDb.getCrossfaderCurveSharpness());
        });
        this.crossfaderCurveSharpness.subscribe(function () { return _this.sendCrossfaderChange(); });
        this.sliderValue.subscribe(function () { return _this.sendCrossfaderChange(); });
    }
    CrossfaderComponent.prototype.getGain = function (sliderValue, curveSharpness) {
        var equalPowerValue = Math.cos(sliderValue * Math.PI / 2);
        return Math.min(1, equalPowerValue * (curveSharpness * 19 + 1));
    };
    CrossfaderComponent.prototype.sendCrossfaderChange = function () {
        var sliderValue = this.sliderValue.getValue();
        var curveSharpness = this.crossfaderCurveSharpness.getValue();
        var leftGain = this.getGain(sliderValue, curveSharpness);
        var rightGain = this.getGain(1 - sliderValue, curveSharpness);
        this.change.emit({ leftGain: leftGain, rightGain: rightGain });
    };
    CrossfaderComponent.prototype.setCurveSharpness = function (value) {
        this.preferencesDb.setCrossfaderCurveSharpness(value);
        this.crossfaderCurveSharpness.next(value);
    };
    __decorate([
        _angular_core.Output(), 
        __metadata('design:type', Object)
    ], CrossfaderComponent.prototype, "change", void 0);
    CrossfaderComponent = __decorate([
        _angular_core.Component({
            selector: 'crossfader',
            template: "<div class=\"crossfader-comp\">\n    <div class=\"crossfader-container\">\n\n        <!--<div style=\"position: relative; left: -3px; top: 2px;\">-->\n        <!--<div style=\"height:40px; width: 1px; background-color: white; position: absolute; left: 0;\"></div>-->\n        <!--<div style=\"height:40px; width: 1px; background-color: white; position: absolute; left: 62px;\"></div>-->\n        <!--<div style=\"height:40px; width: 1px; background-color: white; position: absolute; left: 125px;\"></div>-->\n        <!--<div style=\"height:40px; width: 1px; background-color: white; position: absolute; left: 187px;\"></div>-->\n        <!--<div style=\"height:40px; width: 1px; background-color: white; position: absolute; left: 250px;\"></div>-->\n        <!--</div>-->\n\n        <md-slider id=\"crossfader\" class=\"crossfader\" [min]=\"0\" [max]=\"1\" [step]=\"1/128\" [value]=\"sliderValue.getValue()\" (input)=\"sliderValue.next($event.value)\"></md-slider>\n        <midi-mapping elemId=\"crossfader\" [amount]=\"sliderValue.getValue()\" (amountChange)=\"sliderValue.next($event)\"></midi-mapping>\n    </div>\n    <div class=\"crossfader-shape-container\">\n        <img (click)=\"setCurveSharpness(0)\" src=\"img/smooth-curve.svg\" width=\"15px\" title=\"Smooth curve\" alt=\"Smooth curve\">\n        <md-slide-toggle\n                id=\"crossfader-curve-toggle\"\n                [checked]=\"crossfaderCurveSharpness.getValue() === 1\"\n                (change)=\"setCurveSharpness($event.checked? 1 : 0)\"\n                class=\"curveTypeToggle\" style=\"display:inline-block; position:relative; left:3px; top:7px;\">\n        </md-slide-toggle>\n        <midi-mapping elemId=\"crossfader-curve-toggle\" [amount]=\"crossfaderCurveSharpness.getValue()\" (amountChange)=\"setCurveSharpness($event? 1 : 0)\"></midi-mapping>\n        <img (click)=\"setCurveSharpness(1)\" src=\"img/scratch-curve.svg\" width=\"15px\" title=\"Smooth curve\" alt=\"Scratch curve\">\n    </div>\n</div>\n",
            styles: [".crossfader-comp {\n  position: relative; }\n\n.crossfader-container {\n  position: absolute;\n  left: 50%;\n  transform: translate(-50%); }\n\n.crossfader-shape-container {\n  position: absolute;\n  left: calc(50% + 170px);\n  transform: translate(-50%);\n  white-space: nowrap;\n  vertical-align: top; }\n"]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof PreferencesDb !== 'undefined' && PreferencesDb) === 'function' && _a) || Object])
    ], CrossfaderComponent);
    return CrossfaderComponent;
    var _a;
}());

var SideNavComponent = (function () {
    function SideNavComponent(sideNav) {
        this.sideNav = sideNav;
        this.SideNavState = SideNavState;
    }
    SideNavComponent = __decorate([
        _angular_core.Component({
            selector: 'side-nav',
            template: "\n<div id=\"sideNav\" style=\"width: 350px; padding:10px\">\n    <midi-settings *ngIf=\"(sideNav.state$ | async) === SideNavState.Midi\"></midi-settings>\n    <audio-settings *ngIf=\"(sideNav.state$ | async) === SideNavState.Audio\"></audio-settings>\n</div>\n"
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof SideNav !== 'undefined' && SideNav) === 'function' && _a) || Object])
    ], SideNavComponent);
    return SideNavComponent;
    var _a;
}());

var AudioSettingsComponent = (function () {
    function AudioSettingsComponent() {
        this.DeckId = DeckId;
    }
    AudioSettingsComponent = __decorate([
        _angular_core.Component({
            selector: 'audio-settings',
            template: "<div id=\"audio-settings\">\n    <h1>Audio Settings</h1>\n    <div class=\"deck1\">\n        <deck-audio-settings [deckId]=\"DeckId.LEFT\"></deck-audio-settings>\n    </div>\n    <div class=\"deck2\">\n        <deck-audio-settings [deckId]=\"DeckId.RIGHT\"></deck-audio-settings>\n    </div>\n</div>",
            styles: [""]
        }), 
        __metadata('design:paramtypes', [])
    ], AudioSettingsComponent);
    return AudioSettingsComponent;
}());

var MidiSettingsComponent = (function () {
    function MidiSettingsComponent(midiIo) {
        this.midiIo = midiIo;
    }
    MidiSettingsComponent.prototype.getDeviceName = function (device) {
        return device.name;
    };
    MidiSettingsComponent = __decorate([
        _angular_core.Component({
            selector: 'midi-settings',
            template: "<div id=\"midi-settings\">\n    <h1 style=\"margin-top:0;\">MIDI Settings</h1>\n    <h2>Enable Devices</h2>\n    <table>\n        <tr>\n            <th>Input</th>\n            <th>Output</th>\n            <th>Name</th>\n        </tr>\n        <tr *ngFor=\"let device of midiIo.devices;trackBy:getDeviceName\">\n            <td>\n                <div *ngIf=\"device.input\">\n                    <md-checkbox [checked]=\"midiIo.inputIsEnabled(device.name)\" (change)=\"midiIo.toggleInput(device.name)\"></md-checkbox>\n                </div>\n            </td>\n            <td>\n                <div *ngIf=\"device.output\">\n                    <md-checkbox [checked]=\"midiIo.outputIsEnabled(device.name)\" (change)=\"midiIo.toggleOutput(device.name)\"></md-checkbox>\n                </div>\n            </td>\n            <td>{{device.name}}</td>\n        </tr>\n    </table>\n</div>",
            styles: [""]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof MidiIo !== 'undefined' && MidiIo) === 'function' && _a) || Object])
    ], MidiSettingsComponent);
    return MidiSettingsComponent;
    var _a;
}());

var MidiMappingComponent = (function () {
    function MidiMappingComponent(midiMapper, midiIo) {
        this.midiMapper = midiMapper;
        this.midiIo = midiIo;
        this.ctrl = this;
        this.amountChange = new _angular_core.EventEmitter();
        this.shortMidiTypeNames = (_a = {},
            _a[MidiMsgType.NoteOff] = 'Note Off',
            _a[MidiMsgType.NoteOn] = 'Note On',
            _a[MidiMsgType.PolyAfterTouch] = 'AfTo',
            _a[MidiMsgType.CC] = 'CC',
            _a[MidiMsgType.ProgramChange] = 'Prog',
            _a[MidiMsgType.ChannelAfterTouch] = 'Chan AfTo',
            _a[MidiMsgType.PitchBend] = 'Pitch Bend',
            _a[MidiMsgType.SysEx] = 'SysEx',
            _a
        );
        var _a;
    }
    Object.defineProperty(MidiMappingComponent.prototype, "amount", {
        set: function (value) {
            this._amount = value;
            var mapping = this.midiMapper.getMapping(this.elemId);
            if (mapping) {
                var msg = {
                    msgType: mapping.control.msgType,
                    channel: mapping.control.channel,
                    subType: mapping.control.subType,
                    amount: value
                };
                this.midiIo.sendMessage(msg);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MidiMappingComponent.prototype, "inputElem", {
        get: function () {
            return document.getElementById(this.elemId);
        },
        enumerable: true,
        configurable: true
    });
    MidiMappingComponent.prototype.ngOnInit = function () {
        this.midiMapper.registerMappingComp(this.elemId, this);
    };
    MidiMappingComponent.prototype.onLearnMsg = function (msg) {
        if (msg.msgType === MidiMsgType.NoteOff) {
            return;
        }
        var mappingType = (msg.msgType === MidiMsgType.NoteOn) ? MappingType.Latch : MappingType.Amount;
        this.midiMapper.setMapping(this.elemId, {
            control: { msgType: msg.msgType, channel: msg.channel, subType: msg.subType },
            type: mappingType
        });
    };
    MidiMappingComponent.prototype.onInputMsg = function (msg) {
        var mapping = this.midiMapper.getMapping(this.elemId);
        if (mapping.type === MappingType.Amount) {
            this.amountChange.next(msg.amount);
        }
        else if (mapping.type === MappingType.Latch) {
            if (msg.amount === 0) {
                return;
            }
            else {
                if (this._amount === 1) {
                    this.amountChange.next(0);
                }
                else {
                    this.amountChange.next(1);
                }
            }
        }
    };
    MidiMappingComponent.prototype.getMappedControlMessage = function () {
        var mapping = this.midiMapper.getMapping(this.elemId);
        if (mapping) {
            return this.shortMidiTypeNames[mapping.control.msgType] + ": " + mapping.control.subType;
        }
    };
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', String)
    ], MidiMappingComponent.prototype, "elemId", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', Number), 
        __metadata('design:paramtypes', [Number])
    ], MidiMappingComponent.prototype, "amount", null);
    __decorate([
        _angular_core.Output(), 
        __metadata('design:type', Object)
    ], MidiMappingComponent.prototype, "amountChange", void 0);
    MidiMappingComponent = __decorate([
        _angular_core.Component({
            selector: 'midi-mapping',
            template: "<div id=\"midi-mapping\" *ngIf=\"midiMapper.getLearnMode()\" (click)=\"midiMapper.activeLearnMappingComp=ctrl\"\n     [class.active]=\"midiMapper.activeLearnMappingComp === ctrl\"\n     [style.top]=\"inputElem.offsetTop + 'px'\" [style.left]=\"inputElem.offsetLeft + 'px'\"\n     [style.width]=\"inputElem.offsetWidth + 'px'\" [style.height]=\"inputElem.offsetHeight + 'px'\">\n    {{getMappedControlMessage()}}\n</div>",
            styles: ["#midi-mapping {\n  position: absolute;\n  background-color: rgba(148, 192, 214, 0.65);\n  z-index: 500;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n  #midi-mapping.active {\n    background-color: rgba(64, 123, 185, 0.65); }\n"]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof MidiMapper !== 'undefined' && MidiMapper) === 'function' && _a) || Object, (typeof (_b = typeof MidiIo !== 'undefined' && MidiIo) === 'function' && _b) || Object])
    ], MidiMappingComponent);
    return MidiMappingComponent;
    var _a, _b;
}());

var FixedTableHeaderContainerDirective = (function () {
    function FixedTableHeaderContainerDirective() {
    }
    FixedTableHeaderContainerDirective.prototype.onScroll = function (event) {
        var elem = event.target;
        var translate = "translate(0," + elem.scrollTop + "px)";
        var allTh = elem.querySelectorAll("th");
        for (var i = 0; i < allTh.length; i++) {
            allTh[i].style.transform = translate;
        }
    };
    __decorate([
        _angular_core.HostListener('scroll', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], FixedTableHeaderContainerDirective.prototype, "onScroll", null);
    FixedTableHeaderContainerDirective = __decorate([
        _angular_core.Directive({ selector: '[fixedTableHeaderContainer]' }), 
        __metadata('design:paramtypes', [])
    ], FixedTableHeaderContainerDirective);
    return FixedTableHeaderContainerDirective;
}());

var DeckAudioSettingsComponent = (function () {
    function DeckAudioSettingsComponent(audioUtil, audioSettings) {
        this.audioUtil = audioUtil;
        this.audioSettings = audioSettings;
        this.deckNames = (_a = {},
            _a[DeckId.LEFT] = 'A',
            _a[DeckId.RIGHT] = 'B',
            _a
        );
        var _a;
    }
    DeckAudioSettingsComponent.prototype.ngOnInit = function () {
        this.deckAudioSettings = this.audioSettings.getDeckAudioSettings(this.deckId);
    };
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', (typeof (_a = typeof DeckId !== 'undefined' && DeckId) === 'function' && _a) || Object)
    ], DeckAudioSettingsComponent.prototype, "deckId", void 0);
    DeckAudioSettingsComponent = __decorate([
        _angular_core.Component({
            selector: 'deck-audio-settings',
            template: "<div>\n    <h2>Deck {{deckNames[deckId]}}</h2>\n\n    <div>\n        <md-select placeholder=\"Live Input\" [ngModel]=\"deckAudioSettings.liveIn$ | async\" (change)=\"deckAudioSettings.setLiveIn($event.value)\">\n            <md-option *ngFor=\"let device of (audioUtil.inputDevices$ | async)\" [value]=\"device\">{{ device.label }}</md-option>\n        </md-select>\n    </div>\n\n    <div>\n        <md-select placeholder=\"Control Input\" [ngModel]=\"deckAudioSettings.controlIn$ | async\" (change)=\"deckAudioSettings.setControlIn($event.value)\">\n            <md-option *ngFor=\"let device of (audioUtil.inputDevices$ | async)\" [value]=\"device\">{{ device.label }}</md-option>\n        </md-select>\n    </div>\n\n</div>\n\n",
            styles: ["h2 {\n  margin-bottom: 0;\n}\n\n.mat-select {\n  margin-top: 25px;\n  margin-left: 10px;\n  width: calc(100% - 20px);\n}"]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof AudioUtil !== 'undefined' && AudioUtil) === 'function' && _b) || Object, (typeof (_c = typeof AudioSettings !== 'undefined' && AudioSettings) === 'function' && _c) || Object])
    ], DeckAudioSettingsComponent);
    return DeckAudioSettingsComponent;
    var _a, _b, _c;
}());

var FaderComponent = (function () {
    function FaderComponent() {
        this.change = new _angular_core.EventEmitter();
        this.maxValue = 1.2;
    }
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', Object)
    ], FaderComponent.prototype, "name", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', Object)
    ], FaderComponent.prototype, "value", void 0);
    __decorate([
        _angular_core.Output(), 
        __metadata('design:type', Object)
    ], FaderComponent.prototype, "change", void 0);
    FaderComponent = __decorate([
        _angular_core.Component({
            selector: 'fader',
            template: "<div>\n    <md-slider class=\"fader\" [id]=\"'fader-' + name\" [min]=\"0\" [max]=\"maxValue\" [step]=\"maxValue/128\" [value]=\"value\" (input)=\"change.next($event.value)\" [vertical]=\"true\"></md-slider>\n    <midi-mapping [elemId]=\"'fader-' + name\" [amount]=\"value/maxValue\" (amountChange)=\"change.next($event * maxValue)\"></midi-mapping>\n</div>",
            styles: [""]
        }), 
        __metadata('design:paramtypes', [])
    ], FaderComponent);
    return FaderComponent;
}());

var LoadingOverlayComponent = (function () {
    function LoadingOverlayComponent() {
        this.showSpinner = true;
    }
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', String)
    ], LoadingOverlayComponent.prototype, "msg", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', Boolean)
    ], LoadingOverlayComponent.prototype, "showSpinner", void 0);
    LoadingOverlayComponent = __decorate([
        _angular_core.Component({
            selector: 'loading-overlay',
            styles: ["@import '../../globalSass/material/palettes';\n\n.loading-overlay {\n  border: 4px dashed map_get($dvs-grey, 200);\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 3;\n  background-color: rgba(29, 29, 29, 0.8);\n}\n\n.drop-msg {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%,35px);\n}"],
            template: "\n<div class=\"loading-overlay\">\n    <div class=\"drop-msg\" *ngIf=\"msg\">{{msg}}</div>\n    <spinner *ngIf=\"showSpinner\"></spinner>\n</div>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], LoadingOverlayComponent);
    return LoadingOverlayComponent;
}());

var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        _angular_core.NgModule({
            imports: [_angular_platformBrowser.BrowserModule, _angular_material.MaterialModule, _angular_forms.FormsModule],
            declarations: [AppComponent, LibraryComponent, ToolbarComponent, FileDropDirective, SpinnerComponent, DeckComponent,
                CenterControlsComponent, CrossfaderComponent, SideNavComponent, AudioSettingsComponent, MidiSettingsComponent,
                MidiMappingComponent, FixedTableHeaderContainerDirective, DeckAudioSettingsComponent, FaderComponent,
                FormatTimePipe, LoadingOverlayComponent],
            bootstrap: [AppComponent],
            providers: [AudioUtil, WaveformUtil, SongDb, ActiveSongs, AnimationFrames, DocumentEvents, SideNav, MidiIo, MidiUtil,
                MidiMapper, Db, PreferencesDb, AudioSettings, DspUtil, Resampler, AudioOutput, FormatTimePipe]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());

_angular_platformBrowserDynamic.platformBrowserDynamic().bootstrapModule(AppModule);

}(vendor.angularPlatformBrowserDynamic,vendor.angularCore,vendor.angularPlatformBrowser,vendor.angularMaterial,vendor.rxjs,vendor.rxjsBehaviorsubject,vendor.angularForms));
//# sourceMappingURL=app.js.map
