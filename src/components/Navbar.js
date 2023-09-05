import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';

const Navbar = () => (
  <header>
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img
          src="logo.jpg"
          alt="Logo"
          width="40"
          height="40"
        />
        <span className="navbar-text">Space Travelers Hub</span>
      </Link>
      <ul className="nav-links">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Rockets
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/missions" className="nav-link">
            Missions
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/mypage" className="nav-link">
            My Page
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
