import {Song} from "../models/song";
import {AudioUtil} from "./audioUtil";
import {DeckId} from "../app/app.component";
import {ReplaySubject} from "rxjs";
import {DeckAudioSettings} from "../app/sideNav/audioSettings/audioSettings.service";
import {DspUtil} from "./dspUtil.service";

export class ActiveSong {
    public song: Song;

    private song$ = new ReplaySubject<Song>();
    private source: AudioBufferSourceNode;
    private buffer: AudioBuffer;

    private songOffsetRecordedTime: number;
    private songOffset: number;

    private playbackRate = 0;
    private gainNode: GainNode;

    private controlled = false;
    private BUFFER_SIZE = 512;

    constructor(
        private deckId: DeckId,
        private audioUtil: AudioUtil,
        private deckAudioSettings: DeckAudioSettings,
        private dspUtil: DspUtil
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

        const defaultPilotHz = 2000;
        let pilotHz = this.dspUtil.autoCorrelate(leftInputBuffer, context.sampleRate);
        if (pilotHz === -1) {
            //Not enough of a signal to detect/too quiet
            //TODO this code is duplicated...make it not duplicated
            this.playbackRate = 0;
            this.songOffsetRecordedTime = this.audioUtil.context.currentTime;
            for (let i = 0; i < this.BUFFER_SIZE; i++) {
                leftScriptOutputBuffer[i] = 0;
                rightScriptOutputBuffer[i] = 0;
            }
            return;
        }

        let outputSize = Math.round(this.BUFFER_SIZE * (pilotHz / defaultPilotHz));
        let outputPlaybackRate = outputSize / this.BUFFER_SIZE;
        let offlineSampleRate = context.sampleRate * outputPlaybackRate;

        let leftSongBuffer = this.buffer.getChannelData(0);
        let rightSongBuffer = this.buffer.getChannelData(1);

        let phaseSamples = this.dspUtil.crossCorrelate(leftInputBuffer, rightInputBuffer);
        let periodSamples = context.sampleRate / pilotHz;
        let playingInReverse = phaseSamples < periodSamples - phaseSamples;
        let reverseMultiplier = playingInReverse ? -1 : 1;

        //Cannot create a buffer with a sample rate lower than 3000
        if (offlineSampleRate > 3000) {
            //console.log(leftInputBuffer[0], rightInputBuffer[0]);

            let offlineCtx = new OfflineAudioContext(2, this.BUFFER_SIZE, context.sampleRate);

            let outputBuffer = offlineCtx.createBuffer(
                2,
                outputSize,
                offlineSampleRate
            );
            let leftOutputBuffer = outputBuffer.getChannelData(0);
            let rightOutputBuffer = outputBuffer.getChannelData(1);

            let outputBufferSource = offlineCtx.createBufferSource();
            outputBufferSource.buffer = outputBuffer;

            let offsetInSamples = Math.round(this.songOffset * this.audioUtil.context.sampleRate);
            for (let i = 0; i < outputSize; i++) {
                leftOutputBuffer[i] = leftSongBuffer[i * reverseMultiplier + offsetInSamples];
                rightOutputBuffer[i] = rightSongBuffer[i * reverseMultiplier + offsetInSamples];
            }

            outputBufferSource.connect(offlineCtx.destination);
            outputBufferSource.start(0);

            offlineCtx.startRendering().then((renderedBuffer) => {
                let leftRenderedBuffer = renderedBuffer.getChannelData(0);
                let rightRenderedBuffer = renderedBuffer.getChannelData(1);

                for (let i = 0; i < this.BUFFER_SIZE; i++) {
                    leftScriptOutputBuffer[i] = leftRenderedBuffer[i];
                    rightScriptOutputBuffer[i] = rightRenderedBuffer[i];
                }
            });
        } else {
            this.playbackRate = 0;
            this.songOffsetRecordedTime = this.audioUtil.context.currentTime;
            for (let i = 0; i < this.BUFFER_SIZE; i++) {
                leftScriptOutputBuffer[i] = 0;
                rightScriptOutputBuffer[i] = 0;
            }
            return;
        }

        this.songOffset += outputSize * reverseMultiplier / this.audioUtil.context.sampleRate;
        this.playbackRate = outputSize * reverseMultiplier / this.BUFFER_SIZE;
        this.songOffsetRecordedTime = this.audioUtil.context.currentTime;
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
        //delay when gain is set to make up for audio latency. Maybe set this to 30ms in OSX and 160ms on windows
        //this.gainNode.gain.setValueAtTime(gain, this.audioUtil.context.currentTime + 30/1000);
        this.gainNode.gain.value = gain;
    }

    private updateSongOffset() {
        this.songOffset = this.currentSongOffset;
        this.songOffsetRecordedTime = this.audioUtil.context.currentTime;
    }
}