import React from "react";
import logo from "../assets/Images/NavbarIcons/logo.svg";
import search from "../assets/Images/NavbarIcons/search.svg";

function Navbar() {
  return (
    <div className="inline-grid grid-flow-row gap-2 col-start-2 col-end-12 sm:col-start-1 sm:mb-10 mb-0">
      <div className="col-start-1 col-end-2" id="musica-logo">
        <img src={logo} alt="musica logo" />
      </div>
      <form className="col-start-2 col-end-12 border-spacing-8 relative">
        <img
          src={search}
          alt="search icon"
          className="absolute top-1 sm:left-1.5 right-0"
        />
        <input
          type="search"
          placeholder="Search artists"
          className="bg-dark rounded-2xl border py-1.5 pr-3 pl-14 w-full placeholder-white placeholder-opacity-25 hidden sm:block border-none"
        />
      </form>
    </div>
  );
}

export default Navbar;
