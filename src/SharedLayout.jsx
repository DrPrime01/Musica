import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";

function SharedLayout() {
  return (
    <>
      <div className="grid grid-flow-row gap-2">
        <Navbar />
        <Sidebar />
        <Outlet/>
      </div>
      
    </>
  );
}

export default SharedLayout;
