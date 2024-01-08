"use client"

import React, { useEffect, useState } from 'react'
import Layout from '@/components/Layout'
import Button from '@/components/Button'
import axios from 'axios'
import moment from 'moment'
import Spinner from '@/components/Spinner'

const HospitalContact = () => {
  const [contacts, setContacts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios("https://highland-hospital-backend.vercel.app/get-contact", {
      method: 'GET',
      headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
    })
      .then((res) => {
        setLoading(false)
        setContacts(res.data.response.sort((data1, data2) => {
          return data2.timeStamp - data1.timeStamp
        }))
      })
  }, [])

  return (
    <>
      <Layout>
        <div className='grid grid-cols-1 gap-3 custom-height-table-parent shadow-md rounded-md border'>
          <h2 className='border-b py-3 px-6 font-medium'>Hospital contact</h2>
          <div className='px-6'>
            <div className="overflow-x-auto custom-height-table ">
              {
                loading ?
                  <div class="w-full h-full flex items-center justify-center ">
                    <Spinner />
                  </div>
                  :
                  <table className="w-full text-sm border text-left  relative overflow-scroll">
                    <thead className="bg-gray-50 border-b sticky top-0">
                      <tr>
                        <th className="px-6 py-3">Personal Details</th>
                        <th className="px-6 py-3">Subject</th>
                        <th className="px-6 py-3">Message</th>
                        <th className="px-6 py-3">Contact Date</th>
                        <th className="px-6 py-3">Status</th>
                        <th className="px-6 py-3">Publish</th>
                      </tr>
                    </thead>
                    <tbody className='text-gray-800 text-sm'>
                      {
                        contacts?.map((value, index) => {
                          return <tr key={index} className="bg-white border-b ">
                            <td className="px-6 py-4"><b>{value.firstName} {value.lastName}</b><br /> {value.email} <br /> {value.phonenumber}</td>
                            <td className="px-6 py-4">{value.subject}</td>
                            <td className="px-6 py-4">{value.message}</td>
                            <td className="px-6 py-4">{moment(value?.timeStamp).format("DD-MMM-YYYY")}</td>
                            <td className="px-6 py-4">Pending Response</td>
                            <td className="px-6 py-4"><Button text={"Respond"} /></td>
                          </tr>
                        })
                      }

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
              }
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default HospitalContact