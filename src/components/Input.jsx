import React from 'react'

const Input = ({ textarea, type, text, value }) => {

  return (
    <>
      {
        !textarea ?
          <input className='outline-none rounded-md border border-green-300 focus:border-green-500 px-3 py-2 h-auto w-full' type={type} value={value} />
          :
          <textarea className='h-48 w-full px-3 py-2 outline-none rounded-md border border-green-300 focus:border-green-500' name="" id="" cols="30" rows="10">{text}</textarea>
      }

    </>
  )
}

export default Input