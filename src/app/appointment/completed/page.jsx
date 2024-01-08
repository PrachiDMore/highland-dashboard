"use client"

import Button from '@/components/Button'
import Layout from '@/components/Layout'
import Spinner from '@/components/Spinner'
import axios from 'axios'
import moment from 'moment'
import React, { useEffect, useState } from 'react'

const Completed = () => {

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
			return e?.status === "completed";
		  }).sort((data1, data2) => {
			return moment(data2?.dateofAppointment).format("x") - moment(data1.dateofAppointment).format("x")
		  })
		  )
		})
	}, [])


  return (
	<Layout>
	<div className='grid grid-cols-1 gap-3 custom-height-table-parent shadow-md rounded-md border'>
	  <div className=' rounded-md shadow-md'>
		<h2 className='border-b py-3 px-6 font-medium'>Completed Appointments</h2>
		<div className="mx-6 mb-6 overflow-x-auto custom-height-table mt-2">
		  {
			loading ?
			  <div class="w-full h-full flex items-center justify-center ">
				<Spinner/>
			  </div>
			  :
			  <table className="w-full text-sm border text-left relative overflow-scroll">
				<thead className="bg-gray-50 border-b sticky top-0">
				  <tr>
					<th className="px-6 py-3">Token Id</th>
					<th className="px-6 py-3">Name</th>
					<th className="px-6 py-3">Doctor</th>
					<th className="px-6 py-3">Appointment Date</th>
					<th className="px-6 py-3">Time Slot</th>
					<th className="px-6 py-3">Phone</th>
					{/* <th className="px-6 py-3">Action 3 (Accept)</th> */}
				  </tr>
				</thead>
				<tbody className='text-gray-800 text-sm'>
				  {appointments?.map((value, index) => {
					return <tr key={index} className="bg-white border-b">
					  <td className="px-6 py-4">#{value?._id?.slice(18)}</td>
					  <td className="px-6 py-4">{value.firstname}</td>
					  <td className="px-6 py-4">{value.doctor?.name}</td>
					  <td className="px-6 py-4">{moment(value.dateofAppointment).format("DD-MMM-YYYY")}</td>
					  <td className="px-6 py-4">{moment(value.timeofAppointment).format("hh:mm a")}</td>
					  <td className="px-6 py-4">{value.phoneNumber}</td>
					</tr>
				  })
				  }
				</tbody>
			  </table>}
		</div>
	  </div>
	</div>
  </Layout>
  )
}

export default Completed 