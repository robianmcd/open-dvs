import {Component, ViewChild, AfterViewInit, ElementRef} from "@angular/core";
import {ActiveSongs} from "../../services/activeSongs.service";
import {ActiveSong} from "../../services/activeSong";
import {DeckId, ThemeId} from "../app.component";
import {Song} from "../../models/song";
import {WaveformUtil, DrawWaveformOptions} from "../../services/audio/waveformUtil.service";
import {AudioUtil} from "../../services/audio/audioUtil.service";
import {AnimationFrames} from "../../services/animationFrames.service";
import {DocumentEvents} from "../../services/documentEvents.service";
import {CrossfaderChangeEvent} from "./crossfader/crossfader.component";
import {AudioOutput} from "../../services/audioOutput.service";

@Component({
    selector: 'center-controls',
    templateUrl: 'centerControls.component.html',
    styleUrls: ['centerControls.component.css']
})
export class CenterControlsComponent implements AfterViewInit {
    DeckId = DeckId;

    deck1ActiveSong: ActiveSong;
    deck2ActiveSong: ActiveSong;

    activeScrubDeck: DeckId;
    scrubOrigSongOffset: number;
    scrubOrigScreenX: number;
    resumePlayingAfterScrub: boolean;
    song1PixelOffsetAtLastDraw: number;
    song2PixelOffsetAtLastDraw: number;

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
        private animationFrames: AnimationFrames,
        private documentEvents: DocumentEvents,
        public audioOutput: AudioOutput
    ) {
        this.deck1ActiveSong = activeSongs.getActiveSong(DeckId.LEFT);
        this.deck2ActiveSong = activeSongs.getActiveSong(DeckId.RIGHT);

        this.deck1ActiveSong.songObservable.subscribe((song: Song) => this.onSongChange(DeckId.LEFT, song));
        this.deck2ActiveSong.songObservable.subscribe((song: Song) => this.onSongChange(DeckId.RIGHT, song));

        animationFrames.frames.subscribe((time) => this.onAnimationFrame());

        this.documentEvents.mouseMove.subscribe((event) => this.onMouseMove(event));
        this.documentEvents.mouseUp.subscribe((event) => this.endScrub(event));
        this.documentEvents.dragEnd.subscribe((event) => this.endScrub(event));
    }

    ngAfterViewInit() {
        this.deck1Canvas.width = this.deck1Canvas.offsetWidth;
        this.deck2Canvas.width = this.deck2Canvas.offsetWidth;

        this.deck1Canvas.getContext('2d').translate(0.5, 0);
        this.deck2Canvas.getContext('2d').translate(0.5, 0);
    }

    onAnimationFrame() {
        if (this.deck1ActiveSong.isLoaded) {
            this.drawSong(DeckId.LEFT, this.deck1ActiveSong.song);
        }

        if (this.deck2ActiveSong.isLoaded) {
            this.drawSong(DeckId.RIGHT, this.deck2ActiveSong.song);
        }
    }

    onSongChange(deckId: DeckId, song: Song) {
        this.setPixelOffsetAtLastDraw(undefined, deckId);
        this.drawSong(deckId, song);
    }

    setPixelOffsetAtLastDraw(offset: number, deckId: DeckId) {
      if(deckId === DeckId.LEFT) {
          this.song1PixelOffsetAtLastDraw = offset;
      }  else {
          this.song2PixelOffsetAtLastDraw = offset;
      }
    }

    getPixelOffsetAtLastDraw(deckId: DeckId): number {
        if(deckId === DeckId.LEFT) {
            return this.song1PixelOffsetAtLastDraw;
        }  else {
            return this.song2PixelOffsetAtLastDraw;
        }
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

        let currentSongOffset = activeSong.currentSongOffset;

        //TODO: when tempo slider is set multiple this by it
        let compressedSampleRate = this.audioUtil.context.sampleRate / 100;
        let startTime = currentSongOffset - 3;
        let endTime = currentSongOffset + 3;

        let drawFromX = 0;
        let drawToX = waveformCanvas.width;

        let pixelOffset = Math.round(currentSongOffset * waveformCanvas.width/ 6);

        if(this.getPixelOffsetAtLastDraw(deckId) !== undefined) {
            let redrawWidth = pixelOffset - this.getPixelOffsetAtLastDraw(deckId);

            if(Math.abs(redrawWidth) < waveformCanvas.width) {
                if(redrawWidth >= 0) {
                    drawFromX = waveformCanvas.width - redrawWidth;
                    drawToX = waveformCanvas.width;
                } else {
                    drawFromX = 0;
                    drawToX = -redrawWidth;
                }

                if(redrawWidth !== 0) {
                    let canvasCtx = waveformCanvas.getContext('2d');
                    let imageData = canvasCtx.getImageData(0, 0, waveformCanvas.width, waveformCanvas.height);
                    //canvasCtx.clearRect(0,0, waveformCanvas.width, waveformCanvas.height);
                    canvasCtx.putImageData(imageData, -redrawWidth, 0);
                }
            }
        }

        this.setPixelOffsetAtLastDraw(pixelOffset, deckId);

        drawOptions = {
            canvas: waveformCanvas,
            themeId: ThemeId.fromDeckId(deckId),
            useGradient: false,
            drawFromX,
            drawToX
        };
        drawOptions[waveformName] = this.waveformUtil.projectWaveform(song.waveformCompressed100x, compressedSampleRate, waveformCanvas.width, startTime, endTime);

        this.waveformUtil.drawWaveform(drawOptions);
        this.waveformUtil.overlayCues(waveformCanvas, song.details.cues, startTime, 6, deckId === DeckId.RIGHT);
    }

    onMouseMove(event: MouseEvent) {
        if(this.activeScrubDeck) {
            let activeSong = this.getActiveSongFromDeckId(this.activeScrubDeck);

            let pixelsPerSecond = this.deck1Canvas.offsetWidth / 6;
            let deltaX = this.scrubOrigScreenX - event.screenX;
            let newSongOffset = this.scrubOrigSongOffset + (deltaX / pixelsPerSecond);
            newSongOffset = Math.max(0, newSongOffset);
            newSongOffset = Math.min(activeSong.song.details.lengthSeconds, newSongOffset);
            activeSong.setSongOffset(newSongOffset);
        }
    }

    endScrub(event: MouseEvent) {
        if(this.activeScrubDeck !== undefined) {
            let activeSong = this.getActiveSongFromDeckId(this.activeScrubDeck);
            if(this.resumePlayingAfterScrub) {
                activeSong.playBuffer();
            }

            this.activeScrubDeck = undefined;
            document.body.classList.remove('scrubbing');
        }
    }

    startScrub(deckId: DeckId, event: MouseEvent) {
        let activeSong = this.getActiveSongFromDeckId(deckId);
        if(activeSong.isLoaded) {
            this.activeScrubDeck = deckId;
            this.resumePlayingAfterScrub = activeSong.isPlaying;
            this.scrubOrigSongOffset = activeSong.currentSongOffset;
            this.scrubOrigScreenX = event.screenX;

            activeSong.isPlaying && activeSong.pauseBuffer();
            document.body.classList.add('scrubbing');
        }
    }

    getActiveSongFromDeckId(deckId: DeckId) {
        if(deckId === DeckId.LEFT) {
            return this.deck1ActiveSong;
        } else {
            return this.deck2ActiveSong;
        }
    }

    crossfaderChange({leftGain, rightGain}: CrossfaderChangeEvent) {
        this.deck1ActiveSong.setGain(leftGain);
        this.deck2ActiveSong.setGain(rightGain);
    }

}
