"use client"

import Button from '@/components/Button'
import Layout from '@/components/Layout'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const NursingContact = () => {
  const [contact, setContact] = useState()
  useEffect((e) => {
    axios("https://highland-hospital-backend.vercel.app/get-nursing-contact", {
      method: "GET",
      headers: { "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIkMmIkMTAkWk9DZnVJYkQ4ZHhnMFI3MjVsMzlUT0tNYVJwY3dRMzNQZW5UQkdQYWdnY3M1bDFtL1ZZcWEiLCJpYXQiOjE3MDI1NTM2NDd9.e88TIYPxwjcLVAe0Q4dy0Ep0UEigbFJQy6bODbQ0Cbw" }
    })
      .then((res) => {
        setContact(res.data.response)
      })
  }, [])

  return (
    <>
      <Layout>
        <div className=''>
          <div className='bg-white rounded-md shadow-md'>
            <div className='border-b py-3 px-6 font-medium'>Nursing contact</div>
            <div className='p-6'>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border text-left">
                  <thead className="bg-gray-50 border-b">
                    <tr>
                      <th className="px-6 py-3">Personal Details</th>
                      <th className="px-6 py-3">Message</th>
                      <th className="px-6 py-3">Contact Date</th>
                      {/* <th className="px-6 py-3">Publish Date</th> */}
                      <th className="px-6 py-3">Status</th>
                      <th className="px-6 py-3">Publish</th>
                    </tr>
                  </thead>
                  <tbody className='text-gray-800 text-sm'>
                    {contact?.map((value, index) => {
                      return <tr key={index} className="bg-white border-b ">
                      <td className="px-6 py-4"><b>{value?.fullname}</b><br /> {value?.email} </td>
                      <td className="px-6 py-4">{value?.message}</td>
                      <td className="px-6 py-4">16-Sep-2023</td>
                      {/* <td className="px-6 py-4">16-Sep-2023</td> */}
                      <td className="px-6 py-4">Pending Response</td>
                      <td className="px-6 py-4"><Button text={"Respond"} /></td>
                    </tr>
                    })}
                    
                    {/* <tr className="bg-white">
                      <td className="px-6 py-4"><b>Anit Mary</b><br /> antonyvp316@gmail.com </td>
                      <td className="px-6 py-4">Hey I want to know about clg</td>
                      <td className="px-6 py-4">16-Sep-2023</td>
                      <td className="px-6 py-4">16-Sep-2023</td>
                      <td className="px-6 py-4">Pending Response</td>
                      <td className="px-6 py-4"><Button text={"Respond"} /></td>
                    </tr> */}
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

export default NursingContact 
