import React from "react";

const Home = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-2 py-20">
      <div className="flex flex-col justify-center gap-3 h-full text-5xl text-purple-700 font-medium px-6">
        <div>Hi,There </div>
        <div>
          I am <span className="text-red-500 italic"> Bijay Subedi</span>
        </div>
        <div>
          I am a <span className="text-red-500 italic">web developer</span>
        </div>
      </div>

      <picture>
        <img
          src={"/assets/bijay.png"}
          alt="profile"
          className="h-[450px] w-[450px] object-cover "
        />
      </picture>
    </div>
  );
};

export default Home;
