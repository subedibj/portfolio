import React from "react";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";

const socialMediaData = [
  {
    name: "facebook",
    icon: <FiFacebook />,
    link: "https://www.facebook.com/bijay.subedi.5817/",
  },
  {
    name: "instagram",
    icon: <FiInstagram />,
    link: "#",
  },
  {
    name: "linkedin",
    icon: <AiFillLinkedin />,
    link: "#",
  },
  {
    name: "github",
    icon: <AiFillGithub />,
    link: "#",
  },
];

const SocialMediaContainer = () => {
  return (
    <>
      <div className="h-screen ml-2 md:ml-4 lg:ml-32 xl:ml-36 flex flex-col justify-center pt-52 items-center fixed z-50">
        <div className="flex flex-col text-left w-[50px] md:w-[150px] cursor-pointer py-4 gap-6">
          {socialMediaData.map((media) => {
            return (
              <>
                <Link
                  href={media.link}
                  target={"_blank"}
                  className="md:hover:bg-primaryPurple text-white overflow-hidden group md:px-1 relative flex flex-row items-center justify-center rounded-full h-8 gap-4 duration-500"
                >
                  <div className="bg-primaryPurple h-8 w-8 flex justify-center items-center text-[24px] rounded-full p-1">
                    {media.icon}
                  </div>
                  <div className="capitalize opacity-0 w-0 md:group-hover:w-[100px] md:group-hover:opacity-100 duration-700">
                    {media.name}
                  </div>
                </Link>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SocialMediaContainer;
