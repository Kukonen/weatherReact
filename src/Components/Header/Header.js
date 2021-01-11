import React from 'react'

import './Header.css'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="Header">
            <Link to="/" className="nameSite">Weather!!! </Link>
            <Link to="/England" className="changeCityLink">England</Link>
            <Link to="/USA" className="changeCityLink">USA</Link>
            <Link to="/Russia" className="changeCityLink">Russia</Link>
            <Link to="/Ukraine" className="changeCityLink">Ukraine</Link>
        </div>
    )
}

export default Header;