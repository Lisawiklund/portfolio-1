import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css'; 

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <Link to="/">Hem</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/kontakt">Kontakta mig</Link>
      </nav>
    </header>
  );
};

export default Header;
