'use client'

import {ProductIdiom} from "@/db/schema";
import {Tts} from "@/components/model/Tts";
import React, {useRef, useState} from "react";
import {getRandomInt, randomIdiomArray} from "@/components/service/RandomUtils";
import {useRouter} from "next/navigation";
import audioPlayer from "@/components/AudioPlayer";


type Ref = {
    props: ProductIdiom,
    index: number,
    answer: string[]
}

let hideIndex = -2

function IdiomsTopic(props: { props: Ref }) {
    const current = props.props.props
    const place = props.props.index
    const answer = props.props.answer
    const [, setHideIndex] = useState(0)
    if (hideIndex == -2) hideIndex = place
    console.log('IdiomsTopic place', place, answer)
    console.log('hideIndex', hideIndex, props.props.props.word)
    const funClick = (index: number) => {
        if (current?.word[place] === answer[index]) {
            audioPlayer.playAudio('/win.wav')
            hideIndex = -1
            setHideIndex(Math.random)
        } else {
            audioPlayer.playAudio('/failed.wav')
        }
    }
    const funMouseEnter = () => {
        audioPlayer.playAudio('/click.wav')
    }
    console.log('rerender???', hideIndex, current.word)
    return (
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
            <div className='text-black text-4xl flex-row flex justify-center'>
                {answer.map((v: string, index: number) =>
                    <button key={index}
                            onMouseEnter={funMouseEnter}
                            onClick={() => {
                                funClick(index)
                            }}
                            className='shadow  w-20 h-20 bg-blue-200 m-5 pl-1 border-blue-500 hover:bg-blue-500 border-2 rounded flex justify-center items-center'>
                                <span
                                    unselectable={"on"}
                                    className='mx-auto'>{v}</span>
                    </button>
                )}
            </div>
        </div>
    )
}


export default function IdiomsLayoutDetails(props: { props: ProductIdiom, place: number, answer: string[] }) {
    const router = useRouter()
    const current = props.props
    const ttsRef = useRef<HTMLButtonElement>(null)
    const place = props.place
    const ttsProps = {
        className: ' shadow w-1/6 ml-10 hover:bg-blue-500 text-center bg-blue-200 p-2 rounded mt-4 ',
        button: '播放',
        ttsState: current.word,
        buttonRef: ttsRef,
    }

    setTimeout(() => {
        ttsRef.current?.click()
    }, 1000)

    console.log('IdiomsLayoutDetails refresh????')
    return (
        <div
            className='content-center bg-blue-100 w-full h-full'>
            <div>
                <IdiomsTopic props={{props: current, index: place, answer: props.answer}}/>
                <div className='text-black text-4xl ml-20 mr-20'>
                    <div><span className='w-screen font-bold text-red-600'>典故: </span>
                        <span>{current?.derivation}</span>
                    </div>
                    <div className='mt-5'>
                        <span className='mt-5 w-screen font-bold text-red-600'>用法: </span>
                        <span>{current?.example}</span>
                    </div>
                </div>
            </div>
            <div className='w-full content-center justify-center flex'>
                <button
                    onClick={() => {
                        hideIndex = -2
                        router.refresh()
                    }}
                    className=' shadow w-1/6 hover:bg-blue-500 text-center bg-blue-200 p-2 rounded mt-4 '>
                    下一个
                </button>
                {audioPlayer.isEnable() && <Tts {...ttsProps}/>}
            </div>
        </div>
    )
}

