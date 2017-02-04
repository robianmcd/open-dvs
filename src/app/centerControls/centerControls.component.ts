import {Component, ViewChild, AfterViewInit, ElementRef, NgZone} from "@angular/core";
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

    constructor(
        private activeSongs: ActiveSongs,
        private waveformUtil: WaveformUtil,
        private audioUtil: AudioUtil,
        private ngZone: NgZone
    ) {
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
        this.ngZone.runOutsideAngular(() => {
            requestAnimationFrame(this.drawSong.bind(this, deckId, song));
        });
    }

    drawSong(deckId: DeckId, song: Song) {
        let waveformCanvas;
        let waveformDetails: WaveformDetails;
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


        waveformDetails = {
            negativeSamples: undefined,
            positiveSamples: undefined,
            //TODO remove this as it is not used.
            numSamples: 0
        };

        waveformDetails[waveformName] = this.waveformUtil.projectWaveform(song.waveformCompressed100x, compressedSampleRate, waveformCanvas.width, startTime, endTime);
        this.waveformUtil.drawWaveform(waveformCanvas, waveformDetails, ThemeId.fromDeckId(deckId));

        requestAnimationFrame(this.drawSong.bind(this, deckId, song));
    }
}
