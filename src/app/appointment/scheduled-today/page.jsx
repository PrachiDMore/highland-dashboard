"use client"

import Button from '@/components/Button'
import Layout from '@/components/Layout'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import moment from 'moment'

const ScheduleToday = () => {

  const [appointments, setAppointments] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios('https://highland-hospital-backend.vercel.app/get-appointment', {
      method: 'GET',
      headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
    })
      .then((res) => {
        setLoading(false)
        setAppointments(res.data.response?.filter((e) => {
          return e?.status === "confirmed" && moment(Date.now()).format("DD-MMM-YYYY") === moment(e?.dateofAppointment).format("DD-MMM-YYYY");
        }).sort((data1, data2) => {
          return moment(data2?.dateofAppointment).format("x") - moment(data1?.dateofAppointment).format("x")
        })
        )
      })
  }, [])

  const handleComplete = (e) => {
    axios("https://highland-hospital-backend.vercel.app/update-appointment", {
      method: "PATCH",
      headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` },
      data: {
        "id": e,
        "updateData": {
          "status": "completed",
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
            {
              loading ? 
              <div class="w-full h-full flex items-center justify-center ">
                <div role="status">
                  <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg>
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
                :
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
                      <th className="px-6 py-3">Complete</th>
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
                        <td className="px-6 py-4"><Button onClick={handleComplete} text={"Complete"} /></td>
                      </tr>
                    })
                    }
                  </tbody>
                </table>
            }
          </div>
        </div>
      </Layout>
    </>
  )
}

export default ScheduleToday