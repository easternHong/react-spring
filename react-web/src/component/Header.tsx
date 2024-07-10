import {Link} from "react-router-dom";

export default function Header() {
    console.log('header new')
    return (
        <header className="inset-0 transition-all w-screen flex bg-gray-200 sticky">
            <div className='flex h-14 ml-1.5'>
                <a href="/" className='m-auto content-center w-12 h-12'>
                    <img
                        className={'mx-auto'}
                        src="/vite.svg"
                        alt="Company Logo"/>
                </a>
                <ul className='flex flex-row m-auto'>
                    <li>
                        <Link
                            className="hover:bg-blue-200 text-cyan-800  m-2 py-2 px-4"
                            to="/">Home</Link></li>
                    <li>
                        <Link
                            className="hover:bg-blue-200 text-cyan-800  m-2 py-2 px-4"
                            to="/subtitle">名人讲话</Link>
                    </li>
                    <li>
                        <Link
                            className="hover:bg-blue-200 text-cyan-800  m-2 py-2 px-4"
                            to="/study">学习中心</Link>
                    </li>
                    <li>
                        <Link
                            className="hover:bg-blue-200 text-cyan-800  m-2 py-2 px-4"
                            to="/about">About</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}

