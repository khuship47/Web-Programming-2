import PhotoThumb from './PhotoThumb.js'; 

const PhotoList = (props) => {
    return (
        <article className="photos">
            {props.photos.map( (p) => <PhotoThumb photo={p} key={p.id}/> )}
        </article> 
    );
}
export default PhotoList;