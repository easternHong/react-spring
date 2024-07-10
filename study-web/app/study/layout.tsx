'use client'

import React, {useState} from "react";
import {Overlay, Sidebar, SidebarState, useSidebar} from "@rewind-ui/core";
import {Home, Sliders} from "lucide-react";

export default function StudyLayout({children}: { children: React.ReactNode; }) {
    // console.log('StudyLayout', children)
    const [expanded, setExpanded] = useState(true);
    const [mobile, setMobile] = useState(false);
    const sidebar = useSidebar();
    return (
        <div className="relative flex flex-row w-full h-screen min-h-[35rem]">
            <Sidebar
                onToggle={(state: SidebarState) => {
                    setExpanded(state.expanded);
                    setMobile(state.mobile);
                }}
                className="absolute w-[5rem]">
                <Sidebar.Head>
                    {/*<Sidebar.Head.Logo>*/}
                        {/*<Image src="/logo.png" width={48} height={48} alt="Rewind-UI"/>*/}
                    {/*</Sidebar.Head.Logo>*/}
                    <Sidebar.Head.Title>Rewind-UI</Sidebar.Head.Title>
                    {/*<Sidebar.Head.Toggle/>*/}
                </Sidebar.Head>

                <Sidebar.Nav>
                    <Sidebar.Nav.Section>
                        <Sidebar.Nav.Section.Item icon={<Home/>} label="成语" href="/study/idioms"/>
                        <Sidebar.Nav.Section.Item icon={<Home/>} label="歇后语" href="/study/xiehouyu"/>
                        <Sidebar.Nav.Section.Item icon={<Home/>} label="词语" href="/study/word"/>
                        <Sidebar.Nav.Section.Item icon={<Sliders/>} label="Settings" href="#"/>
                    </Sidebar.Nav.Section>
                </Sidebar.Nav>

                <Sidebar.Footer>
                    <div className="flex flex-col justify-center items-center text-sm">
                        <span className="font-semibold">Rewind-UI</span>
                        <span>version x.y.z</span>
                    </div>
                </Sidebar.Footer>
            </Sidebar>

            <main
                className={`transition-all transform duration-100 text-slate-700 flex w-full flex-col ${
                    expanded ? 'md:ml-64' : 'md:ml-10'
                }`}>
                {/*{mobile && (*/}
                {/*    <Overlay*/}
                {/*        blur="none"*/}
                {/*        onClick={() => {*/}
                {/*            sidebar.toggleMobile();*/}
                {/*        }}*/}
                {/*        className="md:hidden z-40"*/}
                {/*    />*/}
                {/*)}*/}
                {/*<header*/}
                {/*    className="flex flex-row sticky top-0 px-8 items-center bg-white border-b border-b-gray-100 w-full shadow-sm min-h-[4rem]">*/}
                {/*    <span>Navbar</span>*/}

                {/*    <Button*/}
                {/*        onClick={() => {*/}
                {/*            sidebar.toggleMobile();*/}
                {/*        }}*/}
                {/*        size="sm"*/}
                {/*        color="white"*/}
                {/*        className="ml-auto flex md:hidden"*/}
                {/*    >*/}
                {/*        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">*/}
                {/*            <path*/}
                {/*                d="M448 96c0-17.7-14.3-32-32-32H32C14.3 64 0 78.3 0 96s14.3 32 32 32H416c17.7 0 32-14.3 32-32zm0 320c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32z"/>*/}
                {/*            <path*/}
                {/*                className="opacity-50"*/}
                {/*                d="M0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32z"*/}
                {/*            />*/}
                {/*        </svg>*/}
                {/*    </Button>*/}
                {/*</header>*/}

                <div className="w-full h-full">
                    {children}
                </div>

                {/*<div className="flex sticky bottom-0 items-center bg-white w-full min-h-[4rem] px-8">*/}
                {/*    <span>Footer</span>*/}
                {/*</div>*/}
            </main>
        </div>
    );
}