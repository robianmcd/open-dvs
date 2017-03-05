import {Song} from "../models/song";
import {AudioUtil} from "./audio/audioUtil.service";
import {DeckId} from "../app/app.component";
import {ReplaySubject} from "rxjs";
import {DeckAudioSettings} from "../app/sideNav/audioSettings/audioSettings.service";
import {DspUtil} from "./audio/dspUtil.service";
import {Resampler} from "./audio/resampler.service";

export class ActiveSong {
    public song: Song;

    private song$ = new ReplaySubject<Song>();
    private source: AudioBufferSourceNode;
    private buffer: AudioBuffer;

    private songOffsetRecordedTime: number;
    private songOffset: number;

    private _playbackRate = 0;

    private get playbackRate() {
        return this._playbackRate;
    }

    private set playbackRate(value: number) {
        this._playbackRate = value;
        if (value !== 0) {
            this.lastPlaybackDirectionIsForward = (value > 0);
        }
    }

    private lastPlaybackDirectionIsForward = true;
    private gainNode: GainNode;

    private controlled = false;
    private BUFFER_SIZE = 1024;

    constructor(
        private deckId: DeckId,
        private audioUtil: AudioUtil,
        private deckAudioSettings: DeckAudioSettings,
        private dspUtil: DspUtil,
        private resampler: Resampler
    ) {
        this.song$.subscribe((song) => this.song = song);

        this.gainNode = this.audioUtil.context.createGain();
        this.gainNode.connect(this.audioUtil.context.destination);
    }

    get isPlaying() {
        return this.buffer !== undefined && this.playbackRate !== 0;
    }

    get isLoaded() {
        return !!this.buffer;
    }

    get songObservable() {
        return this.song$.asObservable();
    }

    get currentSongOffset() {
        let songOffsetSinceLastRecording = (this.audioUtil.context.currentTime - this.songOffsetRecordedTime) * this.playbackRate;
        return this.songOffset + songOffsetSinceLastRecording;
    }

    get isControlled() {
        return this.controlled;
    }

    enableControl() {
        this.controlled = true;

        let controlDevice = this.deckAudioSettings.getControlIn();
        if (controlDevice) {

            let constraints = {
                audio: {
                    deviceId: controlDevice.deviceId,
                    echoCancellation: {exact: false}
                }
            };

            navigator.mediaDevices.getUserMedia(constraints)
                .then(
                    (stream) => {
                        let controlSource = this.audioUtil.context.createMediaStreamSource(stream);

                        let scriptNode = this.audioUtil.context.createScriptProcessor(this.BUFFER_SIZE);
                        scriptNode.onaudioprocess = (e: AudioProcessingEvent) => this.processControlAudio(e);

                        controlSource.connect(scriptNode);
                        scriptNode.connect(this.gainNode);
                    },
                    (error) => {
                        console.error('Could not load control device.', error);
                        this.controlled = false;
                    }
                );


        }


    }

    disableControl() {
        this.controlled = false;
    }

    toggleControl() {
        this.isControlled ? this.disableControl() : this.enableControl();
    }

    processControlAudio(event: AudioProcessingEvent) {
        let context = this.audioUtil.context;

        let leftInputBuffer = event.inputBuffer.getChannelData(0);
        let rightInputBuffer = event.inputBuffer.getChannelData(1);

        let leftScriptOutputBuffer = event.outputBuffer.getChannelData(0);
        let rightScriptOutputBuffer = event.outputBuffer.getChannelData(1);

        const subChunkSize = 256;
        const defaultPilotHz = 2000;

        try {
            for (let subChunkOffset = 0; subChunkOffset < this.BUFFER_SIZE; subChunkOffset += 256) {
                let leftSubInputBuffer = this.audioUtil.copyBuffer(leftInputBuffer, subChunkOffset, subChunkSize);
                let rightSubInputBuffer = this.audioUtil.copyBuffer(rightInputBuffer, subChunkOffset, subChunkSize);

                let {pilotHz, periodSamples} = this.getControlFreq(leftSubInputBuffer);

                let playingForward = this.controlIsPlayingForward(leftSubInputBuffer, rightSubInputBuffer, periodSamples);
                let playDirectionMultiplier = playingForward ? 1 : -1;

                let songSize = Math.round(subChunkSize * (pilotHz / defaultPilotHz));
                let songPlaybackRate = songSize / subChunkSize;
                let songSampleRate = context.sampleRate * songPlaybackRate;

                let {leftSongBuffer, rightSongBuffer} = this.getChunkOfSongForControl(songSize, playingForward);

                let leftRenderedBuffer = this.resampler.resample(leftSongBuffer, songSampleRate, context.sampleRate);
                let rightRenderedBuffer = this.resampler.resample(rightSongBuffer, songSampleRate, context.sampleRate);

                for (let i = 0; i < subChunkSize; i++) {
                    leftScriptOutputBuffer[i + subChunkOffset] = leftRenderedBuffer[i];
                    rightScriptOutputBuffer[i + subChunkOffset] = rightRenderedBuffer[i];
                }

                this.songOffset += songSize * playDirectionMultiplier / this.audioUtil.context.sampleRate;
                this.playbackRate = songSize * playDirectionMultiplier / this.BUFFER_SIZE;
                this.songOffsetRecordedTime = this.audioUtil.context.currentTime;

            }
        }
        catch(e) {
            this.playbackRate = 0;
            this.songOffsetRecordedTime = this.audioUtil.context.currentTime;
            for (let i = 0; i < this.BUFFER_SIZE; i++) {
                leftScriptOutputBuffer[i] = 0;
                rightScriptOutputBuffer[i] = 0;
            }
        }

    }

    getControlFreq(buf: Float32Array) {
        let pilotHz = this.dspUtil.autoCorrelate(buf, this.audioUtil.context.sampleRate);
        let periodSamples = this.audioUtil.context.sampleRate / pilotHz;

        //Not enough of a signal to detect/too quiet or too slow
        if (pilotHz === -1 || periodSamples > 350) {
            throw new Error('Could not detect frequency');
        } else {
            return {pilotHz, periodSamples};
        }
    }

    controlIsPlayingForward(leftBuf: Float32Array, rightBuf: Float32Array, periodSamples: number): boolean {
        let phaseSamples = this.dspUtil.crossCorrelate(leftBuf, rightBuf);

        //This should be from 0.22 to 0.25
        let relPhaseSeperation = Math.min(periodSamples - phaseSamples, phaseSamples) / periodSamples;
        let playingForward;
        if (phaseSamples === -1 || relPhaseSeperation < 0.2 || relPhaseSeperation > 0.3 || phaseSamples > periodSamples) {
            playingForward = this.lastPlaybackDirectionIsForward;
        } else {
            playingForward = phaseSamples > periodSamples - phaseSamples;
        }

        return playingForward;
    }

    getChunkOfSongForControl(size, playingForward) {
        let leftFullSongBuffer = this.buffer.getChannelData(0);
        let rightFullSongBuffer = this.buffer.getChannelData(1);

        let leftSongBuffer = new Float32Array(size);
        let rightSongBuffer = new Float32Array(size);

        let playDirectionMultiplier = playingForward ? 1 : -1;

        let offsetSamples = Math.round(this.songOffset * this.audioUtil.context.sampleRate);
        for (let i = 0; i < size; i++) {
            leftSongBuffer[i] = leftFullSongBuffer[i * playDirectionMultiplier + offsetSamples];
            rightSongBuffer[i] = rightFullSongBuffer[i * playDirectionMultiplier + offsetSamples];
        }

        return {leftSongBuffer, rightSongBuffer};
    }



    setSongOffset(time) {
        this.songOffset = time;
        this.songOffsetRecordedTime = this.audioUtil.context.currentTime;

        if (this.isPlaying) {
            this.pauseBuffer();
            this.playBuffer();
        }
    }

    loadSong(song: Song) {
        let context = this.audioUtil.context;

        return context.decodeAudioData(song.buffer)
            .then((audioBuffer) => {
                this.buffer = audioBuffer;
                this.songOffset = 0;
                this.songOffsetRecordedTime = context.currentTime;
                this.playbackRate = 0;
                this.song$.next(song);
            });
    }

    playBuffer() {
        if (this.buffer) {
            let context = this.audioUtil.context;

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
    }

    pauseBuffer() {
        if (this.buffer) {
            this.updateSongOffset();
            this.playbackRate = 0;
            this.source.stop();
            this.source = undefined;
        }
    }

    setGain(gain: number) {
        //delay when gain is set to make up for audio latency. Maybe set this to 40ms in OSX and 170ms on windows
        this.gainNode.gain.setValueAtTime(gain, this.audioUtil.context.currentTime + 40 / 1000);
        //this.gainNode.gain.value = gain;
    }

    private updateSongOffset() {
        this.songOffset = this.currentSongOffset;
        this.songOffsetRecordedTime = this.audioUtil.context.currentTime;
    }
}