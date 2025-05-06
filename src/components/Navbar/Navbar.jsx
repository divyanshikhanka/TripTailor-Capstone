import { useState } from 'react';
import './Navbar.css';

const Navbar = ({ scrolled }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        <div className="navbar-logo">
          <a href="/">Trip Tailor</a>
        </div>

        <div className={`navbar-menu-toggle ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#" className="active">Home</a></li>
            <li><a href="#destinations">Explore</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <div className={`navbar-auth ${menuOpen ? 'open' : ''}`}>
          <a href="#" className="login-btn">Log in</a>
          <a href="#" className="btn btn-primary signup-btn">Sign up</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;