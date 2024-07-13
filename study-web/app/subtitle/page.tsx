'use client'
import RenderImage from "@/components/ui/RenderImage";
import {ImageSelector} from "@/components/ui/ImageSelector";
import {useRef} from "react";

export default function Page() {

    const textInputRef = useRef<HTMLTextAreaElement>(null);
    const renderImageRef = useRef<RenderImage>(null);
    const imageSelectorRef = useRef<ImageSelector>(null);

    return (
        <main className='w-full h-screen'>
            <div className='h-screen min-w-1/2 m-10 border-amber-800 rounded bg-blue-500'>
                <div className='flex justify-center items-center h-1/4 w-full  text-white'>
                    <div>
                        <h1 className='text-4xl'>名人讲话</h1>
                        <p className="text-xl mt-5 text-center">“会讲，多讲几句”</p>
                    </div>
                </div>
                <div className='flex flex-wrap min-w-96'>
                    <div className='mt-2 rounded-5 shadow bg-white w-full h-full p-2 col'>
                        <div className='flex flex-row'>
                            <ImageSelector
                                ref={imageSelectorRef}
                                fileHandler={renderImageRef}/>
                        </div>
                        <textarea
                            placeholder='台词（注意换行）'
                            ref={textInputRef}
                            className='w-full h-48 mt-1 border rounded border-amber-400'/>
                        <div className='flex flex-row'>
                            <button
                                onClick={() => {
                                    renderImageRef.current?.generateImage()
                                }}
                                className='block rounded rounded-5 bg-blue-200 p-2'>生成
                            </button>
                            <button
                                onClick={() => {
                                    renderImageRef.current?.saveImage()
                                }}
                                className='block rounded rounded-5 ml-2 bg-blue-200 p-2'>保存图片
                            </button>
                        </div>

                    </div>
                    <RenderImage
                        ref={renderImageRef}
                        iSelector={imageSelectorRef}
                        className='mt-2 rounded-5 shadow bg-blue-200 w-full h-full p-2'
                        textArea={textInputRef}/>
                </div>
            </div>
        </main>
    )
}