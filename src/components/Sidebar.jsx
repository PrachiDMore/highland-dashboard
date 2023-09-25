import React from 'react'
import { RxDashboard } from 'react-icons/rx'
import { VscGraph } from 'react-icons/vsc'
import { FaRegCalendarCheck, FaRegHospital, FaUserMd, FaUserAlt } from 'react-icons/fa'
import Link from 'next/link'

const Sidebar = () => {
  return (
    <>
      <div className='w-full h-screen '>
        <div className='w-full h-20 flex justify-center items-center bg-white'>
          <img className='h-20' src="/assets/logo.png" alt="" />
        </div>
        <div className='py-3 px-5 w-full custom-height bg-slate-900 text-white '>
          <div className='flex items-center gap-3 text-gray-400'>
            <RxDashboard />
            <Link href={'/'} className='p-2 text-sm'>Dashboard</Link>
          </div>
          <div className='flex items-center gap-3 text-gray-400'>
            <FaRegCalendarCheck />
            <p className='p-2 text-sm'>Appointment</p>
          </div>
          <div className='flex items-center gap-3 text-gray-400'>
            <FaRegHospital />
            <p className='p-2 text-sm'>Hospital</p>
          </div>
          <div className='flex items-center gap-3 text-gray-400'>
            <FaUserMd />
            <p className='p-2 text-sm'>Nursing</p>
          </div>
          <div className='flex items-center gap-3 text-gray-400'>
            <FaUserAlt />
            <p className='p-2 text-sm'>User</p>
          </div>
          <div className='flex items-center gap-3 text-gray-400'>
            <VscGraph />
            <p className='p-2 text-sm'>Analytics</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar