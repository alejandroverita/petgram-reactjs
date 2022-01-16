import React from 'react';
import PropTypes from 'prop-types';

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

ListOfFavs.propTypes = {
    favs: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            src: PropTypes.string.isRequired
        })

    )
}