'use client'

import React, {useState} from "react";
import {Sidebar, SidebarState, useSidebar} from "@rewind-ui/core";
import {Home, Sliders} from "lucide-react";

export default function StudyLayout({children}: { children: React.ReactNode; }) {
    // console.log('StudyLayout', children)
    const [expanded, setExpanded] = useState(true);
    const [mobile, setMobile] = useState(false);
    const sidebar = useSidebar();
    return (
        <div className="relative flex flex-row w-full h-screen min-h-[25rem]">
            <Sidebar
                onToggle={(state: SidebarState) => {
                    setExpanded(state.expanded);
                    setMobile(state.mobile);
                }}
                className="absolute w-1/12">
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
                    expanded ? 'md:ml-60' : 'md:ml-10'
                }`}>
                <div className="w-full h-full">{children}</div>
            </main>
        </div>
    );
}