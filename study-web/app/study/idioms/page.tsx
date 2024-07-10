import IdiomsLayoutDetails from "@/app/study/idioms/IdiomsLayoutDetails";
import {db} from "@/db/db";
import {product_idioms, ProductIdiom} from "@/db/schema";
import React from "react";
import {count, eq} from "drizzle-orm";

export default async function IdiomsLayout() {
    const getRandomInt = (max: number) => {
        return Math.floor(Math.random() * max);
    }
    const cc = await db.select({count: count()}).from(product_idioms)
    const result = await db.query.product_idioms.findMany({
        where: eq(product_idioms.id, getRandomInt(cc[0].count)),
        limit: 1
    })
    const item = result.findLast(() => true) as ProductIdiom
    console.log('IdiomsLayout::', cc[0])
    if (!item || item.word == null) return (
        <></>
    )

    console.log('IdiomsLayout refresh????')
    return (
        <>
            <IdiomsLayoutDetails props={item}/>
        </>

    )
}
