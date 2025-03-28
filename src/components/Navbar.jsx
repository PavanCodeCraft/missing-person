// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Missing Persons</div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/report">Report Missing Person</Link></li>
        <li><Link to="/browse">Browse Cases</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;