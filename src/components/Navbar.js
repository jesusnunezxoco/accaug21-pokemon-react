import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const hamburgerButton = (
    <button
      className="navbar-burger"
      aria-label="menu"
      aria-expanded="false"
      data-target="navbarBasicExample"
    >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </button>
  );
  return (
    <nav
      className="navbar is-dark is-spaced"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">{hamburgerButton}</div>
      <div className="navbar-menu">
        <div className="navbar-start ">
          <Link to="/" className="navbar-item">
            Home
          </Link>
          <Link to="/favorites" className="navbar-item">
            Favorites
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
