import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export function Header() {
    return (
        <header className="header">
            <Link to="/" id="logo-home">WeatherAPP</Link>
            <div id="date"></div>
            <div className="menu-btn">
                <div className="menu-btn__burger"></div>
            </div>
            <nav className="nav">
                <ul className="menu-nav" >
                    <li className="menu-nav__item" id="index">
                        <NavLink exact activeClassName='active' to="/" className="menu-nav__link">Home</NavLink>
                    </li>
                    <li className="menu-nav__item" id="forecast">
                        <NavLink exact activeClassName='active' to="/forecast" className="menu-nav__link">Forecast</NavLink>
                    </li>
                    <li className="menu-nav__item" id="list">
                        <NavLink exact activeClassName='active' to="/list" className="menu-nav__link">List</NavLink>
                    </li>
                    <li className="menu-nav__item" id="about">
                        <NavLink exact activeClassName='active' to="/about" className="menu-nav__link">About</NavLink>
                    </li>
                </ul>
            </nav>
        </header>)
}