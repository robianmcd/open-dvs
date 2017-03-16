import {SongDetails} from "../../../models/songDetails";

export function dbMigration21(db: IDBDatabase, transaction: IDBTransaction) {
    let getSongCursor = transaction.objectStore('songDetails').openCursor();

    getSongCursor.onsuccess = (e) => {
        let cursor: IDBCursorWithValue = e.target['result'];
        if (cursor) {
            let details: SongDetails = cursor.value;
            details.cues = details.cues || [];
            cursor.update(details);
            cursor.continue();
        }
    };
}