export type MovieResult = {
    Search: MovieModel[]
    totalResults: string,
    Response: string
}
export type MovieModel = {
    Title: string,
    Year: string,
    imdbID: string,
    Type: string,
    Poster: string,
}