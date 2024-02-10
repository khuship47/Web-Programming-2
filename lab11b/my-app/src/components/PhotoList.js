import PhotoThumb from './PhotoThumb.js'; 

const PhotoList = (props) => {
    return (
        <article className="photos">
            <PhotoThumb /> 
            <PhotoThumb /> 
            <PhotoThumb /> 
            <PhotoThumb /> 
            <PhotoThumb /> 
            <PhotoThumb /> 
            <PhotoThumb />
        </article> 
    );
}
export default PhotoList;