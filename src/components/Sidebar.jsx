"use client"
import React from 'react'
import { RxDashboard } from 'react-icons/rx'
import { VscGraph } from 'react-icons/vsc'
import { FaRegCalendarCheck, FaRegHospital, FaUserMd, FaUserAlt } from 'react-icons/fa'
import Link from 'next/link'
import NavItem from './NavItem'

const Sidebar = () => {
  return (
    <>
      <div className='w-full h-screen '>
        <div className='w-full h-20 flex justify-center items-center bg-white'>
          <img className='h-20' src="/assets/logo.png" alt="" />
        </div>
        <div className='py-3 px-5 w-full sidebar-height bg-slate-900  '>
          <NavItem link={{
            icon: <RxDashboard />,
            url: "/",
            title: "Dashboard"
          }} />

          <NavItem title={"Appointment"} icon={<FaRegCalendarCheck />} items={[
            {
              url: "/appointment/uncheck",
              title: "New/Unchecked"
            },
            {
              url: "/appointment/scheduled-today",
              title: "Scheduled Today"
            },
            {
              url: "/appointment/confirmed",
              title: "Confirmed"
            },
            {
              url: "/appointment/postponed",
              title: "Postponed"
            },
            {
              url: "/appointment/completed",
              title: "Completed"
            },
            {
              url: "/appointment/doctors",
              title: "Doctors"
            }
          ]} />

          <NavItem title={"Hospital"} icon={<FaRegHospital />} items={[
            {
              url: "/hospital/hospital-news",
              title: "Hospital News"
            },
            {
              url: "/hospital/feedback",
              title: "Feedback"
            },
            {
              url: "/hospital/hospital-contact",
              title: "Hospital Contact"
            },
            {
              url: "/hospital/career-details",
              title: "Career Details"
            }
          ]} />

          <NavItem title={"Nursing"} icon={<FaUserMd />} items={[
            {
              url: "/nursing/nursing-news",
              title: "Nursing News"
            },
            {
              url: "/nursing/nursing-contact",
              title: "Nursing Contact"
            }
          ]} />

          {/* <NavItem title={"Users"} icon={<FaUserAlt />} items={[
            {
              url: "/",
              title: "Users"
            },
            {
              url: "/",
              title: "Premission details"
            }
          ]} />

          <NavItem link={{
            icon: <VscGraph />,
            url: "/",
            title: "Analytics"
          }} /> */}
        </div>
      </div >
    </>
  )
}

export default Sidebar