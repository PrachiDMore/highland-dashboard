"use client"

import React, { useEffect, useState } from 'react'
import Layout from '@/components/Layout'
import Button from '@/components/Button'
import axios from 'axios'

const HospitalContact = () => {
  const [contacts, setContacts] = useState([])
  useEffect(() => {
    axios("https://highland-hospital-backend.vercel.app/get-contact", {
      method: 'GET',
      headers: {"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIkMmIkMTAkWk9DZnVJYkQ4ZHhnMFI3MjVsMzlUT0tNYVJwY3dRMzNQZW5UQkdQYWdnY3M1bDFtL1ZZcWEiLCJpYXQiOjE3MDI1NTM2NDd9.e88TIYPxwjcLVAe0Q4dy0Ep0UEigbFJQy6bODbQ0Cbw"}
    })
    .then((res) => {
      setContacts(res.data.response)
    })
  }, [])

  return (
    <>
      <Layout>
        <div className=''>
          <div className='bg-white rounded-md shadow-md'>
            <div className='border-b py-3 px-6 font-medium'>Hospital contact</div>
            <div className='p-6'>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border text-left">
                  <thead className="bg-gray-50 border-b">
                    <tr>
                      <th className="px-6 py-3">Personal Details</th>
                      <th className="px-6 py-3">Subject</th>
                      <th className="px-6 py-3">Message</th>
                      <th className="px-6 py-3">Contact Date</th>
                      <th className="px-6 py-3">Publish Date</th>
                      <th className="px-6 py-3">Status</th>
                      <th className="px-6 py-3">Publish</th>
                    </tr>
                  </thead>
                  <tbody className='text-gray-800 text-sm'>
                    {contacts?.map((value, index) => {
                      return <tr className="bg-white border-b ">
                      <td className="px-6 py-4"><b>{value.firstName} {value.lastName}</b><br /> {value.email} <br /> {value.phonenumber}</td>
                      <td className="px-6 py-4">{value.subject}</td>
                      <td className="px-6 py-4">{value.message}</td>
                      <td className="px-6 py-4">17-Sep-2023</td>
                      <td className="px-6 py-4">N/A</td>
                      <td className="px-6 py-4">Pending Response</td>
                      <td className="px-6 py-4"><Button text={"Respond"} /></td>
                    </tr>
                    })}
                    
                    {/* <tr className="bg-white">
                      <td className="px-6 py-4"><b>Vishnu rajesh</b><br /> vishnurajesh5219@gmail.com <br /> 8590446215</td>
                      <td className="px-6 py-4">Orthopedic oncosurgeon</td>
                      <td className="px-6 py-4">Booking required</td>
                      <td className="px-6 py-4">17-Sep-2023</td>
                      <td className="px-6 py-4">N/A</td>
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

export default HospitalContact