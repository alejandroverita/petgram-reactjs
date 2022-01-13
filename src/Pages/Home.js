import React from 'react'

import { ListOfCategories } from '../Components/ListOfCategories';
import { ListOfPhotoCards } from '../Components/ListOfPhotoCards';

export const Home = () => {
  
  return (
    <>
      <ListOfCategories />  
      <ListOfPhotoCards />
    </>
  )
}