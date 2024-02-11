import React, { useEffect, useState } from 'react';
import PhotoList from './PhotoList.js';
import EditPhotoDetails from './EditPhotoDetails.js';

const PhotoBrowser = props => {
    // the first photo in fetched data has an id of 15
    const [currentPhoto, setCurrentPhoto] = React.useState(15); 

    return (
        <section className="container"> 
            <PhotoList photos={props.photos}/> 
            <EditPhotoDetails photos={props.photos} currentPhoto={currentPhoto}/>
        </section> 
    );
}
export default PhotoBrowser;