import React from 'react';
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";

/* COMPONENTS */
import { PhotoCard } from '../PhotoCard';

/* HOC */
import { withPhotos } from '../../HOC/withPhotos';

// const getPhotos = gql`
// query getPhotos($categoryId: ID) {
//   photos(categoryId: $categoryId) {
//     id
//     categoryId
//     src
//     likes
//     userId
//     liked
//   }
// }
// `;

export const ListOfPhotoCards = ({ categoryId }) => {
    const { loading, error, data } = useQuery(withPhotos, {
        variables: { categoryId }
    });

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