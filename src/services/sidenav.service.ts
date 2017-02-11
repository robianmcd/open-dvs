import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable()
export class SideNav {
    private state = new BehaviorSubject(SideNavState.Closed);

    get state$() : Observable<SideNavState> {
        return this.state.asObservable();
    }

    constructor() {

    }

    setState(state: SideNavState) {
        this.state.next(state);
    }

    getState(): SideNavState {
        return this.state.getValue();
    }
}

export enum SideNavState {
    Closed, Audio, Midi
}