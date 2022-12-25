import React from "react";

const Home = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-center md:justify-between items-center gap-2 py-20">
      <div className="flex flex-col justify-center gap-3 h-full text-lg md:text-xl lg:text-4xl text-purple-700 font-medium px-6">
        <div>Hi,There </div>
        <div>
          I am <span className="text-red-500 italic"> Bijay Subedi</span>
        </div>
        <div>
          I am a <span className="text-red-500 italic">web developer</span>
        </div>
      </div>

      <picture className="flex justify-center items-center">
        <img
          src={"/assets/bijay-subedi.png"}
          alt="profile"
          className="h-[300px] w-[300px] lg:h-[450px] lg:w-[450px] object-cover rounded-full"
        />
      </picture>
    </div>
  );
};

export default Home;
