import React from "react";
import './EditPhotoDetails.css';

class EditPhotoDetails extends React.Component { 
    render() {
        const id = this.props.currentPhoto;
        const imgURL = `https://www.randyconnolly.com/funwebdev/3rd/images/travel/medium640/`;
           // just in case, handle case of a missing photos collection
        if (this.props.photos.length > 0) {
              // find the photo object with this id
            const photo = this.props.photos.find( p => p.id === id);
              // just in case there is no match, then exit
        if (! photo) return null;
              // we have found a photo for this id, so display edit form
            return (
                <article className="details">
                    <div className="detailsPhotoBox">
                        <form className="photoForm">
                            <legend>Edit Photo Details</legend>
                            <img src={imgURL+photo.filename} alt={photo.title} />
                            <label>Title</label>
                            <input type='text' name='title' value={photo.title} />
                            <label>City</label>
                            <input type='text' name='city' value={photo.location.city} />
                            <label>Country</label>
                            <input type='text'  name='country' value={photo.location.country} />      
                        </form>
                    </div>
                </article>
            );
        } else {
            return null;
        }
    }
}
export default EditPhotoDetails;