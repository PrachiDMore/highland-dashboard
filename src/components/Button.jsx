import React from 'react'

const Button = ({ text, className }) => {
  return (
    <>
      <button className={'bg-blue-500 text-sm rounded-md px-3 py-2 text-white '+ className}>{text}</button>
    </>
  )
}

export default Button