"use client"

import Button from '@/components/Button'
import Layout from '@/components/Layout'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const page = () => {

  const [appointments, setAppointments] = useState([])
  useEffect(() => {
    axios('https://highland-hospital-backend.vercel.app/get-appointment', {
      method: 'GET',
      headers: {"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIkMmIkMTAkWk9DZnVJYkQ4ZHhnMFI3MjVsMzlUT0tNYVJwY3dRMzNQZW5UQkdQYWdnY3M1bDFtL1ZZcWEiLCJpYXQiOjE3MDI1NTM2NDd9.e88TIYPxwjcLVAe0Q4dy0Ep0UEigbFJQy6bODbQ0Cbw"}
    })
      .then((res) => {
        setAppointments(res.data.response)
      })
  }, [])

  return (
    <>
      <Layout>
        <div className='grid grid-cols-1 gap-3'>
          {/* <p className='text-xl font-bold'>Todays Notification Panel</p> */}
          <div className='bg-white rounded-md shadow-md'>
            <div className='border-b py-3 px-6 font-medium'>Todays Notification Panel</div>
            <div className='px-6 py-3 flex gap-5'>
              <p>Appointment</p>
              <p>Walk In</p>
            </div>
            <div>
              <div className="mx-6 mb-6 overflow-x-auto">
                <table className="w-full text-sm border text-left">
                  <thead className="bg-gray-50 border-b">
                    <tr>
                      <th className="px-6 py-3">Token Id</th>
                      <th className="px-6 py-3">Name</th>
                      <th className="px-6 py-3">Doctor</th>
                      <th className="px-6 py-3">Appointment Date</th>
                      <th className="px-6 py-3">Time Slot</th>
                      <th className="px-6 py-3">Phone</th>
                      <th className="px-6 py-3">Status</th>
                      <th className="px-6 py-3">Action 1 (Confirm)</th>
                      <th className="px-6 py-3">Action 2 (Postpone)</th>
                      <th className="px-6 py-3">Action 3 (Accept)</th>
                    </tr>
                  </thead>
                  <tbody className='text-gray-800 text-sm'>
                    {appointments?.map((value, index) => {
                      return <tr className="bg-white border-b">
                        <td className="px-6 py-4">1</td>
                        <td className="px-6 py-4">{value.firstname}</td>
                        <td className="px-6 py-4">{value.doctor}</td>
                        <td className="px-6 py-4">{value.dateofAppointment}</td>
                        <td className="px-6 py-4">{value.timeofAppointment}</td>
                        <td className="px-6 py-4">{value.phoneNumber}</td>
                        <td className="px-6 py-4">{value.status}</td>
                        <td className="px-6 py-4">action 1</td>
                        <td className="px-6 py-4">action 2</td>
                        <td className="px-6 py-4">action 3</td>
                      </tr>
                    })
                    }

                    {/* <tr className="bg-white">
                      <td className="px-6 py-4">1</td>
                      <td className="px-6 py-4">Prachi</td>
                      <td className="px-6 py-4">doctor</td>
                      <td className="px-6 py-4">12/12/23</td>
                      <td className="px-6 py-4">12:30</td>
                      <td className="px-6 py-4">1234567890</td>
                      <td className="px-6 py-4">status</td>
                      <td className="px-6 py-4">action 1</td>
                      <td className="px-6 py-4">action 2</td>
                      <td className="px-6 py-4">action 3</td>
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

export default page