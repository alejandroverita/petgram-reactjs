import React, {useEffect, useRef, useState} from 'react';

import { Article, ImgWrapper, Img} from './styles';
import { FavButton } from '../FavButton';

/* HOOKS */
import { useLocalStorage } from '../../Hooks/useLocalStorage';
import { useNearScreen } from '../../Hooks/useNearScreen';

/* CONTAINER */

import { useMutationToogleLike } from '../../Hooks/useMutationToggleLike';

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({id, likes=0, src = DEFAULT_IMAGE})=> {
    
    const [show, ref] = useNearScreen();
    
    const key = `like-${id}`;
    const [liked, setLiked] = useLocalStorage(key, false)
    
    const { mutation, mutationLoading, mutationError } = useMutationToogleLike()
    
    const handleFavClick = () => {
        !liked && mutation({
          variables: {
            input: { id }
          }
        })
        setLiked(!liked)
      }
      console.log('{ mutation, mutationLoading, mutationError }', { mutation, mutationLoading, mutationError })


    return(
        <Article ref={ref}>
            {
                show &&
                <>
                    <a href={`/detail/${id}`}>
                        <ImgWrapper>
                            <Img src={src} />
                        </ImgWrapper>
                    </a>
                    <FavButton liked={liked} likes={likes} onClick={handleFavClick}/>
                </>
            }
        </Article>
    )
}