import React from 'react';
import './Header.css'
import RouteLinks from '../RouteLinks/RouteLinks'

const Header = () => (
    <div className='Header'>
        <div className='appLogo'>
            <h1>Your Logo</h1>
        </div>
        <div>
            <RouteLinks></RouteLinks>
        </div>
    </div>
)

export default Header;