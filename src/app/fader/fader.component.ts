import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
    selector: 'fader',
    templateUrl: 'fader.component.html',
    styleUrls: ['fader.component.css']
})
export class FaderComponent {
    //Should be unique
    @Input() name;
    @Input() value;
    @Output() change = new EventEmitter();

    maxValue = 1.2;

    constructor() {

    }
}