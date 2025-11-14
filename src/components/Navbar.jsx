import React, { useRef } from "react";
import "../style.css";

const Navbar = () => {
  const navRef = useRef();

  // فتح/غلق المنيو بالزرار
  const toggleMenu = () => {
    navRef.current.classList.toggle("show");
  };

  // قفل المنيو عند الضغط على أي لينك
  const closeMenu = () => {
    if (window.innerWidth < 992) {
      navRef.current.classList.remove("show");
    }
  };

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
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
          ref={navRef}
        >
          <ul className="navbar-nav text-center">

            <li className="nav-item mx-3">
              <a className="nav-link" href="#home" onClick={closeMenu}>
                Home
              </a>
            </li>

            <li className="nav-item mx-3">
              <a className="nav-link" href="#about" onClick={closeMenu}>
                About
              </a>
            </li>

            <li className="nav-item mx-3">
              <a className="nav-link" href="#skills-tech" onClick={closeMenu}>
                Skills
              </a>
            </li>

            <li className="nav-item mx-3">
              <a className="nav-link" href="#projects" onClick={closeMenu}>
                Projects
              </a>
            </li>

            <li className="nav-item mx-3">
              <a className="nav-link" href="#contact" onClick={closeMenu}>
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




