import Layout from '../components/Layout'
import Button from '@/components/Button'
import Card from '@/components/Card'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { BsCheckLg } from 'react-icons/bs'
import { IoCallSharp } from 'react-icons/io5'
import { AiOutlineMessage, AiOutlineFilePdf } from 'react-icons/ai'
import { LuNewspaper } from 'react-icons/lu'
import { FaUserMd, FaRegCalendarCheck, FaRegClock } from 'react-icons/fa'

export default function Home() {
  return (
    <>
      <Layout>
        <Button text={"Book Appointment"} />

        <div className='my-8'>
          <h1 className='text-xl font-semibold'>Appointment Overview</h1>
          <div className='grid grid-cols-4 gap-5 mt-2'>
            <Card heading={"New"} number={"0"} icon={<IoMdNotificationsOutline className='text-2xl text-blue-500'/>} />
            <Card heading={"Schedule Today"} number={"0"} icon={<FaRegCalendarCheck className='text-2xl text-blue-500'/>} />
            <Card heading={"Confirmed"} number={"25"} icon={<BsCheckLg className='text-2xl text-blue-500'/>} />
            <Card heading={"Postponed"} number={"0"} icon={<FaRegClock className='text-2xl text-red-500'/>} className={"bg-red-50"}/>
            <Card heading={"Doctors"} number={"4"} icon={<FaUserMd className='text-2xl text-blue-500'/>} />
          </div>
        </div>

        <div className='my-8'>
          <h1 className='text-xl font-semibold'>Hospital Overview</h1>
          <div className='grid grid-cols-4 gap-5 mt-2'>
            <Card heading={"Hospital News"} number={"7"} icon={<LuNewspaper className='text-2xl text-blue-500'/>} />
            <Card heading={"Feedbacks"} number={"14"} icon={<AiOutlineMessage className='text-2xl text-blue-500'/>} />
            <Card heading={"Hospital Contacts"} number={"219"} icon={<IoCallSharp className='text-2xl text-blue-500'/>} />
            <Card heading={"Career applications"} number={"85"} icon={<AiOutlineFilePdf className='text-2xl text-blue-500'/>} />
          </div>
        </div>

        <div className='my-8'>
          <h1 className='text-xl font-semibold'>Nursing Overview</h1>
          <div className='grid grid-cols-4 gap-5 mt-2'>
            <Card heading={"Nursing News"} number={"0"} icon={<LuNewspaper className='text-2xl text-blue-500'/>} />
            <Card heading={"Nursing Contacts"} number={"88"} icon={<IoCallSharp className='text-2xl text-blue-500'/>} />
          </div>
        </div>
      </Layout>
    </>
  )
}
