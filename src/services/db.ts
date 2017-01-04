import {SongDetails} from "../models/songDetails";
import {BehaviorSubject} from "rxjs/BehaviorSubject"
import {Observable} from "rxjs/Observable";

export class Db {
    dbInitialized: Promise<IDBDatabase>;
    db: IDBDatabase;

    private metadata$ = new BehaviorSubject<SongDetails[]>([]);

    constructor() {
        this.dbInitialized = new Promise((resolve, reject) => {
            let openRequest = indexedDB.open('dvs', 1);

            openRequest.onupgradeneeded = function (e) {
                let db = e.target['result'];

                if (!db.objectStoreNames.contains('songMetadata')) {
                    db.createObjectStore('songMetadata', {autoIncrement: true});
                }

                if (!db.objectStoreNames.contains('songBuffer')) {
                    db.createObjectStore('songBuffer');
                }
            };

            openRequest.onsuccess = (event) => {
                this.db = event.target['result'];

                let getMetadataTransaction = this.db.transaction(['songMetadata'], 'readonly');
                let getMetadataCursor = getMetadataTransaction.objectStore('songMetadata').openCursor();

                let allMetadata = [];
                getMetadataCursor.onsuccess = (e) => {
                    let cursor = e.target['result'];
                    if (cursor) {
                        allMetadata.push(cursor.value);
                        cursor.continue();
                    }
                };

                getMetadataTransaction.oncomplete = (e) => {
                    this.metadata$.next(allMetadata);
                };

                resolve(this.db);
            };

            openRequest.onerror = reject;
        });
    }

    getAllSongDetails(): Observable<SongDetails[]> {
        return this.metadata$.asObservable();
    }

    addSong(arrayBuffer: ArrayBuffer, tags, fileName: string, lengthSeconds: number) {
        let metadata: SongDetails = {title: undefined, lengthSeconds};

        if (tags) {
            let parsedTrack = parseInt(tags.track);
            let parsedYear = parseInt(tags.year);

            metadata.title = tags.title;
            metadata.album = tags.album;
            metadata.artist = tags.artist;
            metadata.genre = tags.genre;
            !isNaN(parsedTrack) && (metadata.track = parsedTrack);
            !isNaN(parsedYear) && (metadata.year = parsedYear);

            if (tags.picture) {
                metadata.picFormat = tags.picture.format;
                metadata.base64Pic = btoa(String.fromCharCode(...(<any> new Uint8Array(tags.picture.data))));
            }
        }

        if (!metadata.title) {
            metadata.title = fileName;
        }

        let addTransaction = this.db.transaction(['songMetadata', 'songBuffer'], 'readwrite');

        return new Promise<number>((resolve, reject) => {
            let addMetadataRequest = addTransaction.objectStore('songMetadata').add(metadata);

            addMetadataRequest.onsuccess = (e) => {
                //Resolve with the ID of the newly created record
                resolve(e.target['result']);
            };

            addMetadataRequest.onerror = reject;
        })
            .then((id) => {
                return new Promise((resolve, reject) => {
                    let addBufferRequest = addTransaction
                        .objectStore('songBuffer')
                        .add(arrayBuffer, id);

                    addBufferRequest.onsuccess = resolve;
                    addBufferRequest.onerror = reject;
                });
            });
    }
}