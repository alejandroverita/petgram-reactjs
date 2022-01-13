import { useQuery } from '@apollo/client'
/* HOC */
import { withPhotos } from '../HOC/withPhotos';

/* Component */
import { ListOfPhotoCards } from '../Components/ListOfPhotoCards';

export const ListOfPhotoCardsContainer = ({categoryId}) => {
    const { loading, error, data } = useQuery(withPhotos, {
        variables: { categoryId }
    })
    
    return { loading, error, data }
}


