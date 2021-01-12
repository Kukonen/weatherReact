import React from 'react'

import './Header.css'
import {Link} from "react-router-dom";
import Washington from "../Washington/Washington";

const Header = () => {
    return (
        <div className="Header">
            <Link to="/" className="nameSite">Weather!!! </Link>
            <Link to="/London" className="changeCityLink">London</Link>
            <Link to="/Washington" className="changeCityLink">Washington</Link>
            <Link to="/Kiev" className="changeCityLink">Kiev</Link>
            <Link to="/Moscow" className="changeCityLink">Moscow</Link>
        </div>
    )
}

export default Header;