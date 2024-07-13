'use client'
import {MagnifyingGlassIcon} from "@radix-ui/react-icons";
import {usePathname, useRouter} from "next/navigation";
import {MovieModel, MovieResult} from "@/components/model/MovieModel";

export function Search(placeholder: { placeholder: string, className: string }) {
    const router = useRouter()
    const pathname = usePathname()

    function handleSearch(term: string) {
        if (term.length == 0) return
        const out = pathname + '?s=' + term
        console.log(term, out);
        router.push(out)
    }

    return (
        <div
            className='relative flex flex-1 flex-shrink-0 h-12 w-1/4 mx-auto justify-center items-center content-center'>
            <label htmlFor="search" className="sr-only">
                Search
            </label>
            <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 text-gray-700"
                placeholder={placeholder.placeholder}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        handleSearch(e.target.value)
                    }
                }}
            />
            <MagnifyingGlassIcon
                className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>
        </div>
    );
}

export default function MovieLayout(movies: { movies: MovieResult }) {
    const json = movies.movies.Search
    const router = useRouter()

    function handleOpenDetails(item: MovieModel) {
        console.log('item', item)
        router.push('movie/' + item.imdbID)
    }

    return (
        <div className={'mt-10 h-full w-full'}>
            <Search placeholder={'American'} className={' '}/>
            {!json && <div className={'pl-2 pr-2 items-center justify-center mt-10 m-auto w-fit '}>
                没有结果
            </div>}
            {json && <div className={'pl-2 pr-2 items-center justify-center mt-10 m-auto w-fit grid grid-cols-3 gap-3'}>
                {
                    json.map((item: MovieModel, index: number) =>
                        <div key={index} className={'shadow rounded border-2 m-auto hover:border-amber-500'}
                             onClick={() => {
                                 handleOpenDetails(item)
                             }}>
                            <img alt={'poster'} src={item.Poster}/>
                            <span className={'text-1xl text-red-600 font-bold'}>{item.Title}</span>
                            {/*<span className={'text-2xl text-red-600 font-bold'}> #{item.Year}</span>*/}
                        </div>
                    )
                }
            </div>}
        </div>
    )
}