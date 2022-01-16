import React from 'react';
import {useParams } from 'react-router';

/* COMPONENTS */
import { PhotoCard } from '../PhotoCard';

/* HOC */
// import { withPhotos } from '../../HOC/withPhotos';

import { ListOfPhotoCardsContainer } from '../../Container/ListOfPhotoCardsContainer';

export const ListOfPhotoCards = () => {
    const {id} = useParams();
    const categoryId = id
    
    const { loading, error, data } = ListOfPhotoCardsContainer({categoryId})

    if (error) {
        return <h2>Internal Server Error</h2>;
    }
    if (loading) {
        return <h2>Loading...</h2>;
    }
    
    return ( 
        <ul>
            {
                data.photos.map(photo => (<PhotoCard key={photo.id} {...photo} />))
            }
        </ul>
    )
}