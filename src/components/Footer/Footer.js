import React from 'react';
import './Footer.css'
import RouteLinks from '../RouteLinks/RouteLinks';

const Footer = () => (
    <div className='Footer'>
        <div className='appLogo'>
            <h1>Your Logo</h1>
            <p>©  2021  Company Name All rights reserved</p>
        </div>
        <div className='routeLinks'>
            <RouteLinks></RouteLinks>
        </div>
    </div>
)

export default Footer;