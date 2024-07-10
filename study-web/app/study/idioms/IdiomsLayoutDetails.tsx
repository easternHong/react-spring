'use client'

import {ProductIdiom} from "@/db/schema";
import {Tts} from "@/components/model/Tts";
import React, {useEffect, useRef, useState} from "react";
import clearCachesByServerAction from "@/app/study/idioms/RefreshServer";
import {randomIdiomArray} from "@/components/service/RandomUtils";
import {pl} from "date-fns/locale";

export default function IdiomsLayoutDetails(props: { props: ProductIdiom }) {
    const getRandomInt = (max: number) => {
        return Math.floor(Math.random() * max);
    }
    const current = props.props
    const place = getRandomInt(current.word.length)
    const answer = randomIdiomArray(current.word[place])
    const ttsRef = useRef<HTMLButtonElement>(null)
    const [hideIndex, setHideIndex] = useState(place)
    // const [showDetails, setShowDetails] = useState(false)
    const showDetails = true
    console.log('current', answer, current.word, place, 'hideIndex:', hideIndex, 'ttsRef', ttsRef)

    const ttsProps = {
        className: ' shadow w-1/6 ml-10 hover:bg-blue-500 text-center bg-blue-200 p-2 rounded mt-4 ',
        button: '播放',
        ttsState: current.word,
        buttonRef: ttsRef,
    }

    useEffect(() => {

        return () => {
            console.log('unEffect')
        }
    }, []);
    const funClick = (index: number) => {
        if (current?.word[hideIndex] === answer[index]) {
            setHideIndex(-1)
            // setShowDetails(true)
            new Audio('/win.wav').play()
        } else {
            new Audio('/failed.wav').play()
        }
    }
    setTimeout(() => {
        ttsRef.current?.click()
    }, 1000)

    const funMouseEnter = () => {
        new Audio('/click.wav').play()
    }
    console.log('IdiomsLayoutDetails refresh????')
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
                <div className='text-black text-4xl ml-20 mr-20'>
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
                    onClick={() => {
                        // setHideIndex(-1)
                        clearCachesByServerAction("study/idioms")
                    }}
                    className=' shadow w-1/6 hover:bg-blue-500 text-center bg-blue-200 p-2 rounded mt-4 '>
                    下一个
                </button>
                <Tts {...ttsProps}/>
            </div>
        </div>
    )
}

