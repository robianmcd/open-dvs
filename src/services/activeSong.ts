import {Song} from "../models/song";
import {AudioUtil} from "./audioUtil";
import {DeckId} from "../app/app.component";
import {ReplaySubject} from "rxjs";

export class ActiveSong {
    public song: Song;

    private song$ = new ReplaySubject<Song>();
    private source: AudioBufferSourceNode;
    private buffer: AudioBuffer;

    private songOffsetRecordedTime: number;
    private songOffset: number;

    private playbackRate = 0;
    private gainNode: GainNode;

    constructor(
        private deckId: DeckId,
        private audioUtil: AudioUtil)
    {
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

    setSongOffset(time) {
        this.songOffset = time;
        this.songOffsetRecordedTime = this.audioUtil.context.currentTime;

        if(this.isPlaying) {
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
        this.gainNode.gain.value = gain;
    }

    private updateSongOffset() {
        this.songOffset = this.currentSongOffset;
        this.songOffsetRecordedTime = this.audioUtil.context.currentTime;
    }
}