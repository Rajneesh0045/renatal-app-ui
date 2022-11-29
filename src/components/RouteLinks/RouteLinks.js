import React from "react";
import {HashLink as Link} from 'react-router-hash-link';
import './RouteLinks.css';

const RouteLinks = () => (
    <div className="RouteLinks">
        <ul>

            <li>
            <Link to='#explorePage' smooth>
                Explore
            </Link>
            </li>
            <li>
            <Link to='#aboutPage' smooth>
                About Us
            </Link>
            </li>
            <li>Cities</li>
            <li>Call</li>
        </ul>
    </div>
)

export default RouteLinks;