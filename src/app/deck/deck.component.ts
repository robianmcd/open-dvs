import {AudioUtil} from "../../services/audioUtil";
import {Song} from "../../models/song";

@Component({
    selector: 'deck',
    templateUrl: 'deck.component.html',
    styleUrls: ['deck.component.css']
})
export class DeckComponent {

    source: AudioBufferSourceNode;
    buffer: AudioBuffer;

    songOffsetRecordedTime: number;
    songOffset: number;

    playbackRate = 1;

    constructor(private audioUtil: AudioUtil) {

    }

    get isPlaying() {
        return this.buffer !== undefined && this.playbackRate !== 0;
    }

    loadSong(song: Song) {
        //TODO: for some reason changes aren't being detected even if I manually call detectChanges

        let context = this.audioUtil.context;

        context.decodeAudioData(song.buffer, (audioBuffer) => {
            this.buffer = audioBuffer;
            this.songOffset = 0;

            this.playBuffer();
        });
    }

    playPause() {
        if(this.buffer) {
            if(this.playbackRate) {
                this.pauseBuffer();
            } else {
                this.playBuffer();
            }
        }
    }

    playBuffer() {
        if(this.buffer) {
            let context = this.audioUtil.context;

            if(this.source) {
                this.source.stop();
            }

            //todo: replace 1 with value of the temo slider
            this.playbackRate = 1;
            this.songOffsetRecordedTime = context.currentTime;
            this.source = context.createBufferSource();
            this.source.playbackRate.value = this.playbackRate;
            this.source.buffer = this.buffer;
            this.source.connect(context.destination);
            this.source.start(context.currentTime, this.songOffset);
        }
    }

    pauseBuffer() {
        if(this.buffer) {
            let songOffsetSinceLastRecording = (this.audioUtil.context.currentTime - this.songOffsetRecordedTime) * this.playbackRate;
            this.songOffset = this.songOffset + songOffsetSinceLastRecording;
            this.playbackRate = 0;
            this.source.stop();
            this.source = undefined;
        }
    }
}
