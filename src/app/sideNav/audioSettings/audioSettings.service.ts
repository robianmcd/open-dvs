import { Injectable } from '@angular/core';
import {DeckId} from "../../app.component";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable()
export class AudioSettings {
    private deckSettings = new Map<DeckId, DeckAudioSettings>();

    constructor() {
        this.deckSettings.set(DeckId.LEFT, new DeckAudioSettings());
        this.deckSettings.set(DeckId.RIGHT, new DeckAudioSettings());
    }

    getDeckAudioSettings(deckId: DeckId) {
        return this.deckSettings.get(deckId);
    }
}

export class DeckAudioSettings {
    private liveInLeft: MediaDeviceInfo;
    private liveInRight: MediaDeviceInfo;
    private controlInLeft: MediaDeviceInfo;
    private controlInRight: MediaDeviceInfo;

    private liveIn = new BehaviorSubject<StereoDevices>({});
    private controlIn = new BehaviorSubject<StereoDevices>({});

    get liveIn$(): Observable<StereoDevices> {
        return this.liveIn.asObservable();
    }

    get controlIn$(): Observable<StereoDevices> {
        return this.controlIn.asObservable();
    }

    setLiveInLeft(device: MediaDeviceInfo) {
        this.liveInLeft = device;
        this.liveIn.next({left: device, right: this.liveInRight});
    }

    setLiveInRight(device: MediaDeviceInfo) {
        this.liveInRight = device;
        this.liveIn.next({left: this.liveInLeft, right: device});
    }

    setControlInLeft(device: MediaDeviceInfo) {
        this.controlInLeft = device;
        this.controlIn.next({left: device, right: this.controlInRight});
    }

    setControlInRight(device: MediaDeviceInfo) {
        this.controlInRight = device;
        this.controlIn.next({left: this.controlInLeft, right: device});
    }
}

export interface StereoDevices {
    left?: MediaDeviceInfo;
    right?: MediaDeviceInfo;
}