import React from 'react'

import { ListOfCategories } from '../Components/ListOfCategories';
import { ListOfPhotoCards } from '../Components/ListOfPhotoCards';

import { Layout } from '../Components/Layout'

const HomePage = ({children}) => {
  
  return (
      <Layout>
        <ListOfCategories />  
        <ListOfPhotoCards />
        {children}
      </Layout>
  )
}

export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.id === props.id
});