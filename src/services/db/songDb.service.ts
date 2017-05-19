import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Observable} from "rxjs/Observable";
import {Song} from "../../models/song";
import {SongDetails, SongDetailsDraft} from "../../models/songDetails";
import {WaveformUtil} from "../audio/waveformUtil.service";
import {ThemeId} from "../../app/app.component";
import {Db} from "./db.service";
import {AudioUtil} from "../audio/audioUtil.service";
import {ImageUtil} from '../imageUtil.service';

@Injectable()
export class SongDb {
    db: IDBDatabase;

    private allSongDetails$ = new BehaviorSubject<SongDetails[]>([]);

    constructor(dbService: Db, private waveformUtil: WaveformUtil, private audioUtil: AudioUtil, private imageUtil: ImageUtil) {
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

    updateSongDetails(details: SongDetails) {
        let updateTransaction = this.db.transaction(['songDetails'], Db.READWRITE_TRANSACTION);

        return Db.reqToPromise(
            updateTransaction
                .objectStore('songDetails')
                .put(details)
        );
    }

    //TODO: figure out why this locks up the browser
    addSong(arrayBuffer: ArrayBuffer, audioBuffer: AudioBuffer, tags, fileName: string): Promise<void> {
        //setInterval(() => console.log('tick'));
        console.log('adding song', performance.now());
        let songDetails: SongDetails;
        let songDetailsDraft: SongDetailsDraft = {
            title: undefined,
            lengthSeconds: audioBuffer.duration,
            positiveSamples: undefined,
            negativeSamples: undefined,
            numSamples: undefined,
            waveformDataUrl: undefined,
            cues: []
        };
        let addTransaction: IDBTransaction;
        let waveformData;

        return this.waveformUtil.getWaveformData(audioBuffer)
            .then((waveformDataResult: any) => {
                waveformData = waveformDataResult;
                songDetailsDraft.positiveSamples = waveformData.positiveSamples;
                songDetailsDraft.negativeSamples = waveformData.negativeSamples;
                songDetailsDraft.numSamples = waveformData.numSamples;

                console.log('got the waveform', performance.now());
                songDetailsDraft.waveformDataUrl = this.waveformUtil.generateDataUrlWaveform(
                    waveformData.positiveSamples,
                    waveformData.negativeSamples,
                    this.audioUtil.context.sampleRate,
                    150,
                    35,
                    ThemeId.DEFAULT,
                    [],
                    0,
                    0
                );


                console.log('generated waveform dataurl', performance.now());

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
                        return this.imageUtil.byteArrayToBase64(tags.picture.data)
                            .then((base64Album) => this.resizeBase64Img(tags.picture.format, base64Album, 100, 100))
                            .then(albumDataUrl => (songDetailsDraft.albumDataUrl = albumDataUrl));
                    }
                }
            })
            .then(() => {
                if (!songDetailsDraft.title) {
                    songDetailsDraft.title = fileName;
                }

                addTransaction = this.db.transaction(['songDetails', 'songBuffer'], Db.READWRITE_TRANSACTION);

                return Db.reqToPromise(
                    addTransaction
                        .objectStore('songDetails')
                        .add(songDetailsDraft)
                )
            })
            .then((e: Event) => {
            console.log('done adding to indexed db', performance.now());
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
            console.log('done saving song buffer in indexed db', performance.now());
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

    //based on http://stackoverflow.com/a/20965997/373655
    resizeBase64Img(type: string, base64: string, maxWidth: number, maxHeight: number): Promise<string> {
        return new Promise((resolve) => {
            let img = new Image;

            img.onload = resizeImage;
            img.src = `data:${type};base64,${base64}`;

            function resizeImage() {
                let targetWidth = img.width;
                let targetHeight = img.height;

                if (img.width > maxWidth) {
                    targetWidth = maxWidth;
                    targetHeight = img.height / (img.width / maxWidth);
                }

                if (targetHeight > maxHeight) {
                    targetHeight = maxHeight;
                    targetWidth = img.width / (img.height / maxHeight);
                }
                resolve(imageToDataUri(img, targetWidth, targetHeight));
            }

            function imageToDataUri(img, width, height) {

                // create an off-screen canvas
                let canvas = document.createElement('canvas'),
                    ctx = canvas.getContext('2d');

                // set its dimension to target size
                canvas.width = width;
                canvas.height = height;

                // draw source image into the off-screen canvas:
                ctx.drawImage(img, 0, 0, width, height);

                // encode image to data-uri with base64 version of compressed image
                return canvas.toDataURL('image/jpeg', 0.8);
            }
        });
    }
}