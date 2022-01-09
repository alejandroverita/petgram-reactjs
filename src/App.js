import React from "react";

//styles
import { GlobalStyle } from "./Styles/GlobalStyles";

import { ListOfCategories } from './Components/ListOfCategories';
import { ListOfPhotoCards } from './Components/ListOfPhotoCards';
import { Logo } from './Components/Logo';

export const App = () => (
    <>
        <GlobalStyle />
        <Logo />
        <ListOfCategories />
        <ListOfPhotoCards />
    </>
)