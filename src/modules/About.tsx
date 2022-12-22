import React from "react";

const About = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-20 py-10">
      <div className="flex flex-col justify-center gap-10 h-full px-6">
        <h1 className="font-extrabold text-5xl capitalize">about me</h1>
        <div className="flex flex-col justify-center gap-6 text-xl text-headingBlack">
          <p>
            {` Our team is made up of a blend of cultures, backgrounds and talents.
            Because we're firm believers in different perspectives adding up to
            a greater whole.`}
          </p>
          <p>
            {` Lorem ipsum is simply dummy text of the printing and typesetting
            industry.Lorem ipsum has been the industry's standard dummy text
            ever since the 1500s,`}
          </p>
        </div>
      </div>

      <div className="h-full w-full">
        <picture>
          <img
            src={"/assets/pexels2.jpg"}
            alt="profile"
            className="overflow-hidden object-cover rounded-lg"
          />
        </picture>
      </div>
    </div>
  );
};

export default About;
