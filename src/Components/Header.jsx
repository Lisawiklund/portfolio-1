import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
     <Link to="/" className="logo">
        <img src="/logotype.png" alt="Lisas Logo" />
      </Link>


      <div className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Hem</Link></li>
        <li><Link to="/portfolio" onClick={() => setMenuOpen(false)}>Portfolio</Link></li>
        <li><Link to="/kontakt" onClick={() => setMenuOpen(false)}>Kontakta mig</Link></li>
      </ul>
    </header>
  );
};

export default Header;
