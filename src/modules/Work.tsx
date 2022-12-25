import React from "react";
import { projectsData } from "../constants/projectsData";

const Work = () => {
  return (
    <>
      <h1 className="font-extrabold flex justify-center text-5xl capitalize">
        My Latest Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-center gap-6 py-10">
        {projectsData.map((project) => {
          return (
            <>
              <div className="h-full w-full flex flex-col gap-4">
                <div className="group relative">
                  <picture>
                    <img
                      src={"/assets/pexels2.jpg"}
                      alt="profile"
                      className="w-full h-[300px] overflow-hidden object-cover rounded-lg"
                    />
                  </picture>

                  <div className="absolute overflow-hidden top-0 left-0 rounded-lg w-full h-0 flex flex-col justify-center items-center bg-textLightBlack text-white opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
                    <h1 className="text-lg md:text-xl xl:text-lg font-medium text-center">
                      {project.name}
                    </h1>
                    <span className="mt-5 p-6 text-sm md:text-base xl:text-sm duration-300">
                      {project.description}
                    </span>
                  </div>
                </div>
                <div className="text-base md:text-lg xl:text-base font-semibold text-center">
                  {project.shortName}
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
