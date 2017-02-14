import {Component, EventEmitter, Output} from "@angular/core";
import {AudioUtil} from "../../services/audioUtil";
import {SongDb} from "../../services/db/songDb.service";
import {SongDetails} from "../../models/songDetails";
import {Observable} from "rxjs/Observable";
import {Song} from "../../models/song";
import {DeckId} from "../app.component";

declare let jsmediatags;

@Component({
    selector: 'library',
    templateUrl: 'library.component.html',
    styleUrls: ['library.component.css']
})
export class LibraryComponent {
    fileIsOverDrop = false;
    uploadingFile = false;
    allSongDetails: Observable<SongDetails[]>;
    DeckId = DeckId;

    @Output() onLoadSong = new EventEmitter<LoadSongEvent>();

    constructor(private audioUtil: AudioUtil, private songDb: SongDb) {
        this.allSongDetails = this.songDb.getAllSongDetails();
    }

    public onFileOverDrop(fileIsOver: boolean): void {
        this.fileIsOverDrop = fileIsOver;
    }

    public uploadFile(file: File): void {
        this.uploadingFile = true;
        let arrayBuffer: ArrayBuffer;
        let readAsArrayBufferPromise = new Promise<ArrayBuffer>((resolve, reject) => {
            let reader = new FileReader();
            reader.readAsArrayBuffer(file);
            reader.onload = () => {
                arrayBuffer = reader.result;
                resolve(reader.result);
            };
            reader.onerror = reject;
        });

        let readAsAudioBufferPromise: Promise<AudioBuffer> = readAsArrayBufferPromise
            .then((arrayBuffer) => this.audioUtil.context.decodeAudioData(arrayBuffer));

        let readMediaTagsPromise = new Promise((resolve) => {
            jsmediatags.read(file, {
                onSuccess: (result) => resolve(result.tags),
                onError: (error) => resolve(null)
            });
        });

        Promise.all([readAsAudioBufferPromise, readMediaTagsPromise])
            .then(([audioBuffer, tags]: [AudioBuffer, any]) => {
                this.songDb.addSong(arrayBuffer, audioBuffer, tags, file.name);
                this.uploadingFile = false;
            })
            .catch((error) => {
                console.error(error);
                this.uploadingFile = false;
            });
    }

    deleteSong(songDetails: SongDetails) {
        this.songDb.deleteSong(songDetails);
    }

    loadSong(songDetails, deckId) {
        this.songDb.getSong(songDetails)
            .then((song: Song) => {
                this.onLoadSong.emit({song, deckId});
            });
    }
}

export interface LoadSongEvent {song: Song, deckId: DeckId
}