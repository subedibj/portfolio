import React from "react";
import { projectsData } from "../constants/projectsData";

const Work = () => {
  return (
    <>
      <h1 className="font-extrabold flex justify-center text-5xl capitalize">
        My Latest Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-between items-center gap-6 py-10">
        {projectsData.map((project) => {
          return (
            <>
              <div className="h-full w-full">
                <picture>
                  <img
                    src={"/assets/background.jpg"}
                    alt="profile"
                    className="w-full h-full overflow-hidden object-cover rounded-lg"
                  />
                </picture>
              </div>
              <div className="h-full w-full">
                <div className="text-lg font-semibold">{project.name}</div>
                <div className="text-base font-medium">
                  {project.description}
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
