import {Injectable} from '@angular/core';
import {dbMigration1} from "./migrations/dbMigration1";
import {dbMigration20} from "./migrations/dbMigration20";

@Injectable()
export class Db {

    static READONLY_TRANSACTION = 'readonly';
    static READWRITE_TRANSACTION = 'readwrite';
    static DB_VERSION = 20;

    dbInitialized: Promise<IDBDatabase>;
    private db: IDBDatabase;
    private resolveInitialized: (db: IDBDatabase) => void;
    private rejectInitialized: (rejection?) => void;

    constructor() {
        this.dbInitialized = new Promise((resolve, reject) => {
            this.resolveInitialized = resolve;
            this.rejectInitialized = reject;
        });
    }

    static reqToPromise(req: IDBRequest): Promise<any> {
        return new Promise((resolve, reject) => {
            req.onsuccess = resolve;
            req.onerror = reject;
        });
    }

    static arrayBufferToBase64(buffer) {
        let binary = '';
        let bytes = new Uint8Array(buffer);
        let len = bytes.byteLength;
        for (let i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        return btoa(binary);
    }

    initialize() {
        let openRequest = indexedDB.open('dvs', Db.DB_VERSION);

        let oldVersion;

        openRequest.onupgradeneeded = function (versionEvent: IDBVersionChangeEvent) {
            oldVersion = versionEvent.oldVersion;
        };

        openRequest.onsuccess = (event) => {
            this.db = event.target['result'];

            if(oldVersion < 1) {
                dbMigration1(this.db);
            }

            if(oldVersion >= 1 && oldVersion < 20) {
                dbMigration20(this.db);
            }

            this.resolveInitialized(this.db);
        };

        openRequest.onerror = this.rejectInitialized;

        return this.dbInitialized;
    }

}