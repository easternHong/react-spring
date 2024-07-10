'use server'
import {StudyApi} from "@/components/vm/StudyApi";
import Words from "@/components/ui/Words";
import {revalidatePath} from "next/cache";
import {db} from "@/db/db";
import {like} from "drizzle-orm";
import {product_idioms} from "@/db/schema";

export const deleteCompleted = async (): Promise<void> => {
    // await prisma.todo.deleteMany({
    //     where: { complete: true },
    // });
    revalidatePath("/study/words");
};


export default async function Server() {
    const data = await db.query.product_idioms
        .findMany({
            where: like(product_idioms.pinyin, '%y%'),
            limit: 1
        })
    console.log('data', data.length)
    const studyApi = new StudyApi()
    const result = await studyApi.randomIdioms() as Chengyu
    return (
        <div className='content-center bg-blue-100 p-4 w-full'>
            词语中心
            <Words props={result}></Words>
        </div>
    )
}