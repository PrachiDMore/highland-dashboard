"use client"

import Layout from '@/components/Layout'
import React, { useEffect, useState } from 'react'
import { FiMail } from 'react-icons/fi'
import { AiOutlineDelete } from 'react-icons/ai'
import axios from 'axios'

const HospitalFeedback = () => {
  const [feedback, setFeedback] = useState()
  useEffect(() => {
    axios("https://highland-hospital-backend.vercel.app/get-feedback", {
      method: "GET",
      headers: { "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIkMmIkMTAkWk9DZnVJYkQ4ZHhnMFI3MjVsMzlUT0tNYVJwY3dRMzNQZW5UQkdQYWdnY3M1bDFtL1ZZcWEiLCJpYXQiOjE3MDI1NTM2NDd9.e88TIYPxwjcLVAe0Q4dy0Ep0UEigbFJQy6bODbQ0Cbw" }
    })
    .then((res) => {
      setFeedback(res.data.response)
    })
  }, [])

  return (
    <>
      <Layout>
        <div className=''>
          <div className='bg-white rounded-md shadow-md'>
            <div className='border-b py-3 px-6 font-medium'>Feedbacks</div>
            <div className='p-6'>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border text-left">
                  <thead className="bg-gray-50 border-b">
                    <tr>
                      <th className="px-6 py-3">Sr No.</th>
                      <th className="px-6 py-3">Personal Details</th>
                      <th className="px-6 py-3">Address</th>
                      <th className="px-6 py-3">Description</th>
                      <th className="px-6 py-3">Feedback Date</th>
                      <th className="px-6 py-3">Action</th>
                    </tr>
                  </thead>
                  <tbody className='text-gray-800 text-sm'>
                    {feedback?.map((value, index) => {
                      return  <tr key={index} className="bg-white border-b ">
                      <td className="px-6 py-4">1</td>
                      <td className="px-6 py-4"><b>{value?.fullname}</b><br /> {value?.email} <br /> {value?.phonenumber}</td>
                      <td className="px-6 py-4">{value.address}</td>
                      <td className="px-6 py-4">{value.description}</td>
                      <td className="px-6 py-4">06-Sep-2023</td>
                      <td className="px-6 py-4 h-24 flex flex-1 items-center gap-6"><FiMail className='text-lg text-accentGreen' />  <AiOutlineDelete className='text-lg text-customeRed font-medium' /> </td>
                    </tr>
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default HospitalFeedback