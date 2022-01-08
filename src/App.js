import React from "react";

//styles
import { GlobalStyle } from "./GlobalStyles";

import { ListOfCategories } from './Components/ListOfCategories';



export const App = () => (
    <>
        <GlobalStyle />
        <ListOfCategories />
    </>
)