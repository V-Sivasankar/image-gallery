import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <h1 className="logo">
        Wander<span>Snap</span>
      </h1>


      {/* Desktop Navigation */}

      <ul className="nav-links">

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/gallery">Gallery</Link>
        </li>

      </ul>


      {/* Mobile Menu Button */}

      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>


      {/* Mobile Menu */}

      {menuOpen && (
        <div className="mobile-menu">

          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/gallery"
            onClick={() => setMenuOpen(false)}
          >
            Gallery
          </Link>

        </div>
      )}

    </nav>
  );
}

export default Navbar;