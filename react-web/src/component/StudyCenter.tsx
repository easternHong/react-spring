import ChengyuUi from "./study/ChengyuUi.tsx";
import {Home, LayoutDashboard, StickyNote} from "lucide-react";
import Sidebar, {SidebarItem} from "./Sidebar.tsx";
import {Route, Routes} from "react-router-dom";
import WordUi from "./study/WordUi.tsx";
import XiehouyuUi from "./study/XiehouyuUi.tsx";


export function StudyCenter() {

    return (
        <div className='h-screen flex flex-row'>
            <Sidebar>
                <SidebarItem icon={<Home size={20}/>} router={''} display="成语"/>
                <SidebarItem icon={<StickyNote size={20}/>} router={'xiehouyu'} display="歇后语"/>
                <SidebarItem icon={<LayoutDashboard size={20}/>} router={'word'} display="词语"/>
            </Sidebar>
            <Routes>
                <Route path="/" element={<ChengyuUi/>}/>
                <Route path="word" element={<WordUi/>}/>
                <Route path="xiehouyu" element={<XiehouyuUi/>}/>
            </Routes>
        </div>
    )
}
