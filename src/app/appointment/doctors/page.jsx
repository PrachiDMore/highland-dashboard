import React from 'react'
import Layout from '@/components/Layout'
import Button from '@/components/Button'

const page = () => {
  return (
    <>
      <Layout>
        <div className='grid grid-cols-1 gap-3'>
          <div className='bg-white rounded-md shadow-md'>
            <div className='border-b py-3 px-6 font-medium'>All doctors</div>
            <div>
              <div className="m-4 overflow-x-auto">
                <table className="w-full text-sm border text-left">
                  <thead className="bg-gray-50 border-b">
                    <tr>
                      <th className="px-6 py-3">Image</th>
                      <th className="px-6 py-3">Name</th>
                      <th className="px-6 py-3">Email</th>
                      <th className="px-6 py-3">From Date</th>
                      <th className="px-6 py-3">To Date</th>
                      <th className="px-6 py-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className='text-gray-800 text-sm'>
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4"><img className='w-14 h-14 rounded-full' src="/assets/user.jpeg" alt="" /></td>
                      <td className="px-6 py-4">Jalaludden M.V.</td>
                      <td className="px-6 py-4">Jalaludden@gmail.in</td>
                      <td className="px-6 py-4">12/12/23</td>
                      <td className="px-6 py-4">12/12/23</td>
                      <td className="px-6 py-4"><Button text={"Present"}/></td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-6 py-4"><img className='w-14 h-14 rounded-full' src="/assets/user.jpeg" alt="" /></td>
                      <td className="px-6 py-4">Jalaludden M.V.</td>
                      <td className="px-6 py-4">Jalaludden@gmail.in</td>
                      <td className="px-6 py-4">12/12/23</td>
                      <td className="px-6 py-4">12/12/23</td>
                      <td className="px-6 py-4"><Button text={"Present"}/></td>
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