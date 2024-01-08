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
import ManageNewsModal from '@/components/ManageNewsModal';

const NursingNews = () => {
  const [showNews, setShowNews] = useState({ show: false, data: undefined })
  const [manageNews, setManageNews] = useState({ show: false, data: undefined, update: false, nursing: false })
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

  const managePublish = (_id, active) => {
    axios("https://highland-hospital-backend.vercel.app/update-news", {
      method: "PATCH",
      headers: { "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIkMmIkMTAkWk9DZnVJYkQ4ZHhnMFI3MjVsMzlUT0tNYVJwY3dRMzNQZW5UQkdQYWdnY3M1bDFtL1ZZcWEiLCJpYXQiOjE3MDI1NTM2NDd9.e88TIYPxwjcLVAe0Q4dy0Ep0UEigbFJQy6bODbQ0Cbw" },
      data: {
        id: _id,
        updateData: {
          active: !active
        }
      }
    })
      .then((res) => {
        if (!res.data.error) {
          alert("News Updated!")
          window.location.reload();
        } else {
          console.log(res.data.message)
          alert("Something went wrong!")
        }
        setLoading(false)
      })
      .catch((err) => {
        setLoading(false)
        console.log(err)
      })
  }

  const deleteNews = (_id) => {
    axios("https://highland-hospital-backend.vercel.app/delete-news", {
      method: "DELETE",
      headers: { "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIkMmIkMTAkWk9DZnVJYkQ4ZHhnMFI3MjVsMzlUT0tNYVJwY3dRMzNQZW5UQkdQYWdnY3M1bDFtL1ZZcWEiLCJpYXQiOjE3MDI1NTM2NDd9.e88TIYPxwjcLVAe0Q4dy0Ep0UEigbFJQy6bODbQ0Cbw" },
      data: {
        id: _id,
      }
    })
      .then((res) => {
        if (!res.data.error) {
          alert("News Deleted!")
          window.location.reload();
        } else {
          console.log(res.data.message)
          alert("Something went wrong!")
        }
        setLoading(false)
      })
      .catch((err) => {
        setLoading(false)
        console.log(err)
      })
  }

  return (
    <>
      <Layout>
        <div className='grid grid-cols-1 gap-3 custom-height-table-parent shadow-md rounded-md border'>
          <div className='flex justify-between items-center border-b py-3 px-6'>
            <div className=' font-medium'>Nursing News</div>
            <Button text={"Add News"} onClick={() => { setManageNews({ show: true, update: false }) }} />
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
                      {/* <th className="px-6 py-3">Status</th> */}
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
                        {/* <td className="px-6 py-4"><BsCheckCircle className='text-accentGreen text-lg' /></td> */}
                        <td className="px-6 py-4"><Button onClick={() => managePublish(value?._id, value?.active)} type={"button"} className={value?.active && "bg-customeRed hover:bg-redHover"} text={value?.active ? "Unpublish" : "Publish"} /></td>
                        <td className="px-6 py-4 h-24 flex items-center gap-6"><AiOutlineEye onClick={() => { setShowNews({ show: true, data: value }) }} className='text-xl cursor-pointer text-accentGreen' />  <FiEdit onClick={() => { setManageNews({ show: true, update: true, data: value }) }} className='cursor-pointer text-lg text-accentGreen' /> <AiOutlineDelete onClick={() => { deleteNews(value?._id) }}className='text-lg cursor-pointer text-customeRed font-medium' /> </td>
                      </tr>
                    })}
                  </tbody>
                </table>}
            </div>

          </div>
        </div>
      </Layout>
      <NewsModal setShowNews={setShowNews} showNews={showNews} />
      <ManageNewsModal key={Date.now()} setManageNews={setManageNews} manageNews={manageNews} />
    </>
  )
}

export default NursingNews