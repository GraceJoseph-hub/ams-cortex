import React from 'react'
import { FiSearch } from "react-icons/fi";

const Search = () => {
  return (
    <div className=' flex items-center px-4 rounded-md bg-gray-100 w-[250px]'>
      <FiSearch className="text-gray-500 mr-4" />
      <input type="text" name="" id="" placeholder="Quick search..." className='bg-gray-100 outline-none'/>
    </div>
  );
}

export default Search