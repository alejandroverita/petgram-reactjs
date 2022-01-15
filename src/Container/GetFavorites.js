import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { ListOfFavs } from '../Components/ListOfFavs'

const GET_FAVORITES = gql`
  query getFavs {
    favs{
      id
      categoryId
      src
      likes
      userId
    }
  }
`
// const useGetFavorites = id => {
//   const { loading, data, error } = useQuery(GET_FAVORITES, {
//     fetchPolicy: 'network-only'
//   })
//   return { loading, data, error }
// }

// export const RenderFavorites = () => {
//   const { loading, data, error } = useGetFavorites()
//   if (loading) return <p>Loading...</p>
//   if (error) return <p>Error...</p>
//   const { favs } = data

//   return <ListOfFavs favs={favs} />
// }

const RenderProp = ({ loading, data, error }) => {
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error...</p>
    const { favs } = data
  
    return <ListOfFavs favs={favs} />
  }
  
export const FavsWithQuery = () => {
    const { loading, error, data } = useQuery(GET_FAVORITES, {
        fetchPolicy: 'cache-and-network'
    })

    return <RenderProp loading={loading} data={data} error={error} />
}