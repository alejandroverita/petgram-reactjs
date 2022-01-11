
/* HOC */
import { withPhotos } from '../../HOC/withPhotos';

/* Component */
import { ListOfPhotoCards } from '../Components/ListOfPhotoCards';

export const ListOfPhotosCardContainer = withPhotos(ListOfPhotoCards)