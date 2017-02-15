import {Injectable} from '@angular/core';

@Injectable()
export class Db {

    static READONLY_TRANSACTION = 'readonly';
    static READWRITE_TRANSACTION = 'readwrite';

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
        let openRequest = indexedDB.open('dvs', 2);

        openRequest.onupgradeneeded = function (e) {
            let db = e.target['result'];

            if (!db.objectStoreNames.contains('songDetails')) {
                db.createObjectStore('songDetails', {autoIncrement: true, keyPath: 'id'});
            }

            if (!db.objectStoreNames.contains('songBuffer')) {
                db.createObjectStore('songBuffer');
            }

            if (!db.objectStoreNames.contains('preferences')) {
                db.createObjectStore('preferences');
            }
        };

        openRequest.onsuccess = (event) => {
            this.db = event.target['result'];
            this.resolveInitialized(this.db);
        };

        openRequest.onerror = this.rejectInitialized;

        return this.dbInitialized;
    }

}