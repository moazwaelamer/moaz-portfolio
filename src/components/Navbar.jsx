import React from "react";
import "../style.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar fixed-top shadow-sm">
      <div className="container">

        {/* Logo */}
        <a className="navbar-brand fw-bold fs-4" href="#home">
          Moaz Wael
        </a>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto text-center">
            <li className="nav-item">
              <a className="nav-link" href="#home" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#about" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#skills-tech" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                Skills
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#projects" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                Projects
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contact" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                Contact
              </a>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
