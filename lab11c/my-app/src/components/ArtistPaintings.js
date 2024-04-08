import React, { useState }  from 'react';
import SelectArtist from './SelectArtist.js';
import PaintingList from './PaintingList.js';

const ArtistPaintings = (props) => {

   // this initializes a state variable, the useState function returns
   // a 2-element array, so we use array destructuring
   const [artist, setArtist] = useState(null);


   const specifyArtist = (id) => {
      // since this is a functional component, now need for “this”
      const selectedArtist = props.artists.find(a => a.ArtistID == id);
      // the setArtist function was returned by useState(). It replaces
      // this.setState() function (which was only available in classes)
      setArtist(selectedArtist);
    };
  

    return (
      <div className="ArtistPaintingsContainer">         
        <header>           
          <SelectArtist artists={props.artists} 
                          artistHandler={specifyArtist} />
        </header>
        <main>
          <PaintingList artist={artist} />
        </main>
      </div>
     );   
  

};

export default ArtistPaintings;