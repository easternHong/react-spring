import './App.css'
import Home from "./component/Home.tsx";
import About from "./component/About.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NotFound from "./component/NotFound.tsx";
import Me from "./component/Me.tsx";
import React, {Component, createContext} from "react";
import SubTitle from "./component/SubTitle.tsx";
import {StudyCenter} from "./component/StudyCenter.tsx";
import Header from "./component/Header.tsx";
import {Error} from "postgres";


type AppScope = {
    data: string
}
const appData: AppScope = {
    data: 'goog'
}

export const AppContext = createContext({});


class App extends Component {


    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.log('error', error)
    }

    render() {
        return (
            <div className='h-auto block overflow-auto w-full bg-gray-100 relative'>
                <AppContext.Provider value={appData}>
                    <BrowserRouter>
                        <Header/>
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="subtitle" element={<SubTitle/>}/>
                            <Route path="study/*" element={<StudyCenter/>}/>
                            <Route path="about">
                                <Route path="" element={<About/>}/>
                                <Route path="me" element={<Me/>}/>
                            </Route>
                            <Route path="*" element={<NotFound/>}/>
                        </Routes>
                    </BrowserRouter>
                </AppContext.Provider>

            </div>
        )
    }
}

export default App