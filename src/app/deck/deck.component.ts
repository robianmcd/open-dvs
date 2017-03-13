import {Song} from "../../models/song";
import {SongDetails} from "../../models/songDetails";
import {Component, ElementRef, Input, OnInit, AfterViewInit} from "@angular/core";
import {WaveformUtil} from "../../services/audio/waveformUtil.service";
import {DeckId, ThemeId} from "../app.component";
import {ActiveSongs} from "../../services/activeSongs.service";
import {ActiveSong} from "../../services/activeSong";
import {AnimationFrames} from "../../services/animationFrames.service";
import {Observable} from "rxjs";
import {FormatTimePipe} from "../../pipes/formatTime.pipe";
import {SongDb} from "../../services/db/songDb.service";
import {AudioUtil} from "../../services/audio/audioUtil.service";

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
    loadingSong = false;
    cueMode = CueMode.Jump;

    CueMode = CueMode;

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
        private audioUtil: AudioUtil,
        private activeSongs: ActiveSongs,
        private animationFrames: AnimationFrames,
        private formatTime: FormatTimePipe,
        private songDb: SongDb
    ) {
        animationFrames.frames.subscribe((time) => this.onAnimationFrame());
    }

    ngOnInit() {
        this.activeSong = this.activeSongs.getActiveSong(this.deckId);

        this.formattedSongOffset$ = Observable.interval(100 /* ms */)
            .map(() => {
                if (this.activeSong.isLoaded) {
                    return this.formatTime.transform(this.activeSong.currentSongOffset);
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
        this.loadingSong = true;
        this.activeSong.loadSong(song)
            .then(
                () => {
                    this.loadingSong = false;
                },
                () => this.loadingSong = false
            );
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
        this.waveformUtil.overlayCues(this.waveformElem, songDetails.cues, 0, songDetails.lengthSeconds)
    }

    onCanvasClick(event) {
        if (this.activeSong.isLoaded) {
            let relativeSongOffse = event.offsetX / this.waveformElem.offsetWidth;
            this.activeSong.setSongOffset(relativeSongOffse * this.activeSong.song.details.lengthSeconds);
        }
    }

    cueClicked(index) {
        if(this.activeSong.isLoaded) {
            let cues = this.activeSong.song.details.cues;
            let updateRequired = false;


            switch(this.cueMode) {
                case CueMode.Jump: {
                    if (cues[index]) {
                        this.activeSong.setSongOffset(cues[index]);
                    } else {
                        cues[index] = this.activeSong.currentSongOffset;
                        updateRequired = true;
                    }
                    break;
                }
                case CueMode.Set: {
                    cues[index] = this.activeSong.currentSongOffset;
                    this.cueMode = CueMode.Jump;
                    updateRequired = true;
                    break;
                }
                case CueMode.Delete: {
                    cues[index] = undefined;
                    this.cueMode = CueMode.Jump;
                    updateRequired = true;
                    break;
                }
            }

            if(updateRequired) {
                this.activeSong.song.details.waveformDataUrl = this.waveformUtil.generateDataUrlWaveform(
                    this.activeSong.song.details.positiveSamples,
                    this.activeSong.song.details.negativeSamples,
                    this.audioUtil.context.sampleRate,
                    150,
                    35,
                    ThemeId.DEFAULT,
                    this.activeSong.song.details.cues,
                    0,
                    this.activeSong.song.details.lengthSeconds
                );

                this.songDb.updateSongDetails(this.activeSong.song.details);
            }

        }
    }

    indexArray(num: number) {
        return Array(num).fill(0).map((x, i) => i);
    }
}

export enum DeckInputType {File, Live}
export enum CueMode {Jump, Set, Delete}