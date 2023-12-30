"use client"

import Button from '@/components/Button'
import Layout from '@/components/Layout'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import moment from 'moment'

const ScheduleToday = () => {

  const [appointments, setAppointments] = useState([])

  useEffect(() => {
    axios('https://highland-hospital-backend.vercel.app/get-appointment', {
      method: 'GET',
      headers: { "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIkMmIkMTAkWk9DZnVJYkQ4ZHhnMFI3MjVsMzlUT0tNYVJwY3dRMzNQZW5UQkdQYWdnY3M1bDFtL1ZZcWEiLCJpYXQiOjE3MDI1NTM2NDd9.e88TIYPxwjcLVAe0Q4dy0Ep0UEigbFJQy6bODbQ0Cbw" }
    })
      .then((res) => {
        setAppointments(res.data.response?.filter((e) => {
          return e?.status === "confirmed" && moment(Date.now()).format("DD-MMM-YYYY") === moment(e?.dateofAppointment).format("DD-MMM-YYYY");
        }).sort((data1, data2) => {
          return moment(data2?.dateofAppointment).format("x") - moment(data1?.dateofAppointment).format("x")
        })
        )
      })
  }, [])

  const handlePostpone = (e) => {
    axios("https://highland-hospital-backend.vercel.app/update-appointment", {
      method: "PATCH",
      headers: { "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIkMmIkMTAkWk9DZnVJYkQ4ZHhnMFI3MjVsMzlUT0tNYVJwY3dRMzNQZW5UQkdQYWdnY3M1bDFtL1ZZcWEiLCJpYXQiOjE3MDI1NTM2NDd9.e88TIYPxwjcLVAe0Q4dy0Ep0UEigbFJQy6bODbQ0Cbw" },
      data: {
        "id": e,
        "updateData": {
          "status": "confirmed",
        }
      }
    })
      .then((res) => {
        if (!res.data.error) window.location.reload()
      })
      .catch((err) => {
        console.log(err)
      })
  }


  return (
    <>
      <Layout>
        <div className='grid grid-cols-1 gap-3 custom-height-table-parent shadow-md rounded-md border'>
          <h2 className='border-b py-3 px-6 font-medium'>Todays Notification Panel</h2>
          <div className="mx-6 mb-6 overflow-x-auto custom-height-table mt-2">
            <table className="w-full text-sm border-r border-l border-b text-left relative overflow-scroll">
              <thead className="bg-gray-50 border sticky top-0">
                <tr>
                  <th className="px-6 py-3">Token Id</th>
                  <th className="px-6 py-3">Name</th>
                  <th className="px-6 py-3">Doctor</th>
                  <th className="px-6 py-3">Appointment Date</th>
                  <th className="px-6 py-3">Time Slot</th>
                  <th className="px-6 py-3">Phone</th>
                  <th className="px-6 py-3">Postpone</th>
                </tr>
              </thead>
              <tbody className='text-gray-800 text-sm'>
                {appointments?.map((value, index) => {
                  return <tr key={index} className="bg-white border-b">
                    <td className="px-6 py-4">#{value?._id?.slice(18)}</td>
                    <td className="px-6 py-4">{value.firstname}</td>
                    <td className="px-6 py-4">{value.doctor}</td>
                    <td className="px-6 py-4">{moment(value.dateofAppointment).format("DD-MMM-YYYY")}</td>
                    <td className="px-6 py-4">{moment(value.timeofAppointment).format("hh:mm a")}</td>
                    <td className="px-6 py-4">{value.phoneNumber}</td>
                    <td className="px-6 py-4"><Button text={"Postpone"} /></td>
                  </tr>
                })
                }
              </tbody>
            </table>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default ScheduleToday