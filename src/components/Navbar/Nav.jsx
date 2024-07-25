import React from 'react'
import Logo from '../logo/Logo'
import Search from '../search/Search'
import { FaPhone, FaBell } from "react-icons/fa";
// import {head} from '../../../public/img/head.jpg'

const Nav = () => {
  return (
    <div className="flex justify-between items-center h-[50px] rounded-xl pl-7 pr-4 bg-white">
      <div className="flex justify-between w-[75%]">
        <Logo />
        <Search />
      </div>
      <div className="flex gap-7 px-4 text-gray-700 border-l-2 border-gray-200">
        <div className="h-6 w-6 rounded-[50%] text-sm p-1 bg-gray-200">
          <FaPhone className="" />
        </div>
        <div className="h-6 w-6 rounded-[50%] p-1 bg-gray-200">
          <FaBell className="" />
        </div>
        <div className="flex items-center gap-2">
          <div className=" h-6 w-6 rounded-[50%] p-1 bg-gray-200">
            <img
              src="../../../public/img/head.jpg"
              alt="head"
              className="bg-black"
            />
          </div>
          <div className="text-xs">
            <p>Admin</p>
            <p className="mt-[-4px]">admin@domain.in</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav