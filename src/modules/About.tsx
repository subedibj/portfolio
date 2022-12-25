import React from "react";

const About = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 justify-between items-center lg:gap-20 xl:gap-16 p-2">
      <div className="flex flex-col justify-center gap-10 h-full px-6">
        <h1 className="font-extrabold text-2xl md:text-5xl xl:text-3xl capitalize text-bgBlack">
          about me
        </h1>

        <p className="text-lg lg:text-xl xl:text-base text-textLightBlack">
          {` Lorem ipsum is simply dummy text of the printing and typesetting
            industry.Lorem ipsum has been the industry's standard dummy text
            ever since the 1500s,`}
        </p>
      </div>

      <div className="h-full w-full">
        <picture>
          <img
            src={"/assets/aboutme.jpg"}
            alt="aboutme"
            className="overflow-hidden object-cover rounded-lg"
          />
        </picture>
      </div>
    </div>
  );
};

export default About;
