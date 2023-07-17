import React from "react";
import logo from "../assets/Images/NavbarIcons/logo.svg";
import search from "../assets/Images/NavbarIcons/search.svg";

function Navbar() {
  return (
    <div className="flex flex-row justify-between sm:justify-normal space-x-10 w-full">
      <div className="ml-8 sm:ml-0" id="musica-logo">
        <img src={logo} alt="musica logo" />
      </div>
      <form className="border-spacing-8 flex flex-1">
        <img
          src={search}
          alt="search icon"
          className=""
        />
        <input
          type="search"
          placeholder="Search artists"
          className="bg-dark text-white opacity-50 rounded-2xl border py-1.5 pr-3 pl-14 w-full placeholder-white placeholder-opacity-25 hidden sm:block border-none"
        />
      </form>
    </div>
  );
}

export default Navbar;
