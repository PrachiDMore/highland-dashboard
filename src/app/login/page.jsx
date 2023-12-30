"use client";

import Button from '@/components/Button';
import Input from '@/components/Input';
import React from 'react'

const LoginPage = () => {
  return (
    <>
      <div className='w-screen h-screen flex justify-center items-center bg-light'>
        <div className='w-[40%] bg-white border border-accentGreen rounded-xl p-10 grid gap-5'>
          <div className='w-full flex justify-center'>
            <img src="/assets/logo.png" alt="" />
          </div>
          <h1 className='text-center text-3xl font-semibold text-accentGreenHover'>Login</h1>
          <div className='flex flex-col gap-3'>
            <div className='flex flex-col gap-1 '>
              <label className='text-semibold' htmlFor="">Username</label>
              <Input type={"text"} placeholder={"Enter username"} />
            </div>
            <div lassName='flex flex-col gap-1 '>
              <label className='text-semibold' htmlFor="">Password</label>
              <Input type={"password"} placeholder={"Enter password"} />
              <p className='text-sm text-customGray mt-2 text-right'>Forgot Password?</p>
            </div>
            <div>
              <Button className={'w-full mt-5 font-semibold text-lg'} text={'Login'}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage