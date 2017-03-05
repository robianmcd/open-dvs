import {Injectable} from "@angular/core";
import {DeckId} from "../../app.component";
import {BehaviorSubject, Observable} from "rxjs";
import {PreferencesDb} from "../../../services/db/preferencesDb.service";
import {AudioUtil} from "../../../services/audio/audioUtil.service";

@Injectable()
export class AudioSettings {
    private deckSettings = new Map<DeckId, DeckAudioSettings>();

    constructor(private preferencesDb: PreferencesDb, audioUtil: AudioUtil) {
        let deckASettings = new DeckAudioSettings();
        let deckBSettings = new DeckAudioSettings();

        this.deckSettings.set(DeckId.LEFT, deckASettings);
        this.deckSettings.set(DeckId.RIGHT, deckBSettings);

        preferencesDb.initialized.then(() => {
            let audioSettings: AudioSettingsDbFormat = preferencesDb.getAudioSettings();
            audioUtil.inputDevices$.first().subscribe((inputDevices) => {
                deckASettings.setLiveIn(this.findDeviceById(inputDevices, audioSettings.input.deckA.liveDeviceId));
                deckASettings.setControlIn(this.findDeviceById(inputDevices, audioSettings.input.deckA.controlDeviceId));
                deckBSettings.setLiveIn(this.findDeviceById(inputDevices, audioSettings.input.deckB.liveDeviceId));
                deckBSettings.setControlIn(this.findDeviceById(inputDevices, audioSettings.input.deckB.controlDeviceId));

                deckASettings.liveIn$.subscribe(() => this.saveAudioSettings());
                deckASettings.controlIn$.subscribe(() => this.saveAudioSettings());
                deckBSettings.liveIn$.subscribe(() => this.saveAudioSettings());
                deckBSettings.controlIn$.subscribe(() => this.saveAudioSettings());
            });

        });
    }

    getDeckAudioSettings(deckId: DeckId) {
        return this.deckSettings.get(deckId);
    }

    private saveAudioSettings() {
        let deckAAudioSettings = this.deckSettings.get(DeckId.LEFT);
        let deckBAudioSettings = this.deckSettings.get(DeckId.RIGHT);

        this.preferencesDb.setAudioSettings({
            input: {
                deckA: {
                    liveDeviceId: deckAAudioSettings.getLiveIn() && deckAAudioSettings.getLiveIn().deviceId,
                    controlDeviceId: deckAAudioSettings.getControlIn() && deckAAudioSettings.getControlIn().deviceId
                },
                deckB: {
                    liveDeviceId: deckBAudioSettings.getLiveIn() && deckBAudioSettings.getLiveIn().deviceId,
                    controlDeviceId: deckBAudioSettings.getControlIn() && deckBAudioSettings.getControlIn().deviceId
                }
            }
        })
    }

    private findDeviceById(deviceList: MediaDeviceInfo[], id: string): MediaDeviceInfo {
        let matchingDevices = deviceList.filter(device => device.deviceId === id);
        if(matchingDevices.length) {
            return matchingDevices[0];
        }
    }
}

export class DeckAudioSettings {

    constructor() {

    }

    private liveIn = new BehaviorSubject<MediaDeviceInfo>(undefined);
    private controlIn = new BehaviorSubject<MediaDeviceInfo>(undefined);

    get liveIn$(): Observable<MediaDeviceInfo> {
        return this.liveIn.asObservable().distinctUntilChanged();
    }

    get controlIn$(): Observable<MediaDeviceInfo> {
        return this.controlIn.asObservable().distinctUntilChanged();
    }

    getLiveIn(): MediaDeviceInfo {
        return this.liveIn.getValue();
    }

    getControlIn(): MediaDeviceInfo {
        return this.controlIn.getValue();
    }

    setLiveIn(device: MediaDeviceInfo) {
        this.liveIn.next(device);
    }

    setControlIn(device: MediaDeviceInfo) {
        this.controlIn.next(device);
    }
}

export interface AudioSettingsDbFormat {
    input: {
        deckA: {
            controlDeviceId: string,
            liveDeviceId: string
        },
        deckB: {
            controlDeviceId: string,
            liveDeviceId: string
        }
    }
}