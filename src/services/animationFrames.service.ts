import {Subject} from "rxjs";
import {NgZone, Injectable} from "@angular/core";

@Injectable()
export class AnimationFrames {
    private framesSubject = new Subject();

    public frames = this.framesSubject.asObservable();

    constructor(ngZone: NgZone) {
        ngZone.runOutsideAngular(() => {
            requestAnimationFrame((time) => {
                this.onFrame(time)
            });
        });
    }

    private onFrame(time) {
        this.framesSubject.next(time);
        requestAnimationFrame((time) => {
            this.onFrame(time)
        });
    }
}