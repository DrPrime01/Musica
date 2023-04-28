import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";

function SharedLayout() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="grid grid-flow-row gap-6">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}

export default SharedLayout;
