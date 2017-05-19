import {Injectable} from "@angular/core";
import {dbMigration1} from "./migrations/dbMigration1";
import {dbMigration20} from "./migrations/dbMigration20";
import {dbMigration21} from "./migrations/dbMigration21";

@Injectable()
export class Db {

    static READONLY_TRANSACTION = 'readonly';
    static READWRITE_TRANSACTION = 'readwrite';
    static DB_VERSION = 21;

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

    static reqToPromise(req: IDBRequest): Promise<Event> {
        return new Promise((resolve, reject) => {
            req.onsuccess = resolve;
            req.onerror = reject;
        });
    }

    initialize() {
        let openRequest = indexedDB.open('dvs', Db.DB_VERSION);

        let oldVersion;

        openRequest.onupgradeneeded = function (versionEvent: IDBVersionChangeEvent) {
            let db = versionEvent.target['result'];
            let transaction: IDBTransaction = versionEvent.target['transaction'];
            oldVersion = versionEvent.oldVersion;


            if (oldVersion !== undefined) {
                if (oldVersion < 1) {
                    dbMigration1(db);
                }

                if (oldVersion >= 1 && oldVersion < 20) {
                    dbMigration20(db, transaction);
                }

                if (oldVersion >= 1 && oldVersion < 21) {
                    dbMigration21(db, transaction);
                }
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