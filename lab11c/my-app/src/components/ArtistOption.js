import React from 'react';

const ArtistOption = (props) => {
   return (
      <option value={props.artist.ArtistID}>{props.artist.LastName}, {props.artist.FirstName}</option>
   );

}

export default ArtistOption;