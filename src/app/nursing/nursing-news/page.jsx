"use client";

import Button from '@/components/Button'
import Layout from '@/components/Layout'
import React, { useEffect, useState } from 'react'
import { BsCheckCircle } from 'react-icons/bs'
import { FiEdit } from 'react-icons/fi'
import { AiOutlineDelete, AiOutlineEye } from 'react-icons/ai'
import NewsModal from '@/components/NewsModal';
import EditNewsModal from '@/components/EditNewsModal';
import AddNewsModal from '@/components/ManageNewsModal';
import Spinner from '@/components/Spinner';
import axios from 'axios';
import moment from 'moment';

const NursingNews = () => {
  const [showNews, setShowNews] = useState({ show: false, data: undefined })
  const [editNews, setEditNews] = useState(false)
  const [addNews, setAddNews] = useState(false)
  const [loading, setLoading] = useState(false)

  const [news, setNews] = useState()
  useEffect(() => {
    setLoading(true)
    axios("https://highland-hospital-backend.vercel.app/get-news", {
      method: "GET",
      headers: { "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIkMmIkMTAkWk9DZnVJYkQ4ZHhnMFI3MjVsMzlUT0tNYVJwY3dRMzNQZW5UQkdQYWdnY3M1bDFtL1ZZcWEiLCJpYXQiOjE3MDI1NTM2NDd9.e88TIYPxwjcLVAe0Q4dy0Ep0UEigbFJQy6bODbQ0Cbw" }
    })
      .then((res) => {
        setLoading(false)
        setNews(res.data.response)
      })
  }, [])

  return (
    <>
      <Layout>
        <div className='grid grid-cols-1 gap-3 custom-height-table-parent shadow-md rounded-md border'>
          <div className='flex justify-between items-center border-b py-3 px-6'>
            <div className=' font-medium'>Nursing News</div>
            <Button text={"Add News"} onClick={() => { setAddNews(true) }} />
          </div>
          <div className='px-6'>
            <div className="overflow-x-auto  custom-height-table">
              {loading ?
                <div class="w-full h-full flex items-center justify-center ">
                  <Spinner />
                </div>
                :
                <table className="w-full text-sm  border-r border-l border-b text-left relative overflow-scroll">
                  <thead className="bg-gray-50 border sticky top-0">
                    <tr>
                      <th className="px-6 py-3">News Id</th>
                      <th className="px-6 py-3">Image</th>
                      <th className="px-6 py-3">Heading</th>
                      <th className="px-6 py-3">Publish Date</th>
                      <th className="px-6 py-3">Status</th>
                      <th className="px-6 py-3">Publish</th>
                      <th className="px-6 py-3">Action</th>
                    </tr>
                  </thead>
                  <tbody className='text-gray-800 text-sm'>
                    {news?.map((value, index) => {
                      return <tr key={index} className="bg-white border-b">
                        <td className="px-6 py-4">1</td>
                        <td className="px-6 py-4"><img className='w-12 h-12 rounded-md' src={value.image} alt="" /></td>
                        <td className="px-6 py-4">{value?.title}</td>
                        <td className="px-6 py-4">{moment(value.timestamp).format("DD MMM YYYY")}</td>
                        <td className="px-6 py-4"><BsCheckCircle className='text-accentGreen text-lg' /></td>
                        <td className="px-6 py-4"><Button className={"bg-customeRed hover:bg-redHover"} text={"Unpublish"} /></td>
                        <td className="px-6 py-4 h-24 flex items-center gap-6"><AiOutlineEye onClick={() => { setShowNews({show: true, data: value}) }} className='text-xl text-accentGreen' />  <FiEdit onClick={() => { setEditNews(true) }} className='text-lg text-accentGreen' /> <AiOutlineDelete className='text-lg text-customeRed font-medium' /> </td>
                      </tr>
                    })}
                    {/* <tr className="bg-white border-b">
                      <td className="px-6 py-4">1</td>
                      <td className="px-6 py-4"><img className='w-14 h-14 rounded-md' src="/assets/news.png" alt="" /></td>
                      <td className="px-6 py-4">Children's Mental Health Awareness Week	</td>
                      <td className="px-6 py-4">10-Feb-2023</td>
                      <td className="px-6 py-4"><BsCheckCircle className='text-accentGreen text-lg' /></td>
                      <td className="px-6 py-4"><Button className={"bg-customeRed hover:bg-redHover"} text={"Unpublish"} /></td>
                      <td className="px-6 py-4 h-24 flex items-center gap-6"><AiOutlineEye  onClick={() => { setShowNews(true) }} className='text-xl text-accentGreen' />  <FiEdit onClick={() => { setEditNews(true) }} className='text-lg text-accentGreen' /> <AiOutlineDelete className='text-lg text-customeRed font-medium' /> </td>
                    </tr> */}
                  </tbody>
                </table>}
            </div>

          </div>
        </div>
      </Layout>
      <NewsModal setShowNews={setShowNews} showNews={showNews} />
      <EditNewsModal setEditNews={setEditNews} editNews={editNews} />
      <AddNewsModal setAddNews={setAddNews} addNews={addNews} />
    </>
  )
}

export default NursingNews