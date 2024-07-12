'use client'

import {ProductXiehouyu} from "@/db/schema";
import {useRef} from "react";
import {Tts} from "@/components/model/Tts";
import {useRouter} from "next/navigation";

export function XiehouyuLayout(props: { props: ProductXiehouyu }) {
    const current = props.props
    const ttsRef = useRef<HTMLButtonElement>(null)
    setTimeout(() => {
        ttsRef.current?.click()
    }, 300)

    const ttsProp = {
        className: 'shadow mt-20 ml-20 w-1/6 hover:bg-red-500 text-center bg-red-200 p-2 rounded',
        button: '播放',
        buttonRef: ttsRef,
        ttsState: (current.riddle ?? '') + '。' + current.answer
    }
    const router = useRouter()
    return (
        <div className='bg-red-100 w-full pt-10 h-full flex-column text-center flex-wrap justify-center'>
            <div className={' h-1/5 text-6xl text-cyan-900'}> {current?.riddle}</div>
            <div className={'mt-5 text-6xl text-cyan-900'}>
                <span className='font-bold text-red-600'>答案：</span>
                <span>{current?.answer}</span>
            </div>
            <div className='w-full content-center justify-center flex'>
                <button
                    onClick={router.refresh}
                    className='shadow mt-20 w-1/6 hover:bg-red-500 text-center bg-red-200 p-2 rounded'>
                    下一个
                </button>
                <Tts {...ttsProp}/>
            </div>
        </div>
    )
}
