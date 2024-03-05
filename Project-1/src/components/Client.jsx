import React from 'react';

const Client = (props) => {
    //const { firstname, lastname, id, city, country, email } = props.location.state;

    return (
        <>
            <div className="home-page"> Client Details </div>
            <div className='client-details'>
                <p>Name: {props.currentClient.firstname} {props.currentClient.lastname}</p>
                <p>ID: {props.currentClient.id}</p>
                <p>City: {props.currentClient.city}</p>
                <p>Country: {props.currentClient.country}</p>
                <p>Email: {props.currentClient.email}</p>
            </div>
            
        </>
    );
};

export default Client;
