export interface SongDetails {
    id: string,
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