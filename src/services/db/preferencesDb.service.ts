import {Injectable} from '@angular/core';
import {Db} from "./db.service";
import {Preferences} from "./preferences";
import {MidiMapping} from "../midiMapper.service";
import {AudioSettingsDbFormat} from "../../app/sideNav/audioSettings/audioSettings.service";

@Injectable()
export class PreferencesDb {
    initialized: Promise<any>;

    private db: IDBDatabase;
    private preferences: Preferences;

    constructor(dbService: Db) {
        let resolveInitialized;
        let rejectInitialized;

        this.initialized = new Promise((resolve, reject) => {
            resolveInitialized = resolve;
            rejectInitialized = reject;
        });

        dbService.dbInitialized.then((db) => {
            this.db = db;

            this.preferences = new Preferences();

            let prefCursor = this.db.transaction(['preferences'], Db.READONLY_TRANSACTION)
                .objectStore('preferences')
                .openCursor();

            prefCursor.onsuccess = (e) => {
                let cursor: IDBCursorWithValue = e.target['result'];
                if (cursor) {
                    if (!(<string>cursor.key in this.preferences)) {
                        console.warn('Found preference key in DB that does not exist in preference model: ' + cursor.key);
                    }

                    this.preferences[<string>cursor.key] = cursor.value;
                    cursor.continue();

                    //Called after all entries have been processed
                } else {
                    resolveInitialized();
                }
            };
        });
    }

    setCrossfaderCurveSharpness(value: number) {
        return this.setPreference('crossfaderCurveSharpness', value);
    }

    getCrossfaderCurveSharpness(): number {
        return this.preferences.crossfaderCurveSharpness;
    }

    getEnabledMidiInputNames() {
        return this.preferences.enabledMidiInputNames;
    }

    setEnabledMidiInputNames(inputs: Set<string>) {
        return this.setPreference('enabledMidiInputNames', inputs);
    }

    getEnabledMidiOutputNames() {
        return this.preferences.enabledMidiOutputNames;
    }

    setEnabledMidiOutputNames(outputs: Set<string>) {
        return this.setPreference('enabledMidiOutputNames', outputs);
    }

    getMidiMappings(): Map<string, MidiMapping> {
        return this.preferences.midiMappings;
    }

    setMidiMappings(mappings: Map<string, MidiMapping>) {
        return this.setPreference('midiMappings', mappings);
    }

    getAudioSettings(): AudioSettingsDbFormat {
        return this.preferences.audioSettings;
    }

    setAudioSettings(settings: AudioSettingsDbFormat) {
        return this.setPreference('audioSettings', settings);
    }


    private setPreference(key: string, value) {
        this.preferences[key] = value;

        return Db.reqToPromise(
            this.db.transaction(['preferences'], Db.READWRITE_TRANSACTION)
                .objectStore('preferences')
                .put(value, key)
        );
    }
}