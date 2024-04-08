import React from 'react';
import { Link } from 'react-router-dom';
//import './Navigation.css';


import styled, { keyframes } from 'styled-components';
import { slideInDown, headShake } from 'react-animations';

const slideAnimation = keyframes`${slideInDown}`;
const btnAnimation = keyframes`${headShake}`;
const AnimatedNavigation = styled.nav`
    animation: 1s ${slideAnimation};
`;

const Navigation = (props) => {

    return (
        <AnimatedNavigation>
                <Link to='/styles'>
                    <StylesButton>Styles</StylesButton>
                </Link>
                
                <Link to='/antd'>
                    <StylesButton_2>Antd</StylesButton_2>
                </Link>
                <Link to='/recharts'>
                    <StylesButton_3>Recharts</StylesButton_3>
                </Link>    
        </AnimatedNavigation>        
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
        animation: 1s ${btnAnimation};
    }
    &:active {
        background: #F69997;
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



/*
import styles from './NavButton.module.css';
const Navigation = (props) => {
    return (
        <nav>
            <Link to='/styles'>
                <button className={styles.btn1}>Styles</button>
            </Link>
            <Link to='/antd'>
                <button className={styles.btn2}>Antd</button>
            </Link>
            <Link to='/recharts'>
                <button className={styles.btn3}>Recharts</button>
            </Link>
        </nav>
    );
};
*/

export default Navigation;