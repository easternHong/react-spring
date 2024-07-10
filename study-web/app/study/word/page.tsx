// 'use client'

import Server, {deleteCompleted} from "@/app/study/word/Server";

export default function Page() {

    // const [count, setCount] = useState(0)
    'use client'
    console.log('word client???')
    return (
        <div>
            <Server/>
            <span>yes</span>
            <button onClick={deleteCompleted}>deleteCompleted</button>
        </div>
    )
}

