import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import HomeStyles from './components/HomeStyles.js';
import HomeAntd from './components/HomeAntd.js';
import HomeRechart from './components/HomeRechart.js';

import Navigation from './components/Navigation.js';

const App = (props) => {


  return (
    <div>
      <header>
        <h2>Lab11c - React 3</h2>
        <Navigation />
      </header>
      <main>
        <Route path='/styles' exact component={HomeStyles} /> 
        <Route path='/antd' exact component={HomeAntd} />
        <Route path='/recharts' exact component={HomeRechart} />
        
      </main>  
    </div>
  );

};

export default App;
