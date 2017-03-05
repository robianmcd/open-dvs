import {DeckId} from "../app/app.component";
import {ActiveSong} from "./activeSong";
import {AudioUtil} from "./audio/audioUtil.service";
import {Injectable} from "@angular/core";
import {AudioSettings} from "../app/sideNav/audioSettings/audioSettings.service";
import {DspUtil} from "./audio/dspUtil.service";
import {Resampler} from "./audio/resampler.service";

@Injectable()
export class ActiveSongs {
    private activeSongByDeckId = new Map<DeckId, ActiveSong>();

    constructor(audioUtil: AudioUtil, audioSettings: AudioSettings, dspUtil: DspUtil, resampler: Resampler) {
        this.activeSongByDeckId.set(
            DeckId.LEFT,
            new ActiveSong(DeckId.LEFT, audioUtil, audioSettings.getDeckAudioSettings(DeckId.LEFT), dspUtil, resampler)
        );
        this.activeSongByDeckId.set(
            DeckId.RIGHT,
            new ActiveSong(DeckId.RIGHT, audioUtil, audioSettings.getDeckAudioSettings(DeckId.RIGHT), dspUtil, resampler)
        );
    }

    getActiveSong(deckId: DeckId) {
        return this.activeSongByDeckId.get(deckId);
    }
}