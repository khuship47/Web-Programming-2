import './App.css'
import Home from './components/Home.jsx'
import Layout from './components/Layout.jsx'
import Client from './components/Client.jsx'
import { Routes, Route, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react';

function App() {
  const [clients, setClients] = useState([]);
  const [currentClient, setCurrentClient] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
      // Fetch the list of clients from the provided API URL
      fetch('https://www.randyconnolly.com/funwebdev/3rd/api/stocks/client.php')
          .then((response) => response.json())
          .then((data) => setClients(data))
          .catch((error) => console.error('Error fetching clients:', error));
  }, []);

  const handleClientSelection = (client) => {
      navigate(`/Client`); // Pass client details as state   
      setCurrentClient(client); 
  };
  
  return (
    
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<Home handleClientSelection={handleClientSelection} clients={clients}/>} />
        <Route path='/Client' element={<Client currentClient={currentClient}/>} />
      </Route>
    </Routes>
  
   
  )
}

export default App
