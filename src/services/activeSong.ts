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

    private playbackRate = 0;
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

        const defaultPilotHz = 2000;
        let pilotHz = this.dspUtil.autoCorrelate(leftInputBuffer, context.sampleRate);
        let periodSamples = context.sampleRate / pilotHz;

        //Not enough of a signal to detect/too quiet or too slow
        if (pilotHz === -1 || periodSamples > 350) {
            this.playbackRate = 0;
            this.songOffsetRecordedTime = this.audioUtil.context.currentTime;
            for (let i = 0; i < this.BUFFER_SIZE; i++) {
                leftScriptOutputBuffer[i] = 0;
                rightScriptOutputBuffer[i] = 0;
            }
            return;
        }

        let phaseSamples = this.dspUtil.crossCorrelate(leftInputBuffer, rightInputBuffer);

        let playingInReverse;
        //TODO: figure out why this keeps happening.
        if (phaseSamples === -1) {
            console.log('skipping directing and assuming ' + ((this.playbackRate < 0) ? 'reverse':'forward'));
            playingInReverse = this.playbackRate < 0;
        } else {
            playingInReverse = phaseSamples < periodSamples - phaseSamples;
        }
        let reverseMultiplier = playingInReverse ? -1 : 1;


        let outputSize = Math.round(this.BUFFER_SIZE * (pilotHz / defaultPilotHz));
        let outputPlaybackRate = outputSize / this.BUFFER_SIZE;
        let activeSectionSampleRate = context.sampleRate * outputPlaybackRate;

        let leftSongBuffer = this.buffer.getChannelData(0);
        let rightSongBuffer = this.buffer.getChannelData(1);

        let leftActiveSectionSongBuffer = new Float32Array(outputSize);
        let rightActiveSectionBuffer = new Float32Array(outputSize);

        let offsetInSamples = Math.round(this.songOffset * this.audioUtil.context.sampleRate);
        for (let i = 0; i < outputSize; i++) {
            leftActiveSectionSongBuffer[i] = leftSongBuffer[i * reverseMultiplier + offsetInSamples];
            rightActiveSectionBuffer[i] = rightSongBuffer[i * reverseMultiplier + offsetInSamples];
        }

        let leftRenderedBuffer = this.resampler.resample(leftActiveSectionSongBuffer, activeSectionSampleRate, context.sampleRate);
        let rightRenderedBuffer = this.resampler.resample(rightActiveSectionBuffer, activeSectionSampleRate, context.sampleRate);

        for (let i = 0; i < this.BUFFER_SIZE; i++) {
            leftScriptOutputBuffer[i] = leftRenderedBuffer[i];
            rightScriptOutputBuffer[i] = rightRenderedBuffer[i];
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
        //delay when gain is set to make up for audio latency. Maybe set this to 40ms in OSX and 170ms on windows
        this.gainNode.gain.setValueAtTime(gain, this.audioUtil.context.currentTime + 40/1000);
        //this.gainNode.gain.value = gain;
    }

    private updateSongOffset() {
        this.songOffset = this.currentSongOffset;
        this.songOffsetRecordedTime = this.audioUtil.context.currentTime;
    }
}