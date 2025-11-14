import React from "react";
import "../style.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-5">
      <div className="container text-center">
        <h2 className="fw-bold mb-3 highlight">Get In Touch</h2>
        <p className="mb-5" style={{ maxWidth: "650px", margin: "0 auto" }}>
         Let’s connect! Whether you have a project, an idea, or just want to say hi—I'm here.
        </p>

        <div className="row justify-content-center">

          {/* CONTACT INFO CARD */}
          <div className="col-lg-6 mb-4">
            <div className="contact-card text-start">
              <h3 className="fw-bold mb-3">Contact Information</h3>

              <p className="d-flex align-items-center mb-3">
                <FaEnvelope className="contact-icon me-3" />
               moazwael2210@icloud.com
              </p>

              <p className="d-flex align-items-center mb-3">
                <FaPhone className="contact-icon me-3" />
                +20 122 559 6595
              </p>

              <p className="d-flex align-items-center">
                <FaMapMarkerAlt className="contact-icon me-3" />
                Egypt, Ismailia
              </p>
            </div>
          </div>

          {/* SOCIALS CARD */}
          <div className="col-lg-6 mb-4">
            <div className="contact-card text-start">
              <h3 className="fw-bold mb-3">Follow Me</h3>

              <div className="d-flex gap-4 fs-3">
                <a href="https://github.com/moazwaelamer" target="_blank" rel="noreferrer">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/moaz-wael-4bb290377" target="_blank" rel="noreferrer">
                  <FaLinkedin color="#0a66c2" />
                </a>
                <a href="https://www.facebook.com/share/1Yo4kAJVU5/?mibextid=wwXIfr" target="_blank" rel="noreferrer">
                  <FaFacebook color="#1877f2" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;

