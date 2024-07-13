import {movieApi} from "@/components/vm/MovieApi";
import MovieLayout from "@/app/movie/MovieLayout";

type Props = {
    params: {},
    searchParams: { s: string }
}

export default async function MoviePage(searchParams: Props) {
    // console.log('searchParams', searchParams)
    const value = searchParams.searchParams.s
    const result = await movieApi.searchMovie(value ?? 'American')
    console.log('rawResult', result)
    return (
        <MovieLayout movies={result}/>
    )
}