'use client'
import {Sidebar} from "@rewind-ui/core";
import React from "react";
import {Home, LayoutDashboard, StickyNote} from "lucide-react";

export default function StudyLayoutSub({params}: { params: { productId: string }; }) {
    console.log('StudyUi', params)
    return (
        <div className=''>
            <Sidebar>
                <Sidebar.Nav>
                    <Sidebar.Nav.Section>
                        <Sidebar.Nav.Section.Item icon={<Home/>} label="成语学习" href="/study/idioms" active/>
                    </Sidebar.Nav.Section>

                    <Sidebar.Nav.Section>
                        <Sidebar.Nav.Section.Item icon={<StickyNote/>} label="歇后语" href="/study/xiehouyu"/>
                        <Sidebar.Nav.Section.Item icon={<LayoutDashboard/>} label="词语" href="/study/word"/>
                    </Sidebar.Nav.Section>
                </Sidebar.Nav>
            </Sidebar>
        </div>
    )
}