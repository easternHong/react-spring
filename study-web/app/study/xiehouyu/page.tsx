'use client'
import {useEffect, useRef, useState} from "react";
import {StudyApi} from "@/components/vm/StudyApi";
import {Tts, TTsContent} from "@/components/model/Tts";

export default function Page() {

    const [current, setCurrent] = useState<Xiehouyu>()
    const [ttsContent, setTtsContent] = useState<TTsContent>({content: ''})
    const ttsRef = useRef<HTMLButtonElement>(null)
    const studyApi = new StudyApi()
    const shouNext = async () => {
        // console.log('current', ttsRef.current)
        // studyApi.randomXiehouyu()
        //     .then((result) => {
        //         setCurrent(result)
        //         setTtsContent({content: result?.riddle + "," + result?.answer})
        //         delayPlay()
        //     }).catch((error) => {
        //     console.log('error', error)
        //     // alert('请求出错了!')
        // })
    }

    const delayPlay = () => {
        setTimeout(() => {
            ttsRef.current?.click()
        }, 300)
    }

    useEffect(() => {
        shouNext()
    }, []);

    const ttsProp = {
        className: 'shadow mt-20 ml-20 w-1/6 hover:bg-red-500 text-center bg-red-200 p-2 rounded',
        button: '播放',
        buttonRef: ttsRef,
        ttsState: ttsContent
    }
    return (
        <div className='bg-red-100 w-full h-full flex-column text-center flex-wrap justify-center'>
            <div className={' h-1/5 text-6xl text-cyan-900'}> {current?.riddle}</div>
            <div className={'mt-5 text-6xl text-cyan-900'}>
                <span className='font-bold text-red-600'>答案：</span>
                <span>{current?.answer}</span>
            </div>
            <div className='w-full content-center justify-center flex'>
                <button
                    onClick={shouNext}
                    className='shadow mt-20 w-1/6 hover:bg-red-500 text-center bg-red-200 p-2 rounded'>
                    下一个
                </button>
                <Tts {...ttsProp}/>
            </div>
        </div>
    )
}