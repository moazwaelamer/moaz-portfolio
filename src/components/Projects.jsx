import React from "react";
import "../style.css";
import { FaEye, FaGithub } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "Flowers Home Store",
      description:
        "An elegant online flower shop built with React and pure CSS. Users can browse and order flowers through a clean and simple interface.",
      tech: ["React", "CSS", "HTML", "Java"],
      image:
        "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800",
      demoLink: "https://flowers-home-store-zdvn.vercel.app/",
      githubLink: "https://github.com/moazwaelamer/Flowers-Home-Store",
    },
    {
      title: "Go iPhone Store",
      description:
        "A sleek React-based e-commerce website for Apple products with smooth navigation and responsive layouts.",
      tech: ["React", "CSS", "HTML", "Java"],
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800",
      demoLink: "https://go-iphone-store.vercel.app/",
      githubLink: "https://github.com/moazwaelamer/Go-Iphone-Store",
    },
  ];

  return (
    <section id="projects" className="py-5" data-aos="fade-up">
      <div className="container text-center">
        
        <h2
          className="fw-bold mb-5 highlight"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          My Projects
        </h2>

        <div className="row justify-content-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="col-md-5 mb-4"
              data-aos="fade-up"
              data-aos-delay={200 + index * 200}
            >
              
              <div className="project-card">
                
                <div
                  className="project-image-wrapper"
                  data-aos="zoom-in"
                  data-aos-delay="100"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                </div>

                <div className="p-4 text-start">
                  <h4
                    className="fw-bold mb-2"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    {project.title}
                  </h4>

                  <p
                    className="mb-3"
                    style={{ minHeight: "60px" }}
                    data-aos="fade-up"
                    data-aos-delay="250"
                  >
                    {project.description}
                  </p>

                  <div className="mb-3" data-aos="fade-up" data-aos-delay="300">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="badge bg-secondary me-2 mb-2"
                        style={{ fontSize: "0.85rem" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* ==== Buttons with Icons ==== */}
                  <div
                    className="d-flex justify-content-center gap-3"
                    data-aos="fade-up"
                    data-aos-delay="350"
                  >
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hero-btn-primary d-flex align-items-center gap-2"
                    >
                      <FaEye size={18} />
                      Live Demo
                    </a>

                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hero-btn-outline d-flex align-items-center gap-2"
                    >
                      <FaGithub size={18} />
                      GitHub
                    </a>
                  </div>

                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;

