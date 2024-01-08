"use client";

import Layout from '../components/Layout'
import Button from '@/components/Button'
import Card from '@/components/Card'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { BsCheckLg } from 'react-icons/bs'
import { IoCallSharp } from 'react-icons/io5'
import { AiOutlineMessage, AiOutlineFilePdf } from 'react-icons/ai'
import { LuNewspaper } from 'react-icons/lu'
import { FaUserMd, FaRegCalendarCheck, FaRegClock } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import axios from 'axios';
import moment from 'moment';

export default function Home() {

  const [appointments, setAppointments] = useState([])
  const [doctors, setDoctors] = useState([])
  const [news, setNews] = useState([])
  const [feedbacks, setFeedbacks] = useState([])
  const [contacts, setContacts] = useState([])
  const [nursingContacts, setNursingContacts] = useState([])
  const [career, setCareer] = useState([])

  useEffect(() => {
    axios('https://highland-hospital-backend.vercel.app/get-appointment', {
      method: 'GET',
      headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
    })
      .then((res) => {
        setAppointments(res.data.response);
      })
    axios('https://highland-hospital-backend.vercel.app/get-doctor', {
      method: 'GET',
      headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
    })
      .then((res) => {
        setDoctors(res.data.response);
      })
    axios('https://highland-hospital-backend.vercel.app/get-news', {
      method: 'GET',
      headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
    })
      .then((res) => {
        setNews(res.data.response);
      })
    axios('https://highland-hospital-backend.vercel.app/get-feedback', {
      method: 'GET',
      headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
    })
      .then((res) => {
        setFeedbacks(res.data.response);
      })
    axios('https://highland-hospital-backend.vercel.app/get-contact', {
      method: 'GET',
      headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
    })
      .then((res) => {
        setContacts(res.data.response);
      })
    axios('https://highland-hospital-backend.vercel.app/get-career', {
      method: 'GET',
      headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
    })
      .then((res) => {
        setCareer(res.data.response);
      })
    axios('https://highland-hospital-backend.vercel.app/get-nursing-contact', {
      method: 'GET',
      headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
    })
      .then((res) => {
        setNursingContacts(res.data.response);
      })
  }, [])

  return (
    <>
      <Layout>
        <Button text={"Book Appointment"} />

        <div className='my-8'>
          <h1 className='text-xl font-semibold'>Appointment Overview</h1>
          <div className='grid grid-cols-4 gap-5 mt-2'>
            <Card link={'/appointment/uncheck'} heading={"New"} number={appointments?.filter((e) => {
              return e?.status === "new"; }).length} icon={<IoMdNotificationsOutline className='text-2xl ' />} />

            <Card link={'/appointment/scheduled-today'} heading={"Schedule Today"} number={appointments.filter((e) => {
              return e?.status === "confirmed" && moment(Date.now()).format("DD-MMM-YYYY") === moment(e?.dateofAppointment).format("DD-MMM-YYYY"); }).length} icon={<FaRegCalendarCheck className='text-2xl ' />} />

            <Card link={'/appointment/confirmed'} heading={"Confirmed"} number={appointments.filter((e) => {
              return e?.status === "confirmed";
            }).sort((data1, data2) => {
              return moment(data2?.dateofAppointment).format("x") - moment(data1.dateofAppointment).format("x")
            }).length} icon={<BsCheckLg className='text-2xl ' />} />

            {/* <Card link={'/appointment/postponed'} heading={"Postponed"} number={"0"} icon={<FaRegClock className='text-2xl text-customeRed' />} className={"bg-red-50"} /> */}

            <Card link={'/appointment/doctors'} heading={"Doctors"} number={doctors?.length} icon={<FaUserMd className='text-2xl ' />} />
          </div>
        </div>

        <div className='my-8'>
          <h1 className='text-xl font-semibold'>Hospital Overview</h1>
          <div className='grid grid-cols-4 gap-5 mt-2'>
            <Card link={'/hospital/hospital-news'} heading={"Hospital News"} number={news?.length} icon={<LuNewspaper className='text-2xl ' />} />
            <Card link={'/hospital/feedback'} heading={"Feedbacks"} number={feedbacks?.length} icon={<AiOutlineMessage className='text-2xl ' />} />
            <Card link={'/hospital/hospital-contact'} heading={"Hospital Contacts"} number={contacts?.length} icon={<IoCallSharp className='text-2xl ' />} />
            <Card link={'/hospital/career-details'} heading={"Career applications"} number={career?.length} icon={<AiOutlineFilePdf className='text-2xl ' />} />
          </div>
        </div>

        <div className='my-8'>
          <h1 className='text-xl font-semibold'>Nursing Overview</h1>
          <div className='grid grid-cols-4 gap-5 mt-2'>
            <Card link={'/nursing/nursing-news'} heading={"Nursing News"} number={news?.length} icon={<LuNewspaper className='text-2xl ' />} />
            <Card link={'/nursing/nursing-contact"'} heading={"Nursing Contacts"} number={nursingContacts?.length} icon={<IoCallSharp className='text-2xl ' />} />
          </div>
        </div>
      </Layout>
    </>
  )
}
