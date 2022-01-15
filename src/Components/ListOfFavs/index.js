import React from 'react';

import { Link, Container, Image } from './styles'

export const ListOfFavs = ({favs = []}) => {
    return ( 
        <>
            <Container>
                {favs.map(fav => (
                <Link to={`/detail/${fav.id}`} key={fav.id}>
                    <Image src={fav.src} alt='fav' />
                </Link>
                ))}
            </Container>
        </>
    )
}