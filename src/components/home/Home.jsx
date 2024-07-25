import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import Dashbord from '../dashboard/Dashbord';

const Home = () => {
  return (
    <div className="flex gap-10 mt-16">
      <div className='w-[5%]'>
        <Sidebar />
      </div>
      <div className=''>
        <Dashbord />
      </div>
    </div>
  );
}

export default Home