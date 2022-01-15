import React from 'react';
import {useParams} from 'react-router-dom';

import { PhotoCardWithQuery } from '../Container/PhotoCardWithQuery';
import { Layout } from '../Components/Layout'

export const Detail = () => {
    const { id } = useParams()
    return ( 
        <Layout title={`Photo -${id}`}>
            <PhotoCardWithQuery />
        </Layout>
    )
}