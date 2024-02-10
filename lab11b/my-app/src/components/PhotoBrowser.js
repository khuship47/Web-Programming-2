import PhotoList from './PhotoList.js';
import EditPhotoDetails from './EditPhotoDetails.js';

const PhotoBrowser = props => { 
    return (
        <section className="container"> 
            <PhotoList /> 
            <EditPhotoDetails />
        </section> 
    );
}
export default PhotoBrowser;