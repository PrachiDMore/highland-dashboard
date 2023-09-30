import React from 'react'
import Layout from '@/components/Layout'

const page = () => {
  return (
    <>
      <Layout>
        <div className=''>
          <div className='bg-white rounded-md shadow-md'>
            <div className='border-b py-3 px-6 font-medium'>Confirm Notification Panel</div>
            <div className='p-6'>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border text-left">
                  <thead className="bg-gray-50 border-b">
                    <tr>
                      <th className="px-6 py-3">Token Id</th>
                      <th className="px-6 py-3">Name</th>
                      <th className="px-6 py-3">Phone</th>
                      <th className="px-6 py-3">Doctor</th>
                      <th className="px-6 py-3">Date</th>
                      <th className="px-6 py-3">Time</th>
                      <th className="px-6 py-3">Confirm By</th>
                    </tr>
                  </thead>
                  <tbody className='text-gray-800 text-sm'>
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4">ORT215</td>
                      <td className="px-6 py-4">Connectia Solutions Private Limited</td>
                      <td className="px-6 py-4">9741765117</td>
                      <td className="px-6 py-4">Ahmed Rizwan C.M</td>
                      <td className="px-6 py-4">16-Feb-2023</td>
                      <td className="px-6 py-4">3.00PM -3.15PM</td>
                      <td className="px-6 py-4">Confirmed by superadmin</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-6 py-4">ORT215</td>
                      <td className="px-6 py-4">Connectia Solutions Private Limited</td>
                      <td className="px-6 py-4">9741765117</td>
                      <td className="px-6 py-4">Ahmed Rizwan C.M</td>
                      <td className="px-6 py-4">16-Feb-2023</td>
                      <td className="px-6 py-4">3.00PM -3.15PM</td>
                      <td className="px-6 py-4">Confirmed by superadmin</td>
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

export default page