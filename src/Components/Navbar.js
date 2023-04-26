import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/" style={{ textDecoration: 'none' }}>Home</Link></li>
        <li><Link to="/about" style={{ textDecoration: 'none' }}>About</Link></li>
        <li><Link to="/projects"style={{ textDecoration: 'none' }}>Projects</Link></li>
        <li><Link to="/contact"style={{ textDecoration: 'none' }}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
