import Link from "next/link";
import React from "react";
import { navBarData } from "../../constants/navBarData";

const NavBar = () => {
  return (
    <>
      <div className="h-auto md:h-16 w-full flex flex-col md:flex-row justify-between md:gap-20">
        {navBarData.map((nav) => {
          return (
            <div
              className="w-40 flex justify-start items-center capitalize text-xl font-semibold hover:text-primaryGreen"
              key={nav.id}
            >
              <Link href={nav.url}>{nav.title}</Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default NavBar;
