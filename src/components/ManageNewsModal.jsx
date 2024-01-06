import React, { useEffect, useState } from 'react'
import Input from './Input'
import Button from './Button'
import axios from 'axios'
import Spinner from './Spinner'

const ManageNewsModal = ({ manageNews, setManageNews }) => {
  const [loading, setLoading] = useState(false)
  const initialState = {
    title: "",
    description: "",
    image: "https://cloudinary-marketing-res.cloudinary.com/image/upload/f_auto,q_auto/v1662679291/phone-image.png",
    timestamp: ""
  }
  const [formState, setFormState] = useState(initialState)

  useEffect(() => {
    if (manageNews?.show && manageNews?.update) {
      setFormState(manageNews?.data)
    }
  }, [manageNews])


  const handleChange = (e) => {
    e.preventDefault()
    setFormState({
      ...formState,
      [e.target.id]: e.target.value
    })
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    if (!manageNews?.update && !manageNews.nursing) {
      axios("https://highland-hospital-backend.vercel.app/post-news", {
        method: "POST",
        headers: { "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIkMmIkMTAkWk9DZnVJYkQ4ZHhnMFI3MjVsMzlUT0tNYVJwY3dRMzNQZW5UQkdQYWdnY3M1bDFtL1ZZcWEiLCJpYXQiOjE3MDI1NTM2NDd9.e88TIYPxwjcLVAe0Q4dy0Ep0UEigbFJQy6bODbQ0Cbw" },
        data: {
          title: formState.title,
          description: formState.description,
          image: "https://cloudinary-marketing-res.cloudinary.com/image/upload/f_auto,q_auto/v1662679291/phone-image.png",
          timestamp: Date.now()
        }
      })
        .then((res) => {
          if (!res.data.error) {
            setFormState(initialState)
            alert("News Added!")
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
    } else {
      axios("https://highland-hospital-backend.vercel.app/update-news", {
        method: "PATCH",
        headers: { "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIkMmIkMTAkWk9DZnVJYkQ4ZHhnMFI3MjVsMzlUT0tNYVJwY3dRMzNQZW5UQkdQYWdnY3M1bDFtL1ZZcWEiLCJpYXQiOjE3MDI1NTM2NDd9.e88TIYPxwjcLVAe0Q4dy0Ep0UEigbFJQy6bODbQ0Cbw" },
        data: {
          id: manageNews?.data?._id,
          updateData: {
            title: formState.title,
            description: formState.description,
            image: "https://cloudinary-marketing-res.cloudinary.com/image/upload/f_auto,q_auto/v1662679291/phone-image.png",
            timestamp: formState.timestamp
          }
        }
      })
        .then((res) => {
          if (!res.data.error) {
            setFormState(initialState)
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
  }

  return (
    <div>
      <div id="staticModal" className={manageNews?.show ? "fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen flex justify-center items-center max-h-full opacity-100 bg-black/50" : "fixed flex justify-center items-center top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen max-h-full opacity-0 bg-black/50 pointer-events-none"}>
        <div className="relative w-full max-w-3xl max-h-full">

          <form onSubmit={handleSubmit} className="relative bg-white rounded-lg shadow ">

            <div className="flex items-center justify-between p-6 pb-3 border-b rounded-t ">
              <h3 className="text-xl font-semibold text-gray-900 ">
                {manageNews?.update ? "Update News" : "Add News"}
              </h3>
              <button onClick={() => { setManageNews({ show: false, data: undefined, update: false }) }} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-6 h-6 ml-auto inline-flex justify-center items-center " data-modal-hide="staticModal">
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
              </button>
            </div>

            <div className="p-6 flex flex-col justify-center gap-3">
              <img className='m-auto h-32 w-32 shadow-lg border rounded-lg' src={manageNews?.data?.image} alt="" />
              <Input onChange={handleChange} id={"image"} textarea={false} type={"file"} className={""} />
              <Input onChange={handleChange} value={formState.title} id={"title"} textarea={false} type={"text"} placeholder={"Enter title"} />
              <Input onChange={handleChange} value={formState.description} id={"description"} textarea={true} placeholder={"Enter description"} />
            </div>

            <div className="flex items-center justify-center p-6 pt-3 border-t border-gray-200 rounded-b ">
              <Button disabled={loading} type={"submit"} text={loading ? <Spinner type='button' /> : manageNews?.update ? "Update News" : "Add News"} className={"flex justify-center items-center w-56 py-3"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ManageNewsModal
