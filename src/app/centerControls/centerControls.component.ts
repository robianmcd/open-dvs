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
                waveformName = 'negativeWaveformPreview';
                activeSong = this.deck1ActiveSong;
                break;
            }
            case DeckId.RIGHT: {
                waveformCanvas = this.deck2Canvas;
                waveformName = 'positiveWaveformPreview';
                activeSong = this.deck2ActiveSong;
            }
        }

        //TODO: when tempo slider is set multiple this by it
        let compressedSampleRate = this.audioUtil.context.sampleRate / 100;
        let numSamples = Math.round(compressedSampleRate * 6);
        let firstSample = Math.round(activeSong.currentSongOffset * compressedSampleRate - numSamples / 2);

        waveformDetails = {
            negativeWaveformPreview: undefined,
            positiveWaveformPreview: undefined,
            waveformPreviewSize: numSamples
        };

        if (firstSample < 0) {
            let numEmptySamples = firstSample * -1;
            let emptySamples = new Array(numEmptySamples).fill(0);
            let samplesFromSong = song.waveformCompressed100x.slice(0, numSamples - numEmptySamples);
            waveformDetails[waveformName] = [...emptySamples, ...samplesFromSong];
        } else {
            waveformDetails[waveformName] = song.waveformCompressed100x.slice(firstSample, firstSample + numSamples);
        }


        this.waveformUtil.drawWaveform(waveformCanvas, waveformDetails, ThemeId.fromDeckId(deckId));

        requestAnimationFrame(this.drawSong.bind(this, deckId, song));
    }
}
