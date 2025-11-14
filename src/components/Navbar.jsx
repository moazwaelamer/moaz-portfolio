import React from "react";
import "../style.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar fixed-top shadow-sm">
      <div className="container">

        <a className="navbar-brand fw-bold fs-4" href="#home">
          Moaz Wael
        </a>

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

        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav text-center">
            <li className="nav-item mx-3"><a className="nav-link" href="#home">Home</a></li>
            <li className="nav-item mx-3"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item mx-3"><a className="nav-link" href="#skills-tech">Skills</a></li>
            <li className="nav-item mx-3"><a className="nav-link" href="#projects">Projects</a></li>
            <li className="nav-item mx-3"><a className="nav-link" href="#contact">Contact</a></li>
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
