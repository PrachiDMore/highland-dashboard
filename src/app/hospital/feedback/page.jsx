import Layout from '@/components/Layout'
import React from 'react'
import { FiMail } from 'react-icons/fi'
import { AiOutlineDelete } from 'react-icons/ai'

const page = () => {
  return (
    <>
      <Layout>
        <div className=''>
          <div className='bg-white rounded-md shadow-md'>
            <div className='border-b py-3 px-6 font-medium'>Feedbacks</div>
            <div className='p-6'>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border text-left">
                  <thead className="bg-gray-50 border-b">
                    <tr>
                      <th className="px-6 py-3">Sr No.</th>
                      <th className="px-6 py-3">Personal Details</th>
                      <th className="px-6 py-3">Address</th>
                      <th className="px-6 py-3">Description</th>
                      <th className="px-6 py-3">Feedback Date</th>
                      <th className="px-6 py-3">Action</th>
                    </tr>
                  </thead>
                  <tbody className='text-gray-800 text-sm'>
                    <tr className="bg-white border-b ">
                      <td className="px-6 py-4">1</td>
                      <td className="px-6 py-4"><b>Ziya</b><br /> dmziya123@gmail.com <br /> 8884717649</td>
                      <td className="px-6 py-4">Dayambu Adyar</td>
                      <td className="px-6 py-4">One of the best hospital in mangalore, Dr.Rameez had given a good treatment to my granny</td>
                      <td className="px-6 py-4">06-Sep-2023</td>
                      <td className="px-6 py-4 flex flex-1 items-center gap-6"><FiMail className='text-lg text-accentGreen' />  <AiOutlineDelete className='text-lg text-customeRed font-medium' /> </td>
                    </tr>
                    <tr className="bg-white ">
                      <td className="px-6 py-4">1</td>
                      <td className="px-6 py-4"><b>Ziya</b><br /> dmziya123@gmail.com <br /> 8884717649</td>
                      <td className="px-6 py-4">Dayambu Adyar</td>
                      <td className="px-6 py-4">One of the best hospital in mangalore, Dr.Rameez had given a good treatment to my granny</td>
                      <td className="px-6 py-4">06-Sep-2023</td>
                      <td className="px-6 py-4 flex items-center gap-6"><FiMail className='text-lg text-accentGreen' />  <AiOutlineDelete className='text-lg text-customeRed font-medium' /> </td>
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