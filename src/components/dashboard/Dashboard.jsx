import React from "react";
import DateCard from "../dateCard/DateCard";
import Smallcard from "../smallcard/Smallcard";
import Cloud from "../icons/Cloud";
import Current from "../icons/Current";
import Mail from "../icons/Mail";
import Moon from "../icons/Moon";
import Ontime from "../icons/Ontime";
import Timeoff from "../icons/Timeoff";
import User from "../icons/User";
import Strokechart from "../charts/Strokechart";


const Dashboard = () => {
  const data = [
    {
      num: "452",
      icon: User,
      title: "Total Employees",
      subIcon: Current,
      subText: "Two new employees added",
      color: "blue",
    },
    {
      num: "360",
      icon: Ontime,
      title: "Total Employees",
      subIcon: Current,
      subText: "Two new employees added",
      color: "red",
    },
    {
      num: "30",
      icon: Cloud,
      title: "Total Employees",
      subIcon: Current,
      subText: "Two new employees added",
      color: "blue",
    },
    {
      num: "62",
      icon: Timeoff,
      title: "Total Employees",
      subIcon: Current,
      subText: "Two new employees added",
      color: "green",
    },
    {
      num: "6",
      icon: Moon,
      title: "Total Employees",
      subIcon: Current,
      subText: "Two new employees added",
      color: "red",
    },
    {
      num: "42",
      icon: Mail,
      title: "Total Employees",
      subIcon: Current,
      subText: "Two new employees added",
      color: "green",
    },
  ];
  return (
    <div>
      <div className="flex gap-8 ">
        <DateCard />
        <div className="grid grid-cols-3 grid-rows-2 gap-8 max-[820px]:grid-cols-2 max-[820px]:grid-rows-1">
          {data.map((item, index) => (
            <div key={index}>
              <Smallcard
                num={item.num}
                icon={<item.icon />}
                title={item.title}
                subicon={<item.subIcon className={`text-${item.color}-500`} />}
                subtext={item.subText}
              />
            </div>
          ))}
        </div>
      </div>
      <Strokechart />
    </div>
  );
};

export default Dashboard;
