import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject"
import {Observable} from "rxjs/Observable";
import {Song} from "../../models/song";
import {SongDetails, SongDetailsDraft} from "../../models/songDetails";
import {WaveformUtil} from "../audio/waveformUtil.service";
import {ThemeId} from "../../app/app.component";
import {Db} from "./db.service";

@Injectable()
export class SongDb {
    db: IDBDatabase;

    private allSongDetails$ = new BehaviorSubject<SongDetails[]>([]);

    constructor(dbService: Db, private waveformUtil: WaveformUtil) {
        dbService.dbInitialized.then((db) => {
            this.db = db;

            let getMetadataTransaction = this.db.transaction(['songDetails'], Db.READONLY_TRANSACTION);
            let getMetadataCursor = getMetadataTransaction.objectStore('songDetails').openCursor();

            let allMetadata = [];
            getMetadataCursor.onsuccess = (e) => {
                let cursor: IDBCursorWithValue = e.target['result'];
                if (cursor) {
                    allMetadata.push(cursor.value);
                    cursor.continue();
                }
            };

            getMetadataTransaction.oncomplete = () => {
                this.allSongDetails$.next(allMetadata);
            };
        });
    }

    getAllSongDetails(): Observable<SongDetails[]> {
        return this.allSongDetails$.asObservable();
    }

    addSong(arrayBuffer: ArrayBuffer, audioBuffer: AudioBuffer, tags, fileName: string) {
        let songDetails: SongDetails;
        let songDetailsDraft: SongDetailsDraft = {
            title: undefined,
            lengthSeconds: audioBuffer.duration,
            positiveSamples: undefined,
            negativeSamples: undefined,
            numSamples: undefined,
            waveformDataUrl: undefined
        };

        let waveformData = this.waveformUtil.getWaveformData(audioBuffer);
        songDetailsDraft.positiveSamples = waveformData.positiveSamples;
        songDetailsDraft.negativeSamples = waveformData.negativeSamples;
        songDetailsDraft.numSamples = waveformData.numSamples;

        songDetailsDraft.waveformDataUrl = this.waveformUtil.generateDataUrlWaveform(
            waveformData.positiveSamples,
            waveformData.negativeSamples,
            150,
            50,
            ThemeId.DEFAULT
        );

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
                songDetailsDraft.base64Pic = Db.arrayBufferToBase64(tags.picture.data);
                songDetailsDraft.picFormat = tags.picture.format;
            }
        }

        if (!songDetailsDraft.title) {
            songDetailsDraft.title = fileName;
        }

        let addTransaction = this.db.transaction(['songDetails', 'songBuffer'], Db.READWRITE_TRANSACTION);

        Db.reqToPromise(
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
                let songBuffer: SongBuffer = {
                    buffer: arrayBuffer,
                    waveformCompressed100X: waveformData.compress100X
                };

                return Db.reqToPromise(
                    addTransaction
                        .objectStore('songBuffer')
                        .add(songBuffer, id)
                );
            })
            .then(() => {
                this.allSongDetails$.next([...this.allSongDetails$.getValue(), songDetails]);
            });
    }

    deleteSong(songDetails: SongDetails) {
        let deleteTransaction = this.db.transaction(['songDetails', 'songBuffer'], Db.READWRITE_TRANSACTION);
        let deleteDetailsReq = deleteTransaction.objectStore('songDetails').delete(songDetails.id);
        let deleteBufferReq = deleteTransaction.objectStore('songBuffer').delete(songDetails.id);

        Promise.all([Db.reqToPromise(deleteDetailsReq), Db.reqToPromise(deleteBufferReq)])
            .then(() => {
                let currentDetails = this.allSongDetails$.getValue();
                let filteredDetails = currentDetails.filter(d => d.id !== songDetails.id);
                this.allSongDetails$.next(filteredDetails);
            });
    }

    getSong(songDetails: SongDetails): Promise<Song> {
        return Db.reqToPromise(
            this.db.transaction(['songBuffer'], Db.READONLY_TRANSACTION)
                .objectStore('songBuffer')
                .get(songDetails.id)
        )
            .then((bufferEvent: Event) => {
                let songBuffer: SongBuffer = bufferEvent.target['result'];
                return new Song({
                    details: songDetails,
                    buffer: songBuffer.buffer,
                    waveformCompressed100X: songBuffer.waveformCompressed100X
                });
            });
    }
}