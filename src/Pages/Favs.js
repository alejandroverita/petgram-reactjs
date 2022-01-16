import React from 'react';
import { Layout } from '../Components/Layout';
import { FavsWithQuery } from '../Container/GetFavorites';

export default () => {
    return ( 
        <Layout title= 'Your favorites' subtitle='Your favorites images'>
            <FavsWithQuery />
        </Layout>
    )
}