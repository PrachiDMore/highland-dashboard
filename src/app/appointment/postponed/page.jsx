import React from 'react'
import Layout from '@/components/Layout'

const page = () => {
  return (
    <>
      <Layout>
        <div className=''>
          {/* <p className='text-xl font-bold'>Postpone Notification Panel</p> */}
          <div className='bg-white rounded-md shadow-md'>
            <div className='border-b py-3 px-6 font-medium'>Postpone Notification Panel</div>
            <div className='p-6'>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border text-left">
                  <thead className="bg-gray-50 border-b">
                    <tr>
                      <th className="px-6 py-3">Token Id</th>
                      <th className="px-6 py-3">Name</th>
                      <th className="px-6 py-3">Doctor</th>
                      <th className="px-6 py-3">Date</th>
                      <th className="px-6 py-3">Time</th>
                      <th className="px-6 py-3">Phone</th>
                      <th className="px-6 py-3">Postpone Status</th>
                      <th className="px-6 py-3">Confirm</th>
                    </tr>
                  </thead>
                  <tbody className='text-gray-800 text-sm'>
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4">1</td>
                      <td className="px-6 py-4">Prachi</td>
                      <td className="px-6 py-4">doctor</td>
                      <td className="px-6 py-4">12/12/23</td>
                      <td className="px-6 py-4">12:30</td>
                      <td className="px-6 py-4">1234567890</td>
                      <td className="px-6 py-4">status</td>
                      <td className="px-6 py-4">confirm</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-6 py-4">1</td>
                      <td className="px-6 py-4">Prachi</td>
                      <td className="px-6 py-4">doctor</td>
                      <td className="px-6 py-4">12/12/23</td>
                      <td className="px-6 py-4">12:30</td>
                      <td className="px-6 py-4">1234567890</td>
                      <td className="px-6 py-4">status</td>
                      <td className="px-6 py-4">confirm</td>
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