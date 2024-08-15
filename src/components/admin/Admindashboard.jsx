import React from 'react'
import Nav from '../Navbar/Nav';
import Sidebar from '../sidebar/Sidebar';
import Dashboard from '../dashboard/Dashboard';

const Admindashboard = () => {
  return (
    <div className=" py-12 px-14 bg-grey">
      <Nav />
      <div className="flex gap-10 mt-16">
        <div className="w-[5%]">
          <Sidebar />
        </div>
        <Dashboard />
      </div>
    </div>
  );
}

export default Admindashboard