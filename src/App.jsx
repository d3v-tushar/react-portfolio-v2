import React, { useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MySkills from "./components/MySkills";
import MyProjects from "./components/MyProjects";
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  AOS.init({
  delay: 600, // values from 0 to 3000, with step 50ms
  duration: 600, // values from 0 to 3000, with step 50ms
  });
  return (
    <div className="app overflow-hidden">
      <Navbar />
      {/* <Bot /> */}
      <Hero />
      <About />
      <MySkills></MySkills>
      <Skills />
      <MyProjects/>
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
