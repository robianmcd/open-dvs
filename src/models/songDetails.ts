export interface SongDetails extends SongDetailsDraft {
    id: number,
}

export interface SongDetailsDraft extends WaveformDetails {
    title: string,
    album?: string,
    artist?: string,
    track?: number,
    year?: number,
    genre?: string,
    albumDataUrl?: string,
    lengthSeconds: number,
    waveformDataUrl: string
}

export interface WaveformDetails {
    positiveSamples: number[],
    negativeSamples: number[],
    numSamples: number
}