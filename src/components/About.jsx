  import React from "react";
  import "../style.css";

  const About = () => {
    return (
      <section id="about" className="about-wrapper" data-aos="fade-up">
        <div className="container">
          
        <div className="row align-items-start">

    {/* LEFT SIDE – JOURNEY */}
    <div
      className="col-lg-6 mb-5"
      data-aos="fade-right"
      data-aos-delay="100"
    >
      <h2 className="about-title">My Journey</h2>

      <p className="about-text" data-aos="fade-up" data-aos-delay="150">
        My tech journey began when I joined university in 
        <span className="special"> September 2023</span>, where my curiosity
        for how software and websites work grew into a real passion.
      </p>

      <p className="about-text" data-aos="fade-up" data-aos-delay="250">
        In <span className="special">January 2024</span>, I started studying 
        Artificial Intelligence and explored Machine Learning, Deep Learning, CNN,
        and Python—building hands-on projects and experiments on Kaggle.
      </p>

      <p className="about-text" data-aos="fade-up" data-aos-delay="300">
        During university, I gained strong fundamentals in 
        <span className="special"> C, C#, Python, SQL, and Prolog</span>, 
        which shaped my understanding of programming and problem-solving.
      </p>

      <p className="about-text" data-aos="fade-up" data-aos-delay="350">
        In <span className="special">January 2025</span>, I shifted my focus to 
        Frontend Development, learning React, JavaScript, and TailwindCSS while 
        building real-world projects and sharpening my UI/UX abilities.
      </p>

      <p className="about-text" data-aos="fade-up" data-aos-delay="400">
        Now in <span className="special">2025</span>, I’ve started my backend 
        development journey, aiming to become a 
        <span className="special"> Full-Stack Developer by 2026</span>.
        I am also set to graduate in <span className="special">July 2027</span>.
      </p>
    </div>

            {/* RIGHT SIDE – EXPERIENCE */}
            <div
              className="col-lg-6"
              data-aos="fade-left"
              data-aos-delay="150"
            >
              <h2 className="about-title">Experience</h2>

              <div className="exp-timeline">

    <div className="exp-item" data-aos="fade-up" data-aos-delay="200">
                  <div className="exp-dot"></div>
                  <div className="exp-card">
                    <div className="exp-header">
                      <h4>Backend Developer (In Progress)</h4>
                      <span className="exp-time">Nov 2025 – 2026</span>
                    </div>
                    <p className="exp-company">💻 Backend Developer (In Progress)</p>
                    <p className="exp-desc">
                  Currently learning backend development foundations.
                  
                  Following a roadmap toward becoming a full-stack web developer by 2026.</p>
                  </div>
                </div>
    

                <div className="exp-item" data-aos="fade-up" data-aos-delay="200">
                  <div className="exp-dot"></div>
                  <div className="exp-card">
                    <div className="exp-header">
                      <h4>Frontend Developer</h4>
                      <span className="exp-time">Jan 2025 – Oct 2025</span>
                    </div>
                    <p className="exp-company">💻 Frontend Developer</p>
                    <p className="exp-desc">
                      Worked with React, building responsive UIs.
                    Built responsive UIs using React, JavaScript, and TailwindCSS.
                    Developed multiple real-world projects including e-commerce templates and personal websites.
                    Focused on clean UI/UX, component systems, and performance optimizations</p>
                  </div>
                </div>

                <div className="exp-item" data-aos="fade-up" data-aos-delay="300">
                  <div className="exp-dot"></div>
                  <div className="exp-card">
                    <div className="exp-header">
                      <h4>Mid-Level Frontend Developer</h4>
                      <span className="exp-time"> Jan 2024 – Aug 2024</span>
                    </div>
                    <p className="exp-company">🤖 AI & Machine Learning Trainee</p>
                    <p className="exp-desc">
                    
                  Trained on Python, ML pipelines, Neural Networks, Deep Learning, and CNN architectures.
                  Implemented ML notebooks and datasets on Kaggle.
                  Built strong foundations in AI problem-solving and model evaluation.
                    </p>
                  </div>
                </div>

                {/* ITEM 3 */}
                <div className="exp-item" data-aos="fade-up" data-aos-delay="400">
                  <div className="exp-dot"></div>
                  <div className="exp-card">
                    <div className="exp-header">
                      <h4>Faculty of Computers & Information</h4>
                      <span className="exp-time"> Sep 2023 – Jul 2027(Expected Graduation)</span>
                    </div>
                    <p className="exp-company">Faculty of Computers & Information</p>
                    <p className="exp-desc">
                  Studied C, C#, Python, SQL, Prolog, and core CS concepts.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    );
  };

  export default About;




