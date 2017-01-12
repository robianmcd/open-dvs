import {SongDetails, SongDetailsDraft} from "../models/songDetails";
import {BehaviorSubject} from "rxjs/BehaviorSubject"
import {Observable} from "rxjs/Observable";
import {Song} from "../models/song";

export class Db {
    dbInitialized: Promise<IDBDatabase>;
    db: IDBDatabase;

    private allSongDetails$ = new BehaviorSubject<SongDetails[]>([]);

    constructor() {
        this.dbInitialized = new Promise((resolve, reject) => {
            let openRequest = indexedDB.open('dvs', 1);

            openRequest.onupgradeneeded = function (e) {
                let db = e.target['result'];

                if (!db.objectStoreNames.contains('songDetails')) {
                    db.createObjectStore('songDetails', {autoIncrement: true, keyPath: 'id'});
                }

                if (!db.objectStoreNames.contains('songBuffer')) {
                    db.createObjectStore('songBuffer');
                }
            };

            openRequest.onsuccess = (event) => {
                this.db = event.target['result'];

                let getMetadataTransaction = this.db.transaction(['songDetails'], 'readonly');
                let getMetadataCursor = getMetadataTransaction.objectStore('songDetails').openCursor();

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
        let songDetailsDraft: SongDetailsDraft = {title: undefined, lengthSeconds};
        let songDetails: SongDetails;

        if (tags) {
            let parsedTrack = parseInt(tags.track);
            let parsedYear = parseInt(tags.year);

            songDetailsDraft.title = tags.title;
            songDetailsDraft.album = tags.album;
            songDetailsDraft.artist = tags.artist;
            songDetailsDraft.genre = tags.genre;
            !isNaN(parsedTrack) && (songDetailsDraft.track = parsedTrack);
            !isNaN(parsedYear) && (songDetailsDraft.year = parsedYear);

            if (tags.picture) {
                songDetailsDraft.picFormat = tags.picture.format;
                songDetailsDraft.base64Pic = btoa(String.fromCharCode(...(<any> new Uint8Array(tags.picture.data))));
            }
        }

        if (!songDetailsDraft.title) {
            songDetailsDraft.title = fileName;
        }

        let addTransaction = this.db.transaction(['songDetails', 'songBuffer'], 'readwrite');

        this.reqToPromise(
            addTransaction
                .objectStore('songDetails')
                .add(songDetailsDraft)
        )
            .then((e: Event) => {
                let id = e.target['result'];
                songDetails = Object.assign({}, songDetailsDraft, {id: id});
                return id;
            })
            .then((id) => {
                return this.reqToPromise(
                    addTransaction
                        .objectStore('songBuffer')
                        .add(arrayBuffer, id)
                );
            })
            .then(() => {
                this.allSongDetails$.next([...this.allSongDetails$.getValue(), songDetails]);
            });
    }

    deleteSong(songDetails: SongDetails) {
        let deleteTransaction = this.db.transaction(['songDetails', 'songBuffer'], 'readwrite');
        let deleteDetailsReq = deleteTransaction.objectStore('songDetails').delete(songDetails.id);
        let deleteBufferReq = deleteTransaction.objectStore('songBuffer').delete(songDetails.id);

        Promise.all([this.reqToPromise(deleteDetailsReq), this.reqToPromise(deleteBufferReq)])
            .then(() => {
                let currentDetails = this.allSongDetails$.getValue();
                let filteredDetails = currentDetails.filter(d => d.id !== songDetails.id);
                this.allSongDetails$.next(filteredDetails);
            });
    }

    getSong(songDetails: SongDetails): Promise<Song> {
        return this.reqToPromise(
            this.db.transaction(['songBuffer'], 'readonly')
                .objectStore('songBuffer')
                .get(songDetails.id)
        )
            .then((bufferEvent: Event) => {
                return new Song({details: songDetails, buffer: bufferEvent.target['result']});
            });

    }

    reqToPromise(req: IDBRequest): Promise<any> {
        return new Promise((resolve, reject) => {
            req.onsuccess = resolve;
            req.onerror = reject;
        });
    }
}