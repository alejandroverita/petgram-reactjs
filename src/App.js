import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
//styles
import { GlobalStyle } from "./Styles/GlobalStyles";
// import { Routes } from './Routes'
import { Logo } from './Components/Logo';
import { Home } from './Pages/Home';
import { PhotoCardWithQuery } from "./Container/PhotoCardWithQuery";


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
            <Route path='/detail/:id' element={<PhotoCardWithQuery />} />
        </Routes>
        </BrowserRouter>
    )
} 

// {
// detailId
//     ? (<PhotoCardWithQuery id={detailId} />)
//     : (
    
        
        
//     )
// }