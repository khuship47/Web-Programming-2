import './App.css'
import Home from './components/Home.jsx'
import Layout from './components/Layout.jsx'
import Client from './components/Client.jsx'
import Company from './components/Company.jsx'
import { Routes, Route, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react';

function App() {
  const [clients, setClients] = useState([]);
  const [currentClient, setCurrentClient] = useState({});
  const [portfolioData, setPortfolioData] = useState([]);
  const [historyData, setHistoryData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
      // Fetch the list of clients from the provided API URL
      fetch('https://www.randyconnolly.com/funwebdev/3rd/api/stocks/client.php')
          .then((response) => response.json())
          .then((data) => setClients(data))
          .catch((error) => console.error('Error fetching clients:', error));
  }, []);

  
  const handleClientSelection = (client) => {
      setCurrentClient(client); 
      navigate(`/Client`); // Pass client details as state   
  };

  useEffect(() => {
    if (currentClient.id) {
      // Fetch portfolio data for currentClient
      fetch(`https://www.randyconnolly.com/funwebdev/3rd/api/stocks/portfolio.php?id=${currentClient.id}`)
        .then(response => response.json())
        .then(data => setPortfolioData(data))
        .catch(error => console.error('Error fetching portfolio data:', error));
    }
  }, [currentClient.id]);

  
  const handleCompanyClick = (company) => {
    if (company.symbol) {
      // Fetch historical data for currentClient.symbol
      fetch(`https://www.randyconnolly.com/funwebdev/3rd/api/stocks/history.php?symbol=${company.symbol}`)
        .then(response => response.json())
        .then(data => setHistoryData(data))
        .catch(error => console.error('Error fetching history data:', error));
    }
    navigate(`/Company`);
  };

  return (
    
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<Home handleClientSelection={handleClientSelection} clients={clients}/>} />
        <Route path='/Client' element={<Client currentClient={currentClient} portfolioData={portfolioData} handleCompanyClick={handleCompanyClick}/>} />
        <Route path='/Company' element={<Company historyData={historyData} />} />
      </Route>
    </Routes>
  
   
  )
}

export default App
