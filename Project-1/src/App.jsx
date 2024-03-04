import { useState } from 'react'
import './App.css'
import Home from './components/Home.jsx'
import Layout from './components/Layout.jsx'
import { Routes, Route, useNavigate } from 'react-router-dom'

function App() {
  return (
    
    <Routes>
       <Route path='/' element={<Home />} />
    </Routes>
  
   
  )
}

export default App
