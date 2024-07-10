import {useParams} from "react-router-dom";

export default function Me() {
    const _useParams = useParams();
    console.log('_useParams:' + JSON.stringify(_useParams))
    return (
        <div className='text-center text-black bg-red-950 h-screen content-center justify-center'>
            <p>我的页面</p>
            <p className='mt-5'>Become a Better Developer by Sharing and Learning</p>
        </div>
    )
}