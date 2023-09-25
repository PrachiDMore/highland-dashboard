import Button from '@/components/Button'
import Layout from '@/components/Layout'
import React from 'react'
import { BsCheckCircle } from 'react-icons/bs'
import { FiEdit } from 'react-icons/fi'
import { AiOutlineDelete, AiOutlineEye } from 'react-icons/ai'

const page = () => {
  return (
    <>
      <Layout>
        <div className='grid grid-cols-1 gap-3'>
          <div className='bg-white rounded-md shadow-md'>
            <div className='flex justify-between items-center border-b py-3 px-6'>
              <div className=' font-medium'>Hospital News</div>
              <Button text={"Add News"} />
            </div>
            <div>
              <div className="m-4 overflow-x-auto">
                <table className="w-full text-sm border text-left">
                  <thead className="bg-gray-50 border-b">
                    <tr>
                      <th className="px-6 py-3">Sr No.</th>
                      <th className="px-6 py-3">Image</th>
                      <th className="px-6 py-3">Heading</th>
                      <th className="px-6 py-3">Publish Date</th>
                      <th className="px-6 py-3">Status</th>
                      <th className="px-6 py-3">Publish</th>
                      <th className="px-6 py-3">Action</th>
                    </tr>
                  </thead>
                  <tbody className='text-gray-800 text-sm'>
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4">1</td>
                      <td className="px-6 py-4"><img className='w-14 h-14 rounded-md' src="/assets/news.png" alt="" /></td>
                      <td className="px-6 py-4">Children's Mental Health Awareness Week	</td>
                      <td className="px-6 py-4">10-Feb-2023</td>
                      <td className="px-6 py-4"><BsCheckCircle className='text-blue-500 text-lg' /></td>
                      <td className="px-6 py-4"><Button className={"bg-red-500"} text={"Unpublish"} /></td>
                      <td className="px-6 py-4 flex items-center gap-6"><AiOutlineEye className='text-xl text-blue-500' />  <FiEdit className='text-lg text-blue-500' /> <AiOutlineDelete className='text-lg text-red-500 font-medium' /> </td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4">1</td>
                      <td className="px-6 py-4"><img className='w-14 h-14 rounded-md' src="/assets/news.png" alt="" /></td>
                      <td className="px-6 py-4">Children's Mental Health Awareness Week	</td>
                      <td className="px-6 py-4">10-Feb-2023</td>
                      <td className="px-6 py-4"><BsCheckCircle className='text-blue-500 text-lg' /></td>
                      <td className="px-6 py-4"><Button className={"bg-red-500"} text={"Unpublish"} /></td>
                      <td className="px-6 py-4 flex items-center gap-6"><AiOutlineEye className='text-xl text-blue-500' />  <FiEdit className='text-lg text-blue-500' /> <AiOutlineDelete className='text-lg text-red-500 font-medium' /> </td>
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