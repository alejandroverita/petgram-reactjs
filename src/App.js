import React from "react";

//styles
import { GlobalStyle } from "./GlobalStyles";

import { ListOfCategories } from './Components/ListOfCategories';
import { ListOfPhotoCards } from './Components/ListOfPhotoCards';


export const App = () => (
    <>
        <GlobalStyle />
        <ListOfCategories />
        <ListOfPhotoCards />
    </>
)