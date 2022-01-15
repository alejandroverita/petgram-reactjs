import React from 'react';

import { gql } from '@apollo/client'
import { Mutation } from '@apollo/client/react/components'

const LIKE_PHOTO = gql`
mutation likePhoto($input: LikePhoto!) {
    likePhoto(input: $input) {
      id,
      liked,
      likes
    }
  }
`

export const useMutationToogleLike = ({children}) => {
    // const [mutation, { loading: mutationLoading, error: mutationError }] = useMutation(LIKE_PHOTO)
    return (
      <Mutation mutation={LIKE_PHOTO}>
        {children}
      </Mutation>
    )
}