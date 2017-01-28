import {Component, ViewChild, AfterViewInit, ElementRef} from "@angular/core";
import {ActiveSongs} from "../../services/activeSongs";
import {ActiveSong} from "../../services/activeSong";
import {DeckId, ThemeId} from "../app.component";
import {Song} from "../../models/song";
import {WaveformUtil} from "../../services/waveformUtil";
import {WaveformDetails} from "../../models/songDetails";
import {AudioUtil} from "../../services/audioUtil";

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

    constructor(private activeSongs: ActiveSongs, private waveformUtil: WaveformUtil, private audioUtil: AudioUtil) {
        this.deck1ActiveSong = activeSongs.getActiveSong(DeckId.LEFT);
        this.deck2ActiveSong = activeSongs.getActiveSong(DeckId.RIGHT);

        this.deck1ActiveSong.songObservable.subscribe((song: Song) => this.onSongChange(DeckId.LEFT, song));
        this.deck2ActiveSong.songObservable.subscribe((song: Song) => this.onSongChange(DeckId.RIGHT, song));
    }

    ngAfterViewInit() {
        this.deck1Canvas.width = this.deck1Canvas.parentElement.clientWidth;
        this.deck2Canvas.width = this.deck2Canvas.parentElement.clientWidth;
    }

    onSongChange(deckId: DeckId, song: Song) {
        requestAnimationFrame(this.drawSong.bind(this, deckId, song));
    }

    drawSong(deckId: DeckId, song: Song) {
        let waveformCanvas;
        let waveformDetails: WaveformDetails;
        let waveformName;
        let activeSong;

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
        let numSamples = Math.round(compressedSampleRate * 6);
        let samplesPerPixel = Math.floor(numSamples / waveformCanvas.width);
        let firstSample = Math.round(activeSong.currentSongOffset * compressedSampleRate - numSamples / 2);
        //This will make sure the first sample is a multiple of the number of samples per pixel. This ensures that if a
        //group of samples is rendered together as a single pixel it will always be rendered as a single pixel.
        //Without this the waveform will jitter.
        firstSample = firstSample - (firstSample % samplesPerPixel);
        let lastSample = firstSample + numSamples;


        waveformDetails = {
            negativeSamples: undefined,
            positiveSamples: undefined,
            numSamples: numSamples
        };

        let waveform = song.waveformCompressed100x.slice(
            Math.max(0, firstSample),
            Math.min(song.waveformCompressed100x.length, lastSample)
        );

        if (firstSample < 0) {
            let numEmptySamples = firstSample * -1;
            let emptySamples = new Array(numEmptySamples).fill(0);
            waveform = [...emptySamples, ...waveform];
        }

        if(lastSample > song.waveformCompressed100x.length) {
            let numEmptySamples = lastSample - song.waveformCompressed100x.length;
            let emptySamples = new Array(numEmptySamples).fill(0);
            waveform = [...waveform, ...emptySamples];
        }

        waveformDetails[waveformName] = waveform;

        this.waveformUtil.drawWaveform(waveformCanvas, waveformDetails, ThemeId.fromDeckId(deckId));

        requestAnimationFrame(this.drawSong.bind(this, deckId, song));
    }
}
