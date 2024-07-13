import {movieApi} from "@/components/vm/MovieApi";

type Props = {
    params: { id: string }
}
export default async function MovieDetails({params}: Props) {
    const imdbID = params.id
    const details = await movieApi.searchMovieDetail(imdbID)
    console.log('details', details)
    return (
        <div className={'h-full w-full bg-movie_bg'}>
            {!imdbID && <>not found</>}
            {imdbID && <div>
                <div className="container mx-auto p-4 md:p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <img
                            src={details.Poster}
                            alt={details.Title} className="rounded-lg shadow-lg w-full"/>
                        <div className="text-gray-100">
                            <h1 className="text-4xl font-bold mb-4">{details.Title}</h1>
                            <p className="mb-2">Release Date: {details.Released}</p>
                            <p className="mb-2">Rating: {details.Rating} | Runtime: {details.Runtime}</p>
                            <p className="mb-2">Director: {details.Director}</p>
                            <p className="mb-2">Main Cast: {details.Actors}</p>
                            <p className="mb-2">IMDb Rating: {details.imdbRating}</p>
                            <p className="mb-2">Awards: {details.Awards}</p>
                            <p className="mb-2">Box Office: {details.BoxOffice}</p>
                            <p className="mb-2">Language: {details.Language}</p>
                            <p className="mb-2">imdbID: {details.imdbID}</p>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    )
}