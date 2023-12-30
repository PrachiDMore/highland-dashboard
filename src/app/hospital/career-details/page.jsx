"use client"

import Button from '@/components/Button'
import Layout from '@/components/Layout'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {FaDownload} from 'react-icons/fa'

const CareerDetails = () => {
  const [careers, setCareers] = useState()
  useEffect(() => {
    axios("https://highland-hospital-backend.vercel.app/get-career", {
      method: "GET",
      headers: { "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIkMmIkMTAkWk9DZnVJYkQ4ZHhnMFI3MjVsMzlUT0tNYVJwY3dRMzNQZW5UQkdQYWdnY3M1bDFtL1ZZcWEiLCJpYXQiOjE3MDI1NTM2NDd9.e88TIYPxwjcLVAe0Q4dy0Ep0UEigbFJQy6bODbQ0Cbw" }
    })
    .then((res) => {
      setCareers(res.data.response)
    })
  }, [])

  return (
    <>
      <Layout>
      <div className=''>
          <div className='bg-white rounded-md shadow-md'>
            <div className='border-b py-3 px-6 font-medium'>Career</div>
            <div className='p-6'>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border text-left">
                  <thead className="bg-gray-50 border-b">
                    <tr>
                      <th className="px-6 py-3">Personal Details</th>
                      <th className="px-6 py-3">Position</th>
                      <th className="px-6 py-3">Resume</th>
                      <th className="px-6 py-3">Applied Date</th>
                      <th className="px-6 py-3">Status</th>
                      <th className="px-6 py-3">Publish</th>
                      <th className="px-6 py-3">Action</th>
                    </tr>
                  </thead>
                  <tbody className='text-gray-800 text-sm'>
                    <tr className="bg-white border-b ">
                      <td className="px-6 py-4"><b>Vishnu rajesh</b><br /> vishnurajesh5219@gmail.com </td>
                      <td className="px-6 py-4">Administration / Operations</td>
                      <td className="px-6 py-4"><FaDownload className='text-lg'/></td>
                      <td className="px-6 py-4">24-Sep-2023</td>
                      <td className="px-6 py-4">Pending Response</td>
                      <td className="px-6 py-4"><Button text={"Respond"}/></td>
                      <td className="px-6 py-4"><Button className={"bg-customeRed hover:bg-redHover"} text={"Delete"}/></td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-6 py-4"><b>Vishnu rajesh</b><br /> vishnurajesh5219@gmail.com </td>
                      <td className="px-6 py-4">Administration / Operations</td>
                      <td className="px-6 py-4"><FaDownload className='text-lg'/></td>
                      <td className="px-6 py-4">24-Sep-2023</td>
                      <td className="px-6 py-4">Pending Response</td>
                      <td className="px-6 py-4"><Button text={"Respond"}/></td>
                      <td className="px-6 py-4"><Button className={"bg-customeRed hover:bg-redHover"} text={"Delete"}/></td>
                    </tr>
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

export default CareerDetails 
