import {format} from "node:util";
import {MovieResult} from "@/components/model/MovieModel";

class MovieApi {
    private baseUrl = `http://www.omdbapi.com?%s`

    newParameters() {
        const searchParams = new URLSearchParams();
        searchParams.append('apikey', process.env.NEXT_PUBLIC_MOVIE_KEY!);
        return searchParams
    }

    assembleUrl(key: string, value: string): URLSearchParams {
        const searchParams = new URLSearchParams();
        searchParams.append(key, value);
        return searchParams // "type=all&query=coins"
    }

    async searchMovie(search: string) {
        const param = this.newParameters()
        param.append('s', search);
        const url = format(this.baseUrl, param.toString())
        console.log('movieKey url', url)
        const response = await fetch(url)
        return await response.json() as MovieResult
    }


    //{
    //   "Title": "Guardians of the Galaxy Vol. 2",
    //   "Year": "2017",
    //   "Rated": "PG-13",
    //   "Released": "05 May 2017",
    //   "Runtime": "136 min",
    //   "Genre": "Action, Adventure, Comedy",
    //   "Director": "James Gunn",
    //   "Writer": "James Gunn, Dan Abnett, Andy Lanning",
    //   "Actors": "Chris Pratt, Zoe Saldana, Dave Bautista",
    //   "Plot": "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father, the ambitious celestial being Ego.",
    //   "Language": "English",
    //   "Country": "United States",
    //   "Awards": "Nominated for 1 Oscar. 15 wins & 60 nominations total",
    //   "Poster": "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
    //   "Ratings": [
    //     {
    //       "Source": "Internet Movie Database",
    //       "Value": "7.6/10"
    //     },
    //     {
    //       "Source": "Rotten Tomatoes",
    //       "Value": "85%"
    //     },
    //     {
    //       "Source": "Metacritic",
    //       "Value": "67/100"
    //     }
    //   ],
    //   "Metascore": "67",
    //   "imdbRating": "7.6",
    //   "imdbVotes": "764,992",
    //   "imdbID": "tt3896198",
    //   "Type": "movie",
    //   "DVD": "N/A",
    //   "BoxOffice": "$389,813,101",
    //   "Production": "N/A",
    //   "Website": "N/A",
    //   "Response": "True"
    // }
    async searchMovieDetail(i: string) {
        // console.log('movieKey', process.env.NEXT_PUBLIC_MOVIE_KEY)
        const param = this.newParameters()
        param.append('i', i);
        const url = format(this.baseUrl, param.toString())
        console.log('movieKey url', url)
        const response = await fetch(url)
        return await response.json()
    }
}

export const movieApi = new MovieApi()