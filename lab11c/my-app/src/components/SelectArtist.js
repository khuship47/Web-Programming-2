import React from 'react';
import './SelectArtist.css';
import ArtistOption from './ArtistOption.js';

class SelectArtist extends React.Component { 

   handleChange = (e) => {
      //alert("changed =" + e.target.value);
      this.props.artistHandler(e.target.value);
   }

   render() {
      if (this.props.artists && this.props.artists.length > 0) {

         return (
            <select className="select-css" onChange={this.handleChange}>
               <option value="0">Select an artist</option>
               { this.props.artists.map( a => <ArtistOption key={a.ArtistID} artist={a} /> ) }
            </select>
         );
   
      } else return null;
   }

}

export default SelectArtist;