import React from 'react';
import { Link } from 'react-router-dom';
//import './Navigation.css';
import styled from 'styled-components';


const Navigation = (props) => {

    return (
        <nav>
            <Link to='/styles'>
                <StylesButton>Styles</StylesButton>
            </Link>
            <Link to='/antd'>
                <StylesButton_2>Styles</StylesButton_2>
            </Link>
            <Link to='/recharts'>
                <StylesButton_3>Styles</StylesButton_3>
            </Link>            
        </nav>  
    );
}

const NavButton = styled.button`
    border: none;
    background: none;
    cursor: pointer;
    padding: 25px 50px;
    display: inline-block;
    margin: 15px 15px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 700;
    outline: none;
    color: #fff;
`;

const StylesButton = styled(NavButton)`
    background: #F25F5C;
    &:hover {
        background: #9B3D3B;
    }
`;

const StylesButton_2 = styled(NavButton)`
    background: #867636;
    &:hover {
        background: #594E24;
    }
`;

const StylesButton_3 = styled(NavButton)`
    background: #404E7C;
    &:hover {
        background: #29324F;
    }
`;
export default Navigation;