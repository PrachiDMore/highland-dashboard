"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'

const NavItem = ({ link, items, title, icon }) => {
  const [show, setShow] = useState(false)
  return (
    <>
      {
        link ?
          <Link href={link?.url} className='hover:text-white duration-200 flex items-center gap-3 text-gray-400'>
            {link?.icon}
            <p className='p-2 '>{link?.title}</p>
          </Link>
          :
          <div>
            <div onClick={() => { setShow(!show) }} className='w-full flex justify-between items-center cursor-pointer'>
              <div className='hover:text-white duration-200 flex items-center gap-3 text-gray-400'>
                {icon}
                <p className='p-2 '>{title}</p>
              </div>
              <IoMdArrowDropdown className='text-gray-400' />
            </div>
            <div className={show ? ' rounded-lg flex flex-col mt-1 ml-7' : 'hidden'}>
              {
                items.map((item) => {
                  return <Link key={item?.url} href={item?.url} className='text-gray-400 hover:text-white duration-200'>
                    <p className=' p-2 text-sm'>{item?.title}</p>
                  </Link>
                })
              }
            </div>
          </div>
      }
    </>
  )
}

export default NavItem