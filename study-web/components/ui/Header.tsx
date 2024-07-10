import Link from "next/link";
import {Button} from "@/components/ui/button";

export default function Header() {
    return (
        <header className="inset-0 transition-all w-screen flex bg-gray-200 sticky">
            <div className='flex h-14 ml-1.5'>
                <Link
                    className="hover:bg-blue-200 text-cyan-800  m-2 py-2 px-4 "
                    href="/home">Home</Link>
                <Link
                    className="hover:bg-blue-200 text-cyan-800  m-2 py-2 px-4"
                    href="/subtitle">名人讲话</Link>
                <Link
                    className="hover:bg-blue-200 text-cyan-800  m-2 py-2 px-4"
                    href="/study">学习中心</Link>
                <Link
                    className="hover:bg-blue-200 text-cyan-800  m-2 py-2 px-4"
                    href="/about">About</Link>
                <Link title="Looking forward to your contribution.❤️" href="https://github.com/daimajia/huntscreens"
                      target="__blank">
                    <Button size={"icon"} variant={"outline"}>
                        {/*<GitHubLogoIcon className="w-4 h-4"/>*/}
                    </Button>
                </Link>
            </div>
        </header>
    );
}

