import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';


const Navigation = (props) => {

    return (
        <nav>
            <Link to='/styles'>
                <button className="btn btn1">Styles</button>
            </Link>
            <Link to='/antd'>
                <button className="btn btn2">Antd</button>
            </Link>
            <Link to='/recharts'>
                <button className="btn btn3">Recharts</button>
            </Link>            
        </nav>  
    );


}


export default Navigation;