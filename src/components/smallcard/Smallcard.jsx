import React from 'react'

const Smallcard = ({ icon, num, title, subicon, subtext}) => {
  return (
    <div className="flex bg-white px-4 py-3 rounded-md">
      <div className="flex flex-col gap-3">
        <div className="text-2xl ">{num}</div>
        <div>
          <div className="text-sm font-semibold">{title}</div>
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-[50%] bg-gray-200">
              <div className="text-blue-500 text-[4px]">{subicon}</div>
            </div>
            <div className="text-[10px]">{subtext}</div>
          </div>
        </div>
      </div>
      <div className="text-blue-500">{icon}</div>
    </div>
  );
}

export default Smallcard