import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skiils";
import Projects from "./components/Projects";
import Contact from "./components/contact";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: false,
    });
  }, []);

  return (
    <>
      {/* NAVBAR لازم يكون أول حاجة */}
      <Navbar />

      {/* باقي أجزاء الموقع */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
