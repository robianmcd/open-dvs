import {WaveformUtil} from "./waveformUtil";
import {Song} from "../models/song";
import {AudioUtil} from "./audioUtil";
import {DeckId} from "../app/app.component";

export class ActiveSong {
    song: Song;
    private source: AudioBufferSourceNode;
    private buffer: AudioBuffer;

    private songOffsetRecordedTime: number;
    private songOffset: number;

    private playbackRate = 1;

    constructor(
        private deckId: DeckId,
        private audioUtil: AudioUtil)
    {

    }

    get isPlaying() {
        return this.buffer !== undefined && this.playbackRate !== 0;
    }

    get isLoaded() {
        return !!this.buffer;
    }

    loadSong(song: Song) {
        this.song = song;
        let context = this.audioUtil.context;

        return context.decodeAudioData(song.buffer)
            .then((audioBuffer) => {
                this.buffer = audioBuffer;
                this.songOffset = 0;

                this.playBuffer();
            });
    }

    playBuffer() {
        if (this.buffer) {
            let context = this.audioUtil.context;

            if (this.source) {
                this.source.stop();
            }

            //todo: replace 1 with value of the temo slider
            this.playbackRate = 1;
            this.songOffsetRecordedTime = context.currentTime;
            this.source = context.createBufferSource();
            this.source.playbackRate.value = this.playbackRate;
            this.source.buffer = this.buffer;
            this.source.connect(context.destination);
            this.source.start(context.currentTime, this.songOffset);
        }
    }

    pauseBuffer() {
        if (this.buffer) {
            let songOffsetSinceLastRecording = (this.audioUtil.context.currentTime - this.songOffsetRecordedTime) * this.playbackRate;
            this.songOffset = this.songOffset + songOffsetSinceLastRecording;
            this.playbackRate = 0;
            this.source.stop();
            this.source = undefined;
        }
    }
}