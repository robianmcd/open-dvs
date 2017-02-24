import {Component} from '@angular/core';
import {DeckId} from '../../app.component'

@Component({
    selector: 'audio-settings',
    templateUrl: 'audioSettings.component.html',
    styleUrls: ['audioSettings.component.css']
})
export class AudioSettingsComponent {
    DeckId = DeckId;
    constructor() {

    }
}