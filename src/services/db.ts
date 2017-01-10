import {SongDetails} from "../models/songDetails";
import {BehaviorSubject} from "rxjs/BehaviorSubject"
import {Observable} from "rxjs/Observable";

export class Db {
    dbInitialized: Promise<IDBDatabase>;
    db: IDBDatabase;

    private allSongDetails$ = new BehaviorSubject<SongDetails[]>([]);

    constructor() {
        this.dbInitialized = new Promise((resolve, reject) => {
            let openRequest = indexedDB.open('dvs', 1);

            openRequest.onupgradeneeded = function (e) {
                let db = e.target['result'];

                if (!db.objectStoreNames.contains('songMetadata')) {
                    db.createObjectStore('songMetadata', {autoIncrement: true, keyPath: 'id'});
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

                getMetadataTransaction.oncomplete = () => {
                    this.allSongDetails$.next(allMetadata);
                };

                resolve(this.db);
            };

            openRequest.onerror = reject;
        });
    }

    getAllSongDetails(): Observable<SongDetails[]> {
        return this.allSongDetails$.asObservable();
    }

    addSong(arrayBuffer: ArrayBuffer, tags, fileName: string, lengthSeconds: number) {
        let songDetails: SongDetails = {title: undefined, id: undefined, lengthSeconds};

        if (tags) {
            let parsedTrack = parseInt(tags.track);
            let parsedYear = parseInt(tags.year);

            songDetails.title = tags.title;
            songDetails.album = tags.album;
            songDetails.artist = tags.artist;
            songDetails.genre = tags.genre;
            !isNaN(parsedTrack) && (songDetails.track = parsedTrack);
            !isNaN(parsedYear) && (songDetails.year = parsedYear);

            if (tags.picture) {
                songDetails.picFormat = tags.picture.format;
                songDetails.base64Pic = btoa(String.fromCharCode(...(<any> new Uint8Array(tags.picture.data))));
            }
        }

        if (!songDetails.title) {
            songDetails.title = fileName;
        }

        let addTransaction = this.db.transaction(['songMetadata', 'songBuffer'], 'readwrite');

        return new Promise<number>((resolve, reject) => {
            let addMetadataRequest = addTransaction.objectStore('songMetadata').add(songDetails);

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
            })
            .then(() => {
                this.allSongDetails$.next([...this.allSongDetails$.getValue(), songDetails]);
            });
    }

    deleteSong(songDetails: SongDetails) {
        //let deleteTransaction = this.db.transaction(['songMetadata', 'songBuffer'], 'readwrite');
        console.log(songDetails);
    }
}