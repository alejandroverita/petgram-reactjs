import React from 'react';
import { PhotoCard } from '../Components/PhotoCard'
import { useGetSinglePhoto } from '../Hooks/useGetPhoto'

import { useParams } from 'react-router-dom'

export const PhotoCardWithQuery = ({ id }) => {
  const { loading, data, error } = useGetSinglePhoto(id)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>

  const { photo = {} } = data

  return <PhotoCard {...photo} />
}