import PhotoList from './PhotoList.js';
import EditPhotoDetails from './EditPhotoDetails.js';

const PhotoBrowser = props => { 
    return (
        <section className="container"> 
            <PhotoList photos={props.photos}/> 
            <EditPhotoDetails photos={props.photos}/>
        </section> 
    );
}
export default PhotoBrowser;