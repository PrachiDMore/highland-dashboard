"use client"

import Layout from '@/components/Layout'
import React, { useEffect, useState } from 'react'
import { FiMail } from 'react-icons/fi'
import { AiOutlineDelete } from 'react-icons/ai'
import axios from 'axios'

const HospitalFeedback = () => {
  const [feedback, setFeedback] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios("https://highland-hospital-backend.vercel.app/get-feedback", {
      method: "GET",
      headers: { "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIkMmIkMTAkWk9DZnVJYkQ4ZHhnMFI3MjVsMzlUT0tNYVJwY3dRMzNQZW5UQkdQYWdnY3M1bDFtL1ZZcWEiLCJpYXQiOjE3MDI1NTM2NDd9.e88TIYPxwjcLVAe0Q4dy0Ep0UEigbFJQy6bODbQ0Cbw" }
    })
      .then((res) => {
        setLoading(false)
        setFeedback(res.data.response)
      })
  }, [])

  return (
    <>
      <Layout>
        <div className=''>
          <div className='grid grid-cols-1 gap-3 custom-height-table-parent shadow-md rounded-md border'>
            <h2 className='border-b py-3 px-6 font-medium'>Feedbacks</h2>
            <div className='p-6'>
              <div className=" overflow-x-auto custom-height-table ">

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
                  {
                    loading ?
                      <div class="w-full h-full flex items-center justify-center ">
                        <div role="status">
                          <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg>
                          <span class="sr-only">Loading...</span>
                        </div>
                      </div>
                      :
                      <tbody className='text-gray-800 text-sm'>
                        {feedback?.map((value, index) => {
                          return <tr key={index} className="bg-white border-b ">
                            <td className="px-6 py-4">1</td>
                            <td className="px-6 py-4"><b>{value?.fullname}</b><br /> {value?.email} <br /> {value?.phonenumber}</td>
                            <td className="px-6 py-4">{value.address}</td>
                            <td className="px-6 py-4">{value.description}</td>
                            <td className="px-6 py-4">06-Sep-2023</td>
                            <td className="px-6 py-4 h-24 flex flex-1 items-center gap-6"><FiMail className='text-lg text-accentGreen' />  <AiOutlineDelete className='text-lg text-customeRed font-medium' /> </td>
                          </tr>
                        })}
                      </tbody>
                  }
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