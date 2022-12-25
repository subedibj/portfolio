import React from "react";
import About from "../modules/About";
import Contact from "../modules/Contact";
import Home from "../modules/Home";
import Skill from "../modules/Skill";
import Work from "../modules/Work";

const HomePage = () => {
  return (
    <div className="grid grid-cols-1 gap-20">
      <Home />
      <About />
      <Skill />
      <Work />
      <Contact />
    </div>
  );
};

export default HomePage;
