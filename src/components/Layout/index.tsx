import React, { ReactNode } from "react";
import NavBar from "./NavBar";

interface Props {
  children: ReactNode;
}
const index: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="w-full h-auto flex  bg-purple-200 justify-center items-center">
        <div className="w-2/3 h-auto bg-purple-200 text-black">
          <div className="flex flex-col">
            <NavBar />
            <div>{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
