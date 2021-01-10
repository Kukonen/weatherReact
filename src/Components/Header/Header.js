import React from 'react'

import './Header.css'

const Header = () => {
    return (
        <div className="Header">
            <span className="nameSite">
                Weather!!!
            </span>
            <span className="changeCityLink">England</span>
            <span className="changeCityLink">USA</span>
            <span className="changeCityLink">Russia</span>
            <span className="changeCityLink">Ukraine</span>
        </div>
    )
}

export default Header;