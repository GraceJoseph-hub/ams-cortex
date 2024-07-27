import React, { useState } from "react";
import Grid from "../icons/Grid";
import Mail from "../icons/Mail";
import Timer from "../icons/Timer";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("grid");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-12 py-5 rounded-md bg-white">
      <div
        onClick={() => handleLinkClick("grid")}
        className={`cursor-pointer px-[17px] py-[4px] rounded ${
          activeLink === "grid"
            ? " border-l-4 border-blue-500 text-black"
            : "hover:bg-gray-200"
        }`}
      >
        <Grid />
      </div>
      <div
        onClick={() => handleLinkClick("mail")}
        className={`cursor-pointer rounded px-[17px] py-[4px] ${
          activeLink === "mail"
            ? " border-l-4 border-blue-500 text-black"
            : "hover:bg-gray-200"
        }`}
      >
        <Mail />
      </div>
      <div
        onClick={() => handleLinkClick("timer")}
        className={`cursor-pointer rounded px-[17px] py-[4px] ${
          activeLink === "timer"
            ? " border-l-4 border-blue-500 text-black"
            : "hover:bg-gray-200"
        }`}
      >
        <Timer />
      </div>
    </div>
  );
};

export default Sidebar;
