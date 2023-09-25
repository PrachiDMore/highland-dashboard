import React from 'react'


const Card = ({ heading, number, icon, className }) => {
  return (
    <>
      <div className='bg-white border rounded-md flex justify-between px-7 py-5'>
        <div>
          <p className='text-gray-500 text-sm font-medium'>{heading}</p>
          <p className='text-2xl font-semibold'>{number}</p>
        </div>
        <div className={'bg-blue-50 flex justify-center items-center p-3 rounded-full ' + className}>{icon}</div>
      </div>
    </>
  )
}

export default Card