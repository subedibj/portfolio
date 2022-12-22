import React, { ReactNode } from "react";
import NavBar from "./NavBar";
import SocialMediaContainer from "./SocialMediaContainer";

interface Props {
  children: ReactNode;
}
const index: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="w-full h-auto flex flex-row justify-center">
        <div className="w-full h-auto flex flex-row text-black">
          <SocialMediaContainer />
          <div className="w-full flex justify-center items-center">
            <div className="w-2/3 flex flex-col justify-center">
              <NavBar />
              <div>{children}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
