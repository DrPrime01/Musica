import React, { useState } from "react";
import { NavLink } from "react-router-dom/dist";
import Logout from "../assets/Images/SidebarIcons/Logout.svg";
import profile from "../assets/Images/SidebarIcons/profile.svg";
import radio from "../assets/Images/SidebarIcons/radio.svg";
import videos from "../assets/Images/SidebarIcons/videos.svg";
import playlist from "../assets/Images/SidebarIcons/playlist.svg";
import Home from "../assets/Images/SidebarIcons/Home.svg";
import menu from "../assets/Images/SidebarIcons/menu.svg";

function Sidebar() {
  const [open, setOpen] = useState(false);
  const sidebarLinks = [
    {
      id: 1,
      img: Home,
      title: "Home",
    },
    {
      id: 2,
      img: playlist,
      title: "My collections",
    },
    {
      id: 3,
      img: radio,
      title: "Radio",
    },
    {
      id: 4,
      img: videos,
      title: "Music videos",
    },
  ];
  return (
    <aside
      className={`col-start-1 col-end-2 sm:col-start-auto sm:col-end-auto flex flex-col`}
    >
      <img
        src={menu}
        className={`cursor-pointer absolute left-4 top-8 bg-none sm:hidden z-50`}
        onClick={() => setOpen(!open)}
      />
      <div
        className={`absolute ${
          open ? "w-screen bg-dark-alt top-0 left-0 pt-20 pl-6 h-screen" : "w-0 px-5"
        } sm:px-0 sm:w-14 duration-300`}
      >
        <ul
          className={`flex flex-col space-y-8 sm:mb-20 mb-7 ${
            open ? "block" : "hidden"
          } sm:block sm:bg-dark-alt sm:p-2 sm:py-3 sm:rounded-[3.5rem]`}
          id="sidebar-links"
        >
          {sidebarLinks.map((sidebarLink) => {
            return (
              <li
                key={sidebarLink.id}
                className="flex items-center cursor-pointer p-2 gap-x-4 sm:gap-x-0 w-"
              >
                <img
                  src={sidebarLink.img}
                  alt={sidebarLink.title}
                  className="m-0"
                />
                <span
                  className={`${
                    !open && "hidden"
                  } text-[#EFEEE0] opacity-25`}
                >
                  {sidebarLink.title}
                </span>
              </li>
            );
          })}
        </ul>
        <ul
          className={`flex flex-col space-y-8 ${
            open ? "" : "hidden"
          } sm:block sm:bg-dark-alt sm:p-2 sm:py-3 sm:rounded-[3.5rem]`}
          id="profile-logout"
        >
          <li className="flex items-center cursor-pointer p-2 gap-x-4 sm:gap-x-0">
            <img src={profile} className="m-0" />
            <span
              className={`${
                !open && "hidden"
              } text-[#EFEEE0] opacity-25 sm:hidden`}
            >
              Profile
            </span>
          </li>
          <li className="flex items-center cursor-pointer p-2 gap-x-4 sm:gap-x-0">
            <img src={Logout} className="m-0" />
            <span
              className={`${
                !open && "hidden"
              } text-[#EFEEE0] opacity-25 sm:hidden`}
            >
              Log out
            </span>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
