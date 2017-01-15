import {Song} from "../../models/song";
import {SongDetails} from "../../models/songDetails";
import {Component, ElementRef, Input, OnInit} from "@angular/core";
import {WaveformUtil} from "../../services/waveformUtil";
import {DeckId, ThemeId} from "../app.component";
import {ActiveSongs} from "../../services/activeSongs";
import {ActiveSong} from "../../services/activeSong";

@Component({
    selector: 'deck',
    templateUrl: 'deck.component.html',
    styleUrls: ['deck.component.css']
})
export class DeckComponent implements OnInit {
    @Input() deckId: DeckId;
    activeSong: ActiveSong;

    constructor(private elementRef: ElementRef, private waveformUtil: WaveformUtil, private activeSongs: ActiveSongs) {

    }

    ngOnInit() {
        this.activeSong = this.activeSongs.getActiveSong(this.deckId);
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

    drawWaveform(songDetails: SongDetails) {
        let deckElem = <HTMLElement>this.elementRef.nativeElement;
        let waveformElem = <HTMLCanvasElement>deckElem.querySelector('.waveform');
        waveformElem.width = deckElem.clientWidth;

        this.waveformUtil.drawWaveform(waveformElem, songDetails, ThemeId.fromDeckId(this.deckId));
    }
}
