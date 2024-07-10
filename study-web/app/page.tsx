import {like} from "drizzle-orm";
import {db} from "@/db/db";
import {product_idioms} from "@/db/schema";


export default async function Home() {
    await db.query.product_idioms.findMany({
        where: like(product_idioms.pinyin, '%y%')
    })
        .then((res) => {
            console.log('res', res.length)
        })
        .catch((err) => {
            console.log('err', err)
        })
    return (
        <div className='h-screen block overflow-auto w-full bg-gray-100 relative'>
            {/*<Header/>*/}
        </div>
    )
}
