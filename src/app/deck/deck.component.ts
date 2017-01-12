import {Component} from "@angular/core";
import {AudioUtil} from "../../services/audioUtil";
import {Song} from "../../models/song";

@Component({
    selector: 'deck',
    templateUrl: 'deck.component.html',
    styleUrls: ['deck.component.css']
})
export class DeckComponent {

    constructor(private audioUtil: AudioUtil) {

    }

    loadSong(song: Song) {
        let context = this.audioUtil.context;

        context.decodeAudioData(song.buffer, (audioBuffer) => {
            let source = context.createBufferSource();
            source.buffer = audioBuffer;
            source.connect(context.destination);
            source.start();
        });
    }
}
