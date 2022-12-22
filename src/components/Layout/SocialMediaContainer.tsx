import React from "react";
import { FiFacebook, FiInstagram, FiPhone } from "react-icons/fi";
import { AiFillLinkedin } from "react-icons/ai";

const SocialMediaContainer = () => {
  return (
    <>
      <div className="h-screen md:mx-20 lg:mx-28 flex flex-col justify-center items-center fixed">
        <div className="flex flex-col justify-center items-center w-10 bg-red-400 cursor-pointer py-4 gap-6">
          <div className="flex items-center justify-center rounded-full h-8 w-8 bg-white gap-4">
            <span>
              <FiFacebook className="h-6 w-6" />
            </span>
            {/* facebook */}
          </div>
          <div className="flex items-center justify-center rounded-full h-8 w-8 bg-white gap-4">
            <span>
              <FiInstagram className="h-6 w-6" />
            </span>
            {/* instagram */}
          </div>
          <div className="flex items-center justify-center rounded-full h-8 w-8 bg-white gap-4">
            <span>
              <AiFillLinkedin className="h-6 w-6" />
            </span>
            {/* linkedin */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialMediaContainer;
