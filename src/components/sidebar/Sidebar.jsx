import React from 'react'
import Grid from '../icons/Grid'
import Mail from '../icons/Mail'
import Timer from '../icons/Timer'

const Sidebar = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-12 py-5 rounded-md bg-white'>
      <Grid />
      <Mail />
      <Timer />
    </div>
  )
}

export default Sidebar