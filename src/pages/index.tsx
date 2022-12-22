import React from "react";
import About from "../modules/About";
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
      </div>
    </>
  );
};

export default HomePage;
