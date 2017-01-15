import {DeckId} from "../app/app.component";
import {ActiveSong} from "./activeSong";
import {AudioUtil} from "./audioUtil";
import {WaveformUtil} from "./waveformUtil";
import {Injectable} from "@angular/core";

@Injectable()
export class ActiveSongs {
    private activeSongByDeckId = new Map<DeckId, ActiveSong>();

    constructor(audioUtil: AudioUtil)
    {
        this.activeSongByDeckId.set(
            DeckId.LEFT,
            new ActiveSong(DeckId.LEFT, audioUtil)
        );
        this.activeSongByDeckId.set(
            DeckId.RIGHT,
            new ActiveSong(DeckId.RIGHT, audioUtil)
        );
    }

    getActiveSong(deckId: DeckId) {
        return this.activeSongByDeckId.get(deckId);
    }
}