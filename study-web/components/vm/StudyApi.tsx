// import {db} from "@/db/db";

// import {db} from "@/db/db";
// import {ProductIdiom} from "@/db/schema";

export class StudyApi {

    private baseUrl: string = "http://localhost:8080"

    private defaultInit: RequestInit = {
        mode: 'cors',
        credentials: "same-origin",
        headers: {
            "Accept": "application/json"
        }
    }


    randIdioms = async () => {
        // return await db.query.product_idioms.findFirst() as ProductIdiom
        return {}
    }
    randomIdioms = async () => {
        const ret = await fetch(this.baseUrl + '/study/idioms/random', this.defaultInit)
        return await ret.json()
    }
    randomXiehouyu = async () => {
        const ret = await fetch(this.baseUrl + '/study/xiehouyu/random', this.defaultInit)
        return await ret.json()
    }
}