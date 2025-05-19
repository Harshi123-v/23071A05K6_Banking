import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">Banking Website</div>
      <nav className="nav">
        <ul>
          <li><NavLink to="/registration" activeclassname="active">Register</NavLink></li>
          <li><NavLink to="/login" activeclassname="active">Login</NavLink></li>
          <li><NavLink to="/balance" activeclassname="active">Balance</NavLink></li>
          <li><NavLink to="/transfers" activeclassname="active">Transfers</NavLink></li>
          <li><NavLink to="/profile" activeclassname="active">Profile</NavLink></li>
          <li><NavLink to="/contact" activeclassname="active">Contact</NavLink></li>
          <li><NavLink to="/about" activeclassname="active">About</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
