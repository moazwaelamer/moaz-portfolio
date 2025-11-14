import React from "react";
import "../style.css";
import { FaDownload, FaEye, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="home" className="hero-section d-flex align-items-center">
      <div className="container text-center">

        {/* Profile Image */}
        <img
         src="./profile.jpg"
          alt="Moaz Wael"
          className="profile-img mb-4"
          data-aos="zoom-in"
        />

        {/* Title */}
        <h1 className="fw-bold mb-3" data-aos="fade-up" data-aos-delay="150">
          Hi, I'm <span className="highlight">Moaz Wael</span> 👋
        </h1>

        <h4 className="mb-4" data-aos="fade-up" data-aos-delay="250">
          Frontend Developer & React.js Enthusiast
        </h4>

        {/* Buttons */}
        <div
          className="d-flex justify-content-center gap-3 flex-wrap mt-3"
          data-aos="fade-up"
          data-aos-delay="350"
        >
         <a
  href="https://drive.google.com/file/d/1s07I-sfSChYacTQGDHaGEZDg82BOevom/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="hero-btn-primary"
>
  <FaDownload size={18} />
  Download CV
</a>


          <a href="#projects" className="hero-btn-outline">
            <FaEye size={18} />
            View Projects
          </a>
        </div>

        {/* SOCIAL ICONS */}
        <div className="hero-socials mt-4" data-aos="fade-up" data-aos-delay="450">
          <a href="https.linkedin.com/in/moaz-wael-4bb290377" target="_blank" className="hero-social-icon">
            <FaLinkedin size={22} />
          </a>

          <a href="https://github.com/moazwaelamer" target="_blank" className="hero-social-icon">
            <FaGithub size={22} />
          </a>

          <a href="mailto:moazwael2210@icloud.com" className="hero-social-icon">
            <FaEnvelope size={22} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
