import React from 'react'
import { AiOutlineMenuFold } from 'react-icons/ai'

const Topbar = () => {
  return (
    <>
      <div className='w-[84%] h-20 px-8 py-3 border flex justify-between items-center fixed bg-white'>
        <div>
          <AiOutlineMenuFold className='text-xl '/>
        </div>
        <div>
          <img className='rounded-full w-11 h-11' src="/assets/user.jpeg" alt="" />
        </div>
      </div>
    </>
  )
}

export default Topbar