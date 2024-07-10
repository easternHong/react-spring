"use server"
import {revalidatePath} from "next/cache"

const clearCachesByServerAction = (path: string) => {
    try {
        console.log('hello', path)
        if (path) {
            revalidatePath(path)
        } else {
            revalidatePath("/")
            revalidatePath("/[lang]")
        }
    } catch (error) {
        console.error("clearCachesByServerAction=> ", error)
    }
}
export default clearCachesByServerAction