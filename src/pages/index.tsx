import React from "react";
import About from "../modules/About";
import Contact from "../modules/Contact";
import Home from "../modules/Home";
import Skill from "../modules/Skill";
import Work from "../modules/Work";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col gap-20">
        <Home />
        <About />
        <Skill />
        <Work />
        <Contact />
      </div>
    </>
  );
};

export default HomePage;
