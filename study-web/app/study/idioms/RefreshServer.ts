"use server"
import {revalidatePath} from "next/cache"

const refreshServerSide = (path: string) => {
    console.log('refreshServerSide', path)
    try {
        if (path) {
            revalidatePath(path)
        } else {
            revalidatePath("/")
            revalidatePath("/[lang]")
        }
    } catch (error) {
        console.error("refreshServerSide=> ", error)
    }
}
export default refreshServerSide