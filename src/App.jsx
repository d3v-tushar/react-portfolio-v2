import React, { useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MySkills from "./components/MySkills";
//import Bot from "./components/Bot";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      {/* <Bot /> */}
      <Hero />
      <About />
      <Skills />
      <Hireme />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
