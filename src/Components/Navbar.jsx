import React from "react";
import logo from "../assets/Images/NavbarIcons/logo.svg";
import search from "../assets/Images/NavbarIcons/search.svg";

function Navbar() {
  
  return (
    <div className="flex flex-row justify-between sm:justify-normal sm:space-x-10 space-x-5 w-full">
      <div className="ml-8 sm:ml-0" id="musica-logo">
        <img src={logo} alt="musica logo" />
      </div>
      <form className="border-spacing-8 flex flex-1 relative">
        <img
          src={search}
          alt="search icon"
          className="absolute sm:left-3 top-1 right-0 hover:cursor-pointer"
        />
        <input
          type="search"
          placeholder="Search artists"
          className="bg-dark text-white opacity-50 rounded-2xl border py-1.5 pr-3 pl-14 w-full placeholder-white placeholder-opacity-25 border-none"
        />
      </form>
    </div>
  );
}

export default Navbar;
