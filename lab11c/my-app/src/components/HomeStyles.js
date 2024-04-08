import React from 'react';
import ArtistPaintings from './ArtistPaintings.js';

class HomeStyles extends React.Component { 
  constructor(props) {
    super(props);
    this.state = { artists: [], paintings: [] };
  }

  async componentDidMount() {
    try {
      const url = "http://www.randyconnolly.com/funwebdev/services/art/artists.php";
      const response = await fetch(url);
      const jsonData = await response.json();
      this.setState( {artists: jsonData } );
    }
    catch (error) {
       console.error(error);
    }
  }

  render() {
    return (
      <ArtistPaintings artists={this.state.artists} />
    );
  }
}

export default HomeStyles;
