import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Optional CSS for styling

function Header() {
  return (
    <header>
      <div className="header-left">PORTFOLIO</div>
      <nav className="header-right">
        <ul>
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/about" className="nav-link">About</Link></li>
          <li><Link to="/projects" className="nav-link">Projects</Link></li>
          <li><Link to="/contact" className="nav-link">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
