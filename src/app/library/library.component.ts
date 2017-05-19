import {Component, EventEmitter, Output} from "@angular/core";
import {AudioUtil} from "../../services/audio/audioUtil.service";
import {SongDb} from "../../services/db/songDb.service";
import {SongDetails} from "../../models/songDetails";
import {Observable} from "rxjs/Observable";
import {Song} from "../../models/song";
import {DeckId} from "../app.component";
import firstBy from "thenby";
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {FormatTimePipe} from '../../pipes/formatTime.pipe';

declare let jsmediatags;

@Component({
    selector: 'library',
    templateUrl: 'library.component.html',
    styleUrls: ['library.component.css']
})
export class LibraryComponent {
    fileIsOverDrop = false;

    uploadingFiles = false;
    totalFilesToUpload;
    numFilesUploaded;

    filteredSongDetails: Observable<SongDetails[]>;
    DeckId = DeckId;
    @Output() onLoadSong = new EventEmitter<LoadSongEvent>();

    searchInput = new BehaviorSubject('').distinctUntilChanged();

    constructor(private audioUtil: AudioUtil, private songDb: SongDb, private formatTimePipe: FormatTimePipe) {
        let allSongDetails = this.songDb.getAllSongDetails()
            .map((songDetails: SongDetails[]) => {
                return songDetails.sort(
                    firstBy('artist', {ignoreCase: true})
                        .thenBy('year')
                        .thenBy('album', {ignoreCase: true})
                        .thenBy('track')
                );
            });

        this.filteredSongDetails = Observable.combineLatest(
            allSongDetails,
            this.searchInput,
            (details, input) => this.filterSongDetails(details, input)
        );
    }
    
    public onFileOverDrop(fileIsOver: boolean): void {
        this.fileIsOverDrop = fileIsOver;
    }

    public uploadFiles(files: File[]): void {
        this.uploadingFiles = true;
        this.totalFilesToUpload = files.length;
        this.numFilesUploaded = 0;

        //For each file...
        //  Read media tags
        //  Read as audio buffer
        //  Add to song db
        //  Update progress bar
        let loadFilePromises = files.map((file) => {
            let readMediaTagsPromise = new Promise((resolve) => {
                jsmediatags.read(file, {
                    onSuccess: (result) => resolve(result.tags),
                    onError: (error) => resolve(null)
                });
            });

            let arrayBuffer: ArrayBuffer;
            let readAudioBufferPromise = this.readAsArrayBuffer(file)
                .then(buf => {
                    arrayBuffer = buf;
                    return this.audioUtil.context.decodeAudioData(buf);
                });

            return Promise.all([readAudioBufferPromise, readMediaTagsPromise])
                .then(([audioBuffer, tags]: [AudioBuffer, any]) => {
                    return this.songDb.addSong(arrayBuffer, audioBuffer, tags, file.name);
                })
                .then(() => {
                    this.numFilesUploaded++;
                });
        });

        let onUploadingFinished = () => {
            this.uploadingFiles = false;
            this.totalFilesToUpload = undefined;
            this.numFilesUploaded = undefined;
        };

        Promise.all(loadFilePromises)
            .then(onUploadingFinished)
            .catch((error) => {
                console.error('Failed to upload songs', error);
                onUploadingFinished();
            });
    }

    public deleteSong(songDetails: SongDetails) {
        this.songDb.deleteSong(songDetails);
    }

    public loadSong(songDetails, deckId) {
        this.songDb.getSong(songDetails)
            .then((song: Song) => {
                this.onLoadSong.emit({song, deckId});
            });
    }

    public getLoadingMessage() {
        if(this.totalFilesToUpload > 1) {
            return `Loading ${this.numFilesUploaded} of ${this.totalFilesToUpload}`;
        } else {
            return 'Loading';
        }
    }

    private readAsArrayBuffer(file): Promise<ArrayBuffer> {
        let arrayBuffer: ArrayBuffer;

        return new Promise<ArrayBuffer>((resolve, reject) => {
            let reader = new FileReader();
            reader.readAsArrayBuffer(file);
            reader.onload = () => {
                arrayBuffer = reader.result;
                resolve(reader.result);
            };
            reader.onerror = reject;
        });
    }

    private filterSongDetails(allSongDetails, searchInput): SongDetails[] {
        searchInput = searchInput.trim();
        if(!searchInput) {
            return allSongDetails;
        }

        let searchTokens = searchInput.split(' ');

        return allSongDetails.filter((songDetails) => {
            let allTokensMatchReducer = (previousTokensMatch, token) => previousTokensMatch && this.songDetailsMatchesToken(songDetails, token);
            return searchTokens.reduce(allTokensMatchReducer, true);
        });
    }

    private songDetailsMatchesToken(songDetails: SongDetails, token: string): boolean {
        token = token.toLowerCase();
        for(let fieldKey in songDetails) {
            let field = songDetails[fieldKey];
            if(songDetails.hasOwnProperty(fieldKey) && field !== undefined) {
                let cmpStr: string;
                switch(fieldKey) {
                    case 'title':
                    case 'album':
                    case 'artist':
                    case 'track':
                    case 'year':
                    case 'genre':
                        cmpStr = field.toString();
                        break;
                    case 'lengthSeconds':
                        cmpStr = this.formatTimePipe.transform(field);
                        break;
                }

                if(cmpStr && cmpStr.toLowerCase().indexOf(token) !== -1) {
                    return true;
                }
            }
        }

        return false;
    }
}

export interface LoadSongEvent {
    song: Song,
    deckId: DeckId
}