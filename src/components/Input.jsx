import React from 'react'

const Input = ({ textarea, type, text, value, placeholder, onChange, id, className }) => {

  return (
    <>
      <div className={"w-full " + className}> 
        {
          !textarea ?
            <input onChange={onChange} className='outline-none rounded-md border border-accentGreen px-3 py-2 h-auto w-full' id={id} type={type} value={value} placeholder={placeholder} />
            :
            <textarea onChange={onChange} className='h-48 w-full px-3 py-2 outline-none rounded-md border border-accentGreen' id={id} cols="30" rows="10" value={value} placeholder={placeholder}></textarea>
        }
      </div>

    </>
  )
}

export default Input