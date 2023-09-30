import Link from 'next/link'
import React from 'react'


const Card = ({ heading, number, icon, className, link }) => {
  return (
    <>
      <Link href={link} className='bg-white hover:bg-light duration-300 rounded-md flex justify-between px-7 py-5 card-shadow'>
        <div>
          <p className='text-gray text-sm font-medium'>{heading}</p>
          <p className='text-2xl font-semibold'>{number}</p>
        </div>
        <div className={'bg-accentGreen/20 text-accentGreen  flex justify-center items-center p-3 rounded-full ' + className}>{icon}</div>
      </Link>
    </>
  )
}

export default Card