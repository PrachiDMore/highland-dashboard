"use client"

import Button from '@/components/Button'
import Layout from '@/components/Layout'
import Spinner from '@/components/Spinner'
import axios from 'axios'
import moment from 'moment'
import React, { useEffect, useState } from 'react'

const NursingContact = () => {
  const [contact, setContact] = useState()
  const [loading, setLoading] = useState(false)

  useEffect((e) => {
    setLoading(true)
    axios("https://highland-hospital-backend.vercel.app/get-nursing-contact", {
      method: "GET",
      headers: { "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIkMmIkMTAkWk9DZnVJYkQ4ZHhnMFI3MjVsMzlUT0tNYVJwY3dRMzNQZW5UQkdQYWdnY3M1bDFtL1ZZcWEiLCJpYXQiOjE3MDI1NTM2NDd9.e88TIYPxwjcLVAe0Q4dy0Ep0UEigbFJQy6bODbQ0Cbw" }
    })
      .then((res) => {
        setLoading(false)
        setContact(res.data.response)
      })
  }, [])

  return (
    <>
      <Layout>
        <div className='grid grid-cols-1 gap-3 custom-height-table-parent shadow-md rounded-md border'>
            <h2 className='border-b py-3 px-6 font-medium'>Nursing contact</h2>
            <div className='px-6'>
              <div className="overflow-x-auto custom-height-table">
                {
                  loading?
                  <div class="w-full h-full flex items-center justify-center ">
                      <Spinner />
                    </div>
                  :
                  <table className="w-full text-sm border-r border-l border-b text-left relative overflow-scroll">
                  <thead className="bg-gray-50 border sticky top-0">
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
                      <td className="px-6 py-4">{moment(value?.timestamp).format("DD-MMM-YYYY")}</td>
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
                </table>}
              </div>
            </div>
          </div>
      </Layout>
    </>
  )
}

export default NursingContact 
