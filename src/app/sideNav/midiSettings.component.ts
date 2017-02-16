import {Component} from '@angular/core';
import {MidiIo} from "../../services/midiIo.service";

@Component({
    selector: 'midi-settings',
    templateUrl: 'midiSettings.component.html',
    styleUrls: ['midiSettings.component.css']
})
export class MidiSettingsComponent {
    constructor(public midiIo: MidiIo) {

    }

    getDeviceName(device) {
        return device.name;
    }
}