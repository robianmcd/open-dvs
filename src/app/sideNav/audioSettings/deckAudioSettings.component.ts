import {Component, Input, OnInit} from '@angular/core';
import {AudioUtil} from "../../../services/audioUtil";
import {DeckId} from "../../app.component";
import {DeckAudioSettings, AudioSettings} from "./audioSettings.service";

@Component({
    selector: 'deck-audio-settings',
    templateUrl: 'deckAudioSettings.component.html',
    styleUrls: ['deckAudioSettings.component.scss']
})
export class DeckAudioSettingsComponent implements OnInit {
    @Input() deckId: DeckId;
    deckAudioSettings: DeckAudioSettings;

    deckNames = {
        [DeckId.LEFT]: 'A',
        [DeckId.RIGHT]: 'B'
    };

    constructor(public audioUtil: AudioUtil, private audioSettings: AudioSettings) {

    }

    ngOnInit() {
        this.deckAudioSettings = this.audioSettings.getDeckAudioSettings(this.deckId);
    }
}