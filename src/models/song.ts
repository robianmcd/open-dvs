import {SongDetails} from "./songDetails";
export class Song {
    details: SongDetails;
    buffer: ArrayBuffer;

    constructor({details, buffer}: {details: SongDetails, buffer: ArrayBuffer}) {
        this.details = details;
        this.buffer = buffer;
    }
}