import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

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
        <Routes>
        <Route path='/styles' element={<HomeStyles/>} /> 
        <Route path='/antd' element={<HomeAntd/>} />
        <Route path='/recharts' element={<HomeRechart/>} />
        </Routes>
      </main>  
    </div>
  );

};

export default App;
