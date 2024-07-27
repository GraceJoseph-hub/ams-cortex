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
        className={`cursor-pointer p-2 rounded-md ${
          activeLink === "grid" ? "bg-blue-500 text-white" : "hover:bg-gray-200"
        }`}
      >
        <Grid />
      </div>
      <div
        onClick={() => handleLinkClick("mail")}
        className={`cursor-pointer p-2 rounded-md ${
          activeLink === "mail" ? "bg-blue-500 text-white" : "hover:bg-gray-200"
        }`}
      >
        <Mail />
      </div>
      <div
        onClick={() => handleLinkClick("timer")}
        className={`cursor-pointer p-2 rounded-md ${
          activeLink === "timer"
            ? "bg-blue-500 text-white"
            : "hover:bg-gray-200"
        }`}
      >
        <Timer />
      </div>
    </div>
  );
};

export default Sidebar;
