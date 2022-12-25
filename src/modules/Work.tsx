import React from "react";
import { projectsData } from "../constants/projectsData";

const Work = () => {
  return (
    <>
      <h1 className="font-extrabold text-2xl md:text-5xl xl:text-3xl capitalize flex justify-center text-bgBlack">
        my latest projects
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 justify-between items-center gap-6 lg:gap-8">
        {projectsData.map((project) => {
          return (
            <>
              <div className="h-full w-full flex flex-col gap-4">
                <div className="group relative">
                  <picture>
                    <img
                      src={"/assets/pexels2.jpg"}
                      alt="profile"
                      className="w-full h-[250px] md:h-[300px] overflow-hidden object-cover rounded-lg"
                    />
                  </picture>

                  <div className="absolute overflow-hidden top-0 left-0 rounded-lg w-full h-0 flex flex-col justify-center bg-textLightBlack text-white opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
                    <h1 className="text-base md:text-lg xl:text-base font-medium text-center">
                      {project.name}
                    </h1>
                    <div className="mt-5 p-2 lg:p-6 text-xs md:text-sm xl:text-xs duration-300">
                      {project.description}
                    </div>
                    <button>view on github</button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Work;
