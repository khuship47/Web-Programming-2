import React, { useState, useEffect }  from 'react';
import './PaintingList.css';
import PaintingItem from './PaintingItem.js';

const PaintingList = (props) => {

   const url = "http://www.randyconnolly.com/funwebdev/services/art/paintings.php?artist=";

   const [paintings, setPaintings] = useState([]);
   // useEffect replaces the class component lifecycle methods
   useEffect( () => {
     if (props.artist) {
        fetch(url + props.artist.ArtistID)
          .then(response => response.json())
          .then(data => setPaintings(data));
     }      
   });
 

   if (props.artist)
      return (
        <section>
            <h3>Paintings for {props.artist.LastName}</h3>     
            <div id="paintingList">
            { paintings.map( p => 
                <PaintingItem key={p.PaintingID} painting={p} /> ) }
           </div>                  

        </section>);
   else
       return (<section>No artist selected yet</section>);

};

export default PaintingList;