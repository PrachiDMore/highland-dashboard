import Layout from '@/components/Layout'
import React from 'react'

const page = () => {
  return (
    <>
      <Layout>
          <div className='bg-white rounded-md shadow-md'>
            <div className='border-b py-3 px-6 font-medium'>New Notification Panel</div>
            <div className='px-3 py-7 text-gray-400 text-sm text-center'>No New Appointment</div>
          </div>
      </Layout>
    </>
  )
}

export default page