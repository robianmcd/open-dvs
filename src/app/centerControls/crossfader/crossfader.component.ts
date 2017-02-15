import {Component, Output, EventEmitter} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {PreferencesDb} from "../../../services/db/preferencesDb.service";

@Component({
    selector: 'crossfader',
    templateUrl: 'crossfader.component.html',
    styleUrls: ['crossfader.component.css']
})
export class CrossfaderComponent {

    sliderValue = new BehaviorSubject(0.5);

    //0 represents an equal power fade
    //1 represents a scratch fade
    crossfaderCurveSharpness = new BehaviorSubject(0);

    @Output() change = new EventEmitter<CrossfaderChangeEvent>();

    constructor(private preferencesDb: PreferencesDb) {
        preferencesDb.initialized.then(() => {
            this.crossfaderCurveSharpness.next(preferencesDb.getCrossfaderCurveSharpness());
        });

        this.crossfaderCurveSharpness.subscribe(() => this.sendCrossfaderChange());
        this.sliderValue.subscribe(() => this.sendCrossfaderChange());
    }

    getGain(sliderValue, curveSharpness) {
        let equalPowerValue = Math.cos(sliderValue * Math.PI / 2);
        return Math.min(1, equalPowerValue * (curveSharpness * 19 + 1));
    }

    sendCrossfaderChange() {
        let sliderValue = this.sliderValue.getValue();
        let curveSharpness = this.crossfaderCurveSharpness.getValue();

        let leftGain = this.getGain(sliderValue, curveSharpness);
        let rightGain = this.getGain(1 - sliderValue, curveSharpness);
        this.change.emit({leftGain, rightGain});
    }

    setCurveSharpness(value: number) {
        this.preferencesDb.setCrossfaderCurveSharpness(value);
        this.crossfaderCurveSharpness.next(value);
    }
}

export interface CrossfaderChangeEvent {
    leftGain: number,
    rightGain: number
}