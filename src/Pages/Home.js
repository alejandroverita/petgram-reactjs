import React from 'react'

import { ListOfCategories } from '../Components/ListOfCategories';
import { ListOfPhotoCards } from '../Components/ListOfPhotoCards';

import { Layout } from '../Components/Layout'

export const Home = () => {
  
  return (
      <Layout>
        <ListOfCategories />  
        <ListOfPhotoCards />
      </Layout>
  )
}