import React from "react";

//styles
import { GlobalStyle } from "./Styles/GlobalStyles";

import { ListOfCategories } from './Components/ListOfCategories';
import { ListOfPhotoCards } from './Components/ListOfPhotoCards';
import { Logo } from './Components/Logo';

import {PhotoCardWithQuery} from './Container/PhotoCardWithQuery'

export const App = () =>{
    const  urlParams = new window.URLSearchParams(window.location.search)
    const detailId = urlParams.get('detail')
    // console.log(detailId)
    return (
        <>
            <GlobalStyle />
            <Logo />
            {
                detailId
                ?
                    <PhotoCardWithQuery id={detailId} />
                :
                <> 
                    <ListOfCategories />
                    <ListOfPhotoCards categoryId={1}/>
                </>
            }
        </>

    )
} 
