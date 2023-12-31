import React from 'react'

const Button = ({ text, className, onClick, type, disabled=false }) => {
  return (
    <>
      <button disabled={disabled} onClick={onClick} type={type} className={'bg-accentGreen hover:bg-accentGreenHover duration-300 text-sm rounded-md px-3 py-2 text-white '+ className}>{text}</button>
    </>
  )
}

export default Button