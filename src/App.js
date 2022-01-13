import React, {useContext} from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import { AppContext } from "./Context/AppContext";

//styles
import { GlobalStyle } from "./Styles/GlobalStyles";
// import { Routes } from './Routes'
import { Home } from './Pages/Home';
import { Detail } from "./Pages/Detail";
import { Favs } from "./Pages/Favs";
import { User } from "./Pages/User";
import { NotRegisteredUser } from "./Pages/NotRegisteredUser";

import { Logo } from './Components/Logo';
import { NavBar } from './Components/NavBar';

export const App = () =>{
    const  urlParams = new window.URLSearchParams(window.location.search)
    const detailId = urlParams.get('detail')
    console.log(detailId)
    const { isAuth } = useContext(AppContext)
    return (
        <BrowserRouter>
        <GlobalStyle />
        <Logo />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pet/:id' element={<Home />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/favs' element={isAuth ? <Favs /> : <NotRegisteredUser />}/>
            <Route path='/user'  element={isAuth ? <User /> : <NotRegisteredUser />} />

        </Routes>
        <NavBar />
        </BrowserRouter>
    )
} 