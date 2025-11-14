import React from "react";
import "../style.css";
import { SiC } from "react-icons/si";
// Icons
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaCuttlefish  ,FaPython } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "HTML", level: 95, icon: <FaHtml5 color="#E34F26" size={28} /> },
    { name: "CSS", level: 90, icon: <FaCss3Alt color="#1572B6" size={28} /> },
    { name: "JavaScript", level: 85, icon: <FaJs color="#F7DF1E" size={28} /> },
    { name: "React", level: 90, icon: <FaReact color="#61DBFB" size={28} /> },
    { name: "TailwindCSS", level: 95, icon: <SiTailwindcss color="#38BDF8" size={28} /> },

    // ⭐ New Skill: C#
    { name: "C#", level: 80, icon: <FaCuttlefish  color="#239120" size={28} /> },
    { name: "C", level: 85, icon: <SiC  color="#0f6eed" size={28} /> },
    // ⭐ New Skill: Python
    { name: "Python", level: 85, icon: <FaPython  color="#3776AB" size={28} /> },
  ];

  return (
    <section id="skills-tech" className="py-5" data-aos="fade-up">
      <div className="container">

        <h2 className="fw-bold text-center mb-4 highlight" data-aos="fade-up">
          Skills & Technologies
        </h2>

        <p
          className="text-center mb-5"
          style={{ maxWidth: "650px", marginInline: "auto" }}
          data-aos="fade-up"
          data-aos-delay="150"
        >
          A quick overview of the technologies I use to build modern, clean, and fast web applications.
        </p>

        <div className="row g-4">
          {skills.map((skill, index) => (
            <div
              className="col-md-6"
              key={index}
              data-aos="fade-up"
              data-aos-delay={200 + index * 150}
            >
              <div className="skill-card d-flex align-items-center gap-3">
                <div>{skill.icon}</div>

                <div className="w-100">
                  <div className="d-flex justify-content-between">
                    <strong>{skill.name}</strong>
                    <span>{skill.level}%</span>
                  </div>

                  <div className="progress mt-2" style={{ height: "8px" }}>
                    <div
                      className="progress-bar"
                      style={{
                        width: `${skill.level}%`,
                        background: "var(--accent)",
                      }}
                    ></div>
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

export default Skills;


