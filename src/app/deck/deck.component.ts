import {Song} from "../../models/song";
import {SongDetails} from "../../models/songDetails";
import {Component, ElementRef, Input, OnInit, AfterViewInit} from "@angular/core";
import {WaveformUtil} from "../../services/audio/waveformUtil.service";
import {DeckId, ThemeId} from "../app.component";
import {ActiveSongs} from "../../services/activeSongs.service";
import {ActiveSong} from "../../services/activeSong";
import {AnimationFrames} from "../../services/animationFrames.service";
import {Observable} from "rxjs";

@Component({
    selector: 'deck',
    templateUrl: 'deck.component.html',
    styleUrls: ['deck.component.css']
})
export class DeckComponent implements OnInit, AfterViewInit {
    @Input() deckId: DeckId;
    activeSong: ActiveSong;
    deckElem: HTMLElement;
    waveformElem: HTMLCanvasElement;
    formattedSongOffset$: Observable<string>;

    inputType: DeckInputType = DeckInputType.File;
    inputTypeOptions = [
        {label: 'File', type: DeckInputType.File},
        {label: 'Live', type: DeckInputType.Live}
    ];

    get deckName() {
        return DeckId[this.deckId];
    }

    constructor(
        private elementRef: ElementRef,
        private waveformUtil: WaveformUtil,
        private activeSongs: ActiveSongs,
        private animationFrames: AnimationFrames
    ) {
        animationFrames.frames.subscribe((time) => this.onAnimationFrame());
    }

    ngOnInit() {
        this.activeSong = this.activeSongs.getActiveSong(this.deckId);

        this.formattedSongOffset$ = Observable.interval(100 /* ms */)
            .map(() => {
                if (this.activeSong.isLoaded) {
                    return this.formatTime(this.activeSong.currentSongOffset);
                } else {
                    return '0:00';
                }
            })
    }

    ngAfterViewInit() {
        this.deckElem = <HTMLElement>this.elementRef.nativeElement;
        this.waveformElem = <HTMLCanvasElement>this.deckElem.querySelector('.waveform');
    }

    loadSong(song: Song) {
        this.activeSong.loadSong(song)
            .then(() => {
                this.drawWaveform(song.details);
            })
    }

    play() {
        if (this.activeSong.isLoaded && !this.activeSong.isPlaying) {
            this.activeSong.playBuffer();
        }
    }

    pause() {
        if (this.activeSong.isLoaded && this.activeSong.isPlaying) {
            this.activeSong.pauseBuffer();
        }
    }

    onAnimationFrame() {
        if (this.activeSong.isLoaded) {
            this.drawWaveform(this.activeSong.song.details);
        }
    }

    drawWaveform(songDetails: SongDetails) {
        //Note: setting the width clears the canvas but that's ok because drawWaveform is going to clear it anyway
        this.waveformElem.width = this.waveformElem.offsetWidth;

        let positiveSamples = this.waveformUtil.projectWaveform(
            songDetails.positiveSamples,
            songDetails.positiveSamples.length / songDetails.lengthSeconds,
            this.waveformElem.width
        );

        let negativeSamples = this.waveformUtil.projectWaveform(
            songDetails.negativeSamples,
            songDetails.negativeSamples.length / songDetails.lengthSeconds,
            this.waveformElem.width
        );

        let relativeSongOffset = this.activeSong.currentSongOffset / this.activeSong.song.details.lengthSeconds;
        let curSample = Math.round(relativeSongOffset * this.waveformElem.width);

        this.waveformUtil.drawWaveform({
            canvas: this.waveformElem,
            themeId: ThemeId.fromDeckId(this.deckId),
            positiveSamples,
            negativeSamples,
            firstColorPixel: curSample
        });
    }

    onCanvasClick(event) {
        if (this.activeSong.isLoaded) {
            let relativeSongOffse = event.offsetX / this.waveformElem.offsetWidth;
            this.activeSong.setSongOffset(relativeSongOffse * this.activeSong.song.details.lengthSeconds);
        }
    }

    formatTime(timeInSeconds: number) {
        let minutes = Math.round(timeInSeconds / 60).toString();
        let seconds = Math.round(timeInSeconds % 60).toString();

        seconds.length === 1 && (seconds = '0' + seconds);

        return `${minutes}:${seconds}`;
    }
}

export enum DeckInputType {File, Live}