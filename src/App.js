import React, {useContext} from "react";
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

import { AppContext } from "./Context/AppContext";

//styles
import { GlobalStyle } from "./Styles/GlobalStyles";

//PAGES
import { Home } from './Pages/Home';
import { Detail } from "./Pages/Detail";
import { Favs } from "./Pages/Favs";
import { User } from "./Pages/User";
import { NotRegisteredUser } from "./Pages/NotRegisteredUser";
import { NotFound } from "./Pages/NotFound";

//COMPONENTS
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
            <Route exact path='/' element={<Home />} />
            <Route exact path='/pet/:id' element={<Home />} />
            <Route exact path='/detail/:id' element={<Detail />} />
            <Route exact path='/favs' element={isAuth ? <Favs /> : <Navigate replace to='/login' />}/>
            <Route exact path='/user'  element={isAuth ? <User /> : <Navigate replace to='/login' />} />
            <Route exact path='/login' element={!isAuth ? <NotRegisteredUser /> : <Navigate replace to='/' />} />
            <Route path='*' element={<NotFound />} />

        </Routes>
        <NavBar />
        </BrowserRouter>
    )
} 