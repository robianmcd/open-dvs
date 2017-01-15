import {SongDetails} from "./songDetails";
export class Song {
    details: SongDetails;
    buffer: ArrayBuffer;
    waveformCompressed100x: number[];

    constructor({details, buffer, waveformCompressed100X}: {details: SongDetails, buffer: ArrayBuffer, waveformCompressed100X: number[]}) {
        this.details = details;
        this.buffer = buffer;
        this.waveformCompressed100x = waveformCompressed100X;
    }
}