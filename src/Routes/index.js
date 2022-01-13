import React from 'react';

import { Route, Routes as Rutas, BrowserRouter } from 'react-router-dom'
import { Logo } from '../Components/Logo'
import { ListOfCategories } from '../Components/ListOfCategories'
import { PhotoCardWithQuery } from '../Container/PhotoCardWithQuery'
import { Home } from '../Pages/Home'

export const Routes = () => {
  return (
    <BrowserRouter>
      <Logo />
      <ListOfCategories />
      <Rutas>
        <Route exact path='/' element={ <Home />} />
        <Route exact path='/category/:id' element={< Home />} />
        <Route exact path='/details/:id' element={<PhotoCardWithQuery />} />
      </Rutas>
    </BrowserRouter>
  )
}