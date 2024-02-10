import React from "react";
import './EditPhotoDetails.css';

class EditPhotoDetails extends React.Component { 
    render() {
        const imgURL = `https://www.randyconnolly.com/funwebdev/3rd/images/travel/medium640/5855174537.jpg`;
        return (
            <article className="details">
                <div className="detailsPhotoBox"> 
                    <form className="photoForm">
                        <legend>Edit Photo Details</legend> 
                        <img src={imgURL} alt="later" />
                        <label>Title</label>
                        <input type='text' name='title' />
                        <label>City</label>
                        <input type='text' name='city' />
                        <label>Country</label>
                        <input type='text' name='country' /> 
                    </form>
                </div> 
            </article>
        ); 
    }
}
export default EditPhotoDetails;