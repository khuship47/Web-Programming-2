//import logo from './logo.svg';
import './App.css';
//import React from "react";
import React, { useEffect, useState } from 'react';
import HeaderApp from './components/HeaderApp.js';
//import PhotoThumb from './components/PhotoThumb.js';
import PhotoBrowser from './components/PhotoBrowser.js';


function App() {
  
  const [photos, setPhotos] = useState([]);

  /*
  useEffect( () => { 
    const url = "https://www.randyconnolly.com/funwebdev/3rd/api/travel/images.php?iso=gb";
    fetch(url)
      .then( resp => resp.json() )
      .then( data => setPhotos(data)) 
      .catch( err => console.error(err));
  });
  */

  useEffect( () => {
    const getData = async () => {

      try {
        const url = "https://www.randyconnolly.com/funwebdev/3rd/api/travel/images.php?iso=gb";
        const response = await fetch(url); const data = await response.json(); setPhotos(data);
      }
      catch (err) {
        console.error(err); 
      }
    };
    // invoke the async function
    getData(); 
  }, [] );
  
  return ( 
    <main>
    <HeaderApp />
    <PhotoBrowser photos={photos} /> 
    </main>
  );
}
export default App;


/*
class App extends React.Component { 

  constructor(props) { 
    super(props);
    this.state = { photos: [] };
  }

  async componentDidMount() { 
    try {
      const url = "https://randyconnolly.com/funwebdev/3rd/api/travel/images.php?iso=gb";
      const response = await fetch(url); const jsonData = await response.json(); this.setState( {photos: jsonData } );
    }
    catch (error) {
      console.error(error); 
    }
  }

  render() {
    return (
      <main> 
        <HeaderApp />
        <PhotoBrowser photos={this.state.photos}/>
      </main>
    ); 
  }
}
export default App;
*/

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
//export default App;
