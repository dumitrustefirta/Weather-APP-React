import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export function Header() {
    const [navOpen, setNavOpen] = useState(false);
    const optionsDate = {year : "numeric",  month : "short", day : "2-digit"};

    return (
        <header className="header">
            <Link to="/" id="logo-home">WeatherAPP</Link>
            <div id="date">{new Date().toLocaleDateString("en-GB", optionsDate)}</div>
            <div className="menu-btn" onClick={ () => setNavOpen(!navOpen)}>
                <div className={`menu-btn__burger ${navOpen ? 'open' : ''}`}></div>
            </div>
            <nav className={`nav ${navOpen ? 'open' : ''}`}>
                <ul className={`menu-nav ${navOpen ? 'open' : ''}`} >
                    <li className={`menu-nav__item ${navOpen ? 'open' : ''}`} id="index">
                        <NavLink exact activeClassName='active' to="/" className="menu-nav__link" onClick={ () => setNavOpen(false)}>Home</NavLink>
                    </li>
                    <li className={`menu-nav__item ${navOpen ? 'open' : ''}`} id="forecast">
                        <NavLink exact activeClassName='active' to="/forecast" className="menu-nav__link" onClick={ () => setNavOpen(false)}>Forecast</NavLink>
                    </li>
                    <li className={`menu-nav__item ${navOpen ? 'open' : ''}`} id="list">
                        <NavLink exact activeClassName='active' to="/list" className="menu-nav__link" onClick={ () => setNavOpen(false)}>List</NavLink>
                    </li>
                    <li className={`menu-nav__item ${navOpen ? 'open' : ''}`} id="about">
                        <NavLink exact activeClassName='active' to="/about" className="menu-nav__link" onClick={ () => setNavOpen(false)}>About</NavLink>
                    </li>
                </ul>
            </nav>
        </header>)
}