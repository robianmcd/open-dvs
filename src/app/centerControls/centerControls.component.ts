import {Component, ViewChild, AfterViewInit, ElementRef} from "@angular/core";
import {ActiveSongs} from "../../services/activeSongs";
import {ActiveSong} from "../../services/activeSong";
import {DeckId, ThemeId} from "../app.component";
import {Song} from "../../models/song";
import {WaveformUtil, DrawWaveformOptions} from "../../services/waveformUtil";
import {AudioUtil} from "../../services/audioUtil";
import {AnimationFrames} from "../../services/animationFrames.service";

@Component({
    selector: 'center-controls',
    templateUrl: 'centerControls.component.html',
    styleUrls: ['centerControls.component.css']
})
export class CenterControlsComponent implements AfterViewInit {
    deck1ActiveSong: ActiveSong;
    deck2ActiveSong: ActiveSong;

    @ViewChild('deck1Canvas') deck1ElementRef: ElementRef;
    @ViewChild('deck2Canvas') deck2ElementRef: ElementRef;

    get deck1Canvas(): HTMLCanvasElement {
        return this.deck1ElementRef.nativeElement;
    }

    get deck2Canvas(): HTMLCanvasElement {
        return this.deck2ElementRef.nativeElement;
    }

    constructor(
        private activeSongs: ActiveSongs,
        private waveformUtil: WaveformUtil,
        private audioUtil: AudioUtil,
        private animationFrames: AnimationFrames
    ) {
        this.deck1ActiveSong = activeSongs.getActiveSong(DeckId.LEFT);
        this.deck2ActiveSong = activeSongs.getActiveSong(DeckId.RIGHT);

        this.deck1ActiveSong.songObservable.subscribe((song: Song) => this.onSongChange(DeckId.LEFT, song));
        this.deck2ActiveSong.songObservable.subscribe((song: Song) => this.onSongChange(DeckId.RIGHT, song));

        animationFrames.frames.subscribe((time) => this.onAnimationFrame());
    }

    ngAfterViewInit() {
        this.deck1Canvas.width = this.deck1Canvas.offsetWidth;
        this.deck2Canvas.width = this.deck2Canvas.offsetWidth;
    }

    onAnimationFrame() {
        if (this.deck1ActiveSong.isPlaying) {
            this.drawSong(DeckId.LEFT, this.deck1ActiveSong.song);
        }

        if (this.deck2ActiveSong.isPlaying) {
            this.drawSong(DeckId.RIGHT, this.deck2ActiveSong.song);
        }
    }

    onSongChange(deckId: DeckId, song: Song) {
        this.drawSong(deckId, song);
    }

    drawSong(deckId: DeckId, song: Song) {
        let waveformCanvas;
        let drawOptions: DrawWaveformOptions;
        let waveformName;
        let activeSong: ActiveSong;

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

        //TODO: when tempo slider is set multiple this by it
        let compressedSampleRate = this.audioUtil.context.sampleRate / 100;
        let startTime = activeSong.currentSongOffset - 3;
        let endTime = activeSong.currentSongOffset + 3;


        drawOptions = {
            canvas: waveformCanvas,
            themeId: ThemeId.fromDeckId(deckId),
        };
        drawOptions[waveformName] = this.waveformUtil.projectWaveform(song.waveformCompressed100x, compressedSampleRate, waveformCanvas.width, startTime, endTime);

        this.waveformUtil.drawWaveform(drawOptions);
    }
}
