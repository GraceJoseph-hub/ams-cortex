import React from 'react'
import Sun from '../icons/Sun'
import Button from '../button/Button';

const DateCard = () => {
  return (
    <div className='flex flex-col justify-between bg-white px-5 py-4 rounded-md text-sm'>
      <div className='flex gap-3 text-gray-300'>
        <Sun />
        <div className=''>
          <span>8:02:09 AM</span>
          <p>Realtime Insight</p>
        </div>
      </div>
      <div>
        <p>Today:</p>
        <p>18th November 2023</p>
      <Button text="View Attendance" className="mt-3 text-sm"/>
      </div>
    </div>
  );
}

export default DateCard