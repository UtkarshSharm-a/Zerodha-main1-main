import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container-fluid">
        {/* Logo */}
        <NavLink className="navbar-brand" to="/">
          <img className="logo" style={{ width: "30%" }} src="media/images/logo.svg" alt="logo" />
        </NavLink>

        {/* Hamburger / Close Icon */}
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <span>&#10005;</span> : <span>&#9776;</span>} {/* ✖ / ☰ */}
        </div>

        {/* Navigation Links */}
        <div className={`nav-links ${isOpen ? "active" : ""}`}>
          <ul>
            <li>
              <Link className="Nav-Link1" to="/signup" onClick={() => setIsOpen(false)}>
                SignUp/Login
              </Link>
            </li>
            <li>
              <Link className="Nav-Link1" to="/about" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link className="Nav-Link1" to="/product" onClick={() => setIsOpen(false)}>
                Product
              </Link>
            </li>
            <li>
              <Link className="Nav-Link1" to="/pricing" onClick={() => setIsOpen(false)}>
                Pricing
              </Link>
            </li>
            <li>
              <Link className="Nav-Link1" to="/support" onClick={() => setIsOpen(false)}>
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
