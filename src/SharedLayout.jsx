import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";

function SharedLayout() {
  return (
    <div className="flex flex-col space-y-14">
      <Navbar className="col-span-12 row-start-1 row-end-2" />
      <div className="flex flex-row space-x-0 sm:space-x-10">
        <Sidebar className="" />
        <Outlet className="" />
      </div>
    </div>
  );
}

export default SharedLayout;
