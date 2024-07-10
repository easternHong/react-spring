'use client'
import {useEffect, useRef, useState} from "react";
import {Tts, TTsContent} from "@/components/model/Tts";
import {StudyApi} from "@/components/vm/StudyApi";
import {randomIdiomArray} from "@/components/service/RandomUtils";


export default function TestPage() {

    const [ttsContent, setTtsContent] = useState<TTsContent>({content: ''})
    const [current, setCurrent] = useState<Chengyu>()
    const [hideIndex, setHideIndex] = useState(0)
    const [answer, setAnswer] = useState([''])
    const [showDetails, setShowDetails] = useState(false)

    const ttsRef = useRef<HTMLButtonElement>(null)

    const studyApi = new StudyApi()


    const getRandomInt = (max: number) => {
        return Math.floor(Math.random() * max);
    }

    const showNext = async () => {
        setShowDetails(false)
        const item = await studyApi.randomIdioms()
        const place = getRandomInt(item.word.length)
        setHideIndex(place)
        setCurrent(item)
        setTtsContent({content: item.word})
        delayPlay()
        setAnswer(randomIdiomArray(item.word[place]))
    }

    const delayPlay = () => {
        setTimeout(() => {
            ttsRef.current?.click()
        }, 500)
    }

    useEffect(() => {
        showNext()
    }, [])

    const checkAnswer = (index: number) => {
        console.log('checkAnswer:' + index)
        if (current?.word[hideIndex] === answer[index]) {
            setHideIndex(-1)
            setShowDetails(true)
            new Audio('/win.wav').play()
        } else {
            new Audio('/failed.wav').play()
        }
    }
    const ttsProps = {
        className: ' shadow w-1/6 ml-10 hover:bg-blue-500 text-center bg-blue-200 p-2 rounded mt-4 ',
        button: '播放',
        buttonRef: ttsRef,
        ttsState: ttsContent
    }
    return (
        <div className='content-center bg-blue-100 w-full h-full'>
            <div>
                <div className='text-black flex-row flex justify-center'>
                    {current?.word?.split('')?.map((v: string, index: number) =>
                        <div key={index}
                             className='shadow w-40 h-40 bg-blue-200 m-2 pl-1 border-blue-500 border-2 rounded '>
                            <div
                                className='mx-auto text-1xl flex justify-center items-center text-red-600'>{v == '，' ? '' : current?.pinyin?.replace('，', ' . ')?.split(' ')[index]}</div>
                            <div
                                className='mx-auto text-8xl flex justify-center items-center'>{hideIndex != index ? v : ''}</div>
                        </div>
                    )}
                </div>
                <div className='text-black text-5xl flex-row flex justify-center'>
                    {answer.map((v: string, index: number) =>
                        <div key={index}
                             onMouseEnter={() => {
                                 new Audio('/click.wav').play()
                             }}
                             onClick={() => checkAnswer(index)}
                             className='shadow  w-20 h-20 bg-blue-200 m-5 pl-1 border-blue-500 hover:bg-blue-500 border-2 rounded flex justify-center items-center'>
                            <span
                                unselectable={"on"}
                                className='mx-auto'>{v}</span>
                        </div>
                    )}
                </div>
                <div className='text-black text-4xl ml-20'>
                    <div><span className='w-screen font-bold text-red-600'>典故: </span>
                        <span>{showDetails ? current?.derivation : ""}</span>
                    </div>
                    <div className='mt-5'>
                        <span className='mt-5 w-screen font-bold text-red-600'>用法: </span>
                        <span>{showDetails ? current?.example : ""}</span>
                    </div>
                </div>
            </div>
            <div className='w-full content-center justify-center flex'>
                <button
                    onClick={showNext}
                    className=' shadow w-1/6 hover:bg-blue-500 text-center bg-blue-200 p-2 rounded mt-4 '>
                    下一个
                </button>
                {/*<Tts {...ttsProps}/>*/}
            </div>
        </div>
    )
}