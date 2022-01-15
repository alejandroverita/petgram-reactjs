import React from 'react';
import { PhotoCard } from '../Components/PhotoCard'
import { useGetSinglePhoto } from '../Hooks/useGetPhoto'
import { gql, useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'


const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($id:ID!) {
  photo(id:$id) {
    id
    categoryId
    src
    likes
    userId
    liked  
  }
}
`

const renderProp = ({ loading, error, data }) => {
  if (error) {
    return <h2>Internal Server Error</h2>
  }
  if (loading) {
    return <h2>Loading...</h2>
  }

  return (
    <PhotoCard {...data.photo} />
  )
}

export const PhotoCardWithQuery = () => {
  const { id } = useParams()

  const { loading, error, data } = useQuery(GET_SINGLE_PHOTO, {
    variables: {
      id: id
    }
  })

  return renderProp({ loading, error, data })
}