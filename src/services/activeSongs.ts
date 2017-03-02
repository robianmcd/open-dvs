import {DeckId} from "../app/app.component";
import {ActiveSong} from "./activeSong";
import {AudioUtil} from "./audioUtil";
import {Injectable} from "@angular/core";
import {AudioSettings} from "../app/sideNav/audioSettings/audioSettings.service";
import {DspUtil} from "./dspUtil.service";

@Injectable()
export class ActiveSongs {
    private activeSongByDeckId = new Map<DeckId, ActiveSong>();

    constructor(audioUtil: AudioUtil, audioSettings: AudioSettings, dspUtil: DspUtil) {
        this.activeSongByDeckId.set(
            DeckId.LEFT,
            new ActiveSong(DeckId.LEFT, audioUtil, audioSettings.getDeckAudioSettings(DeckId.LEFT), dspUtil)
        );
        this.activeSongByDeckId.set(
            DeckId.RIGHT,
            new ActiveSong(DeckId.RIGHT, audioUtil, audioSettings.getDeckAudioSettings(DeckId.RIGHT), dspUtil)
        );
    }

    getActiveSong(deckId: DeckId) {
        return this.activeSongByDeckId.get(deckId);
    }
}