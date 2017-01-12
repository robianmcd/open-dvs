export interface SongDetails extends SongDetailsDraft{
    id: number,
}

export interface SongDetailsDraft {
    title: string,
    album?: string,
    artist?: string,
    track?: number,
    year?: number,
    genre?: string,
    base64Pic?: string,
    picFormat?: string,
    lengthSeconds: number
}