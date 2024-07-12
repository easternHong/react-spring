import {useParams} from "react-router-dom";



export default function About() {
    const _useParams = useParams();
    console.log('_useParams:' + JSON.stringify(_useParams))
    return (
        <div className='col w-full'>
            <div
                className="h-full w-full bg-cover">
                <div className='text-center text-white h-screen content-center justify-center'>
                    <p>一个帮助开发者成长的社区</p>
                    <p className='mt-5'>Become a Better Developer by Sharing and Learning</p>
                    <div className="hero-btn-box mt-12">
                        <a className="border-2 border-white m-1 p-2" href="https://github.com/">访问Github</a>
                        <a className="border-2 border-white m-1 p-2"
                           href="https://github.com/app">下载应用</a>
                        <a className="border-2 border-white m-1 p-2"
                           href="https://github.com/extension">浏览器插件</a>
                    </div>
                </div>
            </div>
            <div
                className="h-full w-full ">
                <div className='text-center text-zinc-900 h-screen content-center justify-center'>
                    <p className='text-4xl'>Github</p>
                    <p className='mt-5'>每一位联合编辑都经过精心挑选，他们来自：</p>
                    <div className="hero-btn-box mt-12">
                        <a className="border-2 border-white m-1 p-2" href="https://github.com/">访问官网</a>
                        <a className="border-2 border-white m-1 p-2"
                           href="https://github.com/app">下载应用</a>
                        <a className="border-2 border-white m-1 p-2"
                           href="https://github.com/extension">浏览器插件</a>
                    </div>

                </div>
            </div>
        </div>
    )
}