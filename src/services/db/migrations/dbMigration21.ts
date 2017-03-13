import {SongDetails} from "../../../models/songDetails";
import {Db} from "../db.service";

export function dbMigration21(db: IDBDatabase) {
    let getAlbumCoversTransaction = db.transaction(['songDetails'], Db.READWRITE_TRANSACTION);
    let getSongCursor = getAlbumCoversTransaction.objectStore('songDetails').openCursor();

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