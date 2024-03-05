import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = ({handleClientSelection, clients}) => {
    return (
        <>
        <div className="home-page">Home</div>
            <div className='dropdown-menu'>
                <select
                    onChange={(e) => {
                        const selectedClientId = e.target.value;
                        const selectedClient = clients.find(client => client.id === parseInt(selectedClientId));
                        handleClientSelection(selectedClient);
                    }}
                >
                    <option value="" disabled>
                        Choose a Client...
                    </option>
                    {clients.map((client) => (
                        <option key={client.id} value={client.id}>
                            {`${client.firstname} ${client.lastname}`}
                        </option>
                    ))}
                </select>
            </div>

        </>
    );
};

export default Home;
