import {db} from "@/db/db";
import {count, eq} from "drizzle-orm";
import {product_idioms, product_xiehouyu, ProductXiehouyu} from "@/db/schema";
import {getRandomInt} from "@/components/service/RandomUtils";
import {XiehouyuLayout} from "@/app/study/xiehouyu/XiehouyuLayout";

export default async function Page() {

    const cc = await db.select({count: count()}).from(product_xiehouyu)
    const result = await db.query.product_xiehouyu.findMany({
        where: eq(product_idioms.id, getRandomInt(cc[0].count)),
        limit: 1
    })
    const item = result.findLast(() => true) as ProductXiehouyu

    return (
        <XiehouyuLayout props={item}/>
    )
}