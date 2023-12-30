import React from 'react'

const Input = ({ textarea, type, text, value, placeholder }) => {

  return (
    <>
      {
        !textarea ?
          <input className='outline-none rounded-md border border-accentGreen px-3 py-2 h-auto w-full' type={type} value={value} placeholder={placeholder}/>
          :
          <textarea className='h-48 w-full px-3 py-2 outline-none rounded-md border border-accentGreen' name="" id="" cols="30" rows="10" placeholder={placeholder}>{text}</textarea>
      }

    </>
  )
}

export default Input