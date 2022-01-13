import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
//styles
import { GlobalStyle } from "./Styles/GlobalStyles";
// import { Routes } from './Routes'
import { Home } from './Pages/Home';
import { Detail } from "./Pages/Detail";

import { Logo } from './Components/Logo';
import { NavBar } from './Components/NavBar';


export const App = () =>{
    const  urlParams = new window.URLSearchParams(window.location.search)
    const detailId = urlParams.get('detail')
    console.log(detailId)
    return (
        <BrowserRouter>
        <GlobalStyle />
        <Logo />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pet/:id' element={<Home />} />
            <Route path='/detail/:id' element={<Detail />} />
        </Routes>
        <NavBar />
        </BrowserRouter>
    )
} 

// {
// detailId
//     ? (<PhotoCardWithQuery id={detailId} />)
//     : (
    
        
        
//     )
// }