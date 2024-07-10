import {ChevronFirst, ChevronLast} from "lucide-react"
import React, {createContext, ReactNode, useContext, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";


const SidebarContext: React.Context<{}> = createContext({});

export default function Sidebar({children}: { children: React.ReactNode }) {
    const [expanded, setExpanded] = useState(true)
    const pathname = useLocation();
    const [currentIndex, setCurrentIndex] = useState(`${pathname.pathname}`)

    console.log('xxx:', pathname.pathname)
    return (
        <>
            <aside className="h-screen">
                <nav className="h-full flex flex-col bg-white border-r shadow-sm">
                    <div className="p-4 pb-2 flex justify-between items-center">
                        <img className={`overflow-hidden transition-all ${expanded ? "w-0" : "w-0"}`}/>
                        <button onClick={() => setExpanded((curr) => !curr)}
                                className="p-0 rounded-lg bg-gray-50 hover:bg-gray-100">
                            {expanded ? <ChevronFirst/> : <ChevronLast/>}
                        </button>
                    </div>

                    <SidebarContext.Provider value={{expanded, currentIndex, setCurrentIndex}}>
                        <ul className="flex-1 px-3">{children}</ul>
                    </SidebarContext.Provider>
                </nav>
            </aside>
        </>
    )
}

export function SidebarItem({icon, display, router, alert}: {
    icon: ReactNode,
    display: string,
    router: string,
    alert?: boolean
}) {
    const context: {
        expanded: boolean,
        currentIndex: string,
        setCurrentIndex: React.Dispatch<React.SetStateAction<string>>
    } = useContext(SidebarContext)
    // const {expanded, currentIndex, setCurrentIndex} = useContext(SidebarContext)
    const navigate = useNavigate()
    // console.log('new SideBar expanded:', expanded, router, currentIndex)
    if (router === '') router = '/study'
    const active = router === context?.currentIndex || (router.length > 0 && context?.currentIndex.endsWith(`/${router}`))

    return (
        <li
            onClick={() => {
                if (context?.setCurrentIndex)
                    context?.setCurrentIndex(router)
                navigate(router)
            }}
            className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${active ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800" : "hover:bg-indigo-50 text-gray-600"}`}>
            {icon}
            <span
                className={`overflow-hidden transition-all ${context?.expanded ? "w-32 ml-3" : "w-0"}`}>{display}</span>
            {alert && (
                <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${context?.expanded ? "" : "top-2"}`}>
                </div>
            )}
            {!context?.expanded && (
                <div
                    className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>
                    {display}
                </div>
            )}
        </li>
    )
}
