import { Injectable } from '@angular/core';
import {Db} from "./db.service";

@Injectable()
export class PreferencesDb {
    db: IDBDatabase;

    constructor(dbService: Db) {
        dbService.dbInitialized.then((db) => {
            this.db = db;

            //TODO: preload all preferences
        });
    }

    setCrossfaderCurveSharpness(value: number) {

    }

    getCrossfaderCurveSharpness(): number {
        return 0;
    }

    getEnabledMidiDevices() {

    }

    setEnabledMidiDevices() {

    }

    getMidiMappings() {

    }

    setMidiMappings() {

    }

    //get/set audio inputs and outputs
}