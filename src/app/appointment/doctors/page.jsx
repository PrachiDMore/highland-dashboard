"use client"

import React, { useEffect, useState } from 'react'
import Layout from '@/components/Layout'
import Button from '@/components/Button'
import AddDoctor from '@/components/AddDoctor'
import axios from 'axios'
import moment from 'moment'
import Spinner from '@/components/Spinner'

const Doctors = () => {

  const [addDoctor, setAddDoctor] = useState(false)
  const [doctors, setDoctors] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    axios('https://highland-hospital-backend.vercel.app/get-doctor', {
      method: 'GET',
      headers: { "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIkMmIkMTAkWk9DZnVJYkQ4ZHhnMFI3MjVsMzlUT0tNYVJwY3dRMzNQZW5UQkdQYWdnY3M1bDFtL1ZZcWEiLCJpYXQiOjE3MDI1NTM2NDd9.e88TIYPxwjcLVAe0Q4dy0Ep0UEigbFJQy6bODbQ0Cbw" }
    })
      .then((res) => {
        setLoading(false)
        setDoctors(res.data.response)
      })
  }, [])

  return (
    <>
      <Layout>

        <div className='grid grid-cols-1 gap-3 custom-height-table-parent shadow-md rounded-md border'>
          <div className='flex justify-between items-center px-6 pt-4'>
            <div className=' font-medium'>All Doctors</div>
            <Button text={"Add Doctor"} onClick={() => { setAddDoctor(true) }} />
          </div>
          <div className="mx-6 mb-6 overflow-x-auto custom-height-table">
            {
              loading ?
                <div class="w-full h-full flex items-center justify-center ">
                  <Spinner />
                </div>
                :
                <table className="w-full h-full text-sm border text-left relative overflow-scroll">
                  <thead className="bg-gray-50 border-b sticky top-0">
                    <tr>
                      <th className="px-6 py-3">Image</th>
                      <th className="px-6 py-3">Name</th>
                      <th className="px-6 py-3">Email</th>
                      <th className="px-6 py-3">Designation</th>
                      <th className="px-6 py-3">To Date</th>
                      <th className="px-6 py-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className='text-gray-800 text-sm'>
                    {
                      doctors?.map((value, index) => {
                        return <tr key={index} className="bg-white border-b">
                          <td className="px-6 py-4"><img className='w-14 h-14 rounded-full' src={value.image} alt="" /></td>
                          <td className="px-6 py-4">{value.name}</td>
                          <td className="px-6 py-4">{value.email}</td>
                          <td className="px-6 py-4">{value.designation}</td>
                          <td className="px-6 py-4">{moment(value.createdAt).format("DD MMM YYYY")}</td>
                          <td className="px-6 py-4"><Button text={"Present"} /></td>
                        </tr>
                      })
                    }
                  </tbody>
                </table>
            }
          </div>
        </div>
      </Layout>
      <AddDoctor addDoctor={addDoctor} setAddDoctor={setAddDoctor} />
    </>
  )
}

export default Doctors