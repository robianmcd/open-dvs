import {Song} from "../../models/song";
import {SongDetails} from "../../models/songDetails";
import {Component, ElementRef, Input, OnInit, AfterViewInit} from "@angular/core";
import {WaveformUtil} from "../../services/waveformUtil";
import {DeckId, ThemeId} from "../app.component";
import {ActiveSongs} from "../../services/activeSongs";
import {ActiveSong} from "../../services/activeSong";
import {AnimationFrames} from "../../services/animationFrames.service";

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

    playPause() {
        if (this.activeSong.isLoaded) {
            if (this.activeSong.isPlaying) {
                this.activeSong.pauseBuffer();
            } else {
                this.activeSong.playBuffer();
            }
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
}
