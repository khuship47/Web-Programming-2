import React from 'react';
import './PaintingItem.css';


const PaintingItem = (props) => {
   const url = "http://www.randyconnolly.com/funwebdev/3rd/images/art/paintings/square/" + props.painting.ImageFileName + ".jpg";
   
   return (
      <div className="card">
         <figure>
            <img src={url} alt={props.painting.Title} />
            <figcaption>{props.painting.Title}</figcaption>
         </figure>
      </div>
   );
   

};

export default PaintingItem;