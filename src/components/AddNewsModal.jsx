import React, { useState } from 'react'
import Input from './Input'
import Button from './Button'
import axios from 'axios'

const AddNewsModal = ({ addNews, setAddNews }) => {

  const initialState = {
    title:"",
    description:"",
    image:""
  }
  const [formState, setFormState] = useState(initialState)

  const handleChange = (e) => {
    e.preventDefault()
    setFormState({
      ...formState,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios("https://highland-hospital-backend.vercel.app/post-news", {
      method: "POST",
      data: {
        title: formState.title,
        description: formState.description,
        image: formState.image
      }
    })
    .then((res) => {
      if(!res.data.error){
        setFormState(initialState)
        alert("News Added!")
      } else {
        console.log(res.data.message)
        alert("Something went wrong!")
      }
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <div>
      <div id="staticModal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true" className={addNews ? "fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen flex justify-center items-center max-h-full opacity-100 bg-black/50" : "fixed flex justify-center items-center top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen max-h-full opacity-0 bg-black/50 pointer-events-none"}>
        <div className="relative w-full max-w-3xl max-h-full">

          <form onSubmit={handleSubmit} className="relative bg-white rounded-lg shadow ">

            <div className="flex items-center justify-between p-6 pb-3 border-b rounded-t ">
              <h3 className="text-xl font-semibold text-gray-900 ">
                Add News
              </h3>
              <button onClick={() => { setAddNews(false) }} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-6 h-6 ml-auto inline-flex justify-center items-center " data-modal-hide="staticModal">
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <div className="p-6 flex flex-col justify-center gap-3">
              <img className='m-auto h-28 w-28 shadow-lg border rounded-lg' src="https://static.vecteezy.com/system/resources/previews/008/015/799/non_2x/illustration-of-no-image-available-icon-template-for-no-image-or-picture-coming-soon-free-vector.jpg" alt="" />
              <Input onChange={handleChange} value={formState.image} id={"image"} textarea={false} type={"file"} className={""} />
              <Input onChange={handleChange} value={formState.title} id={"title"} textarea={false} type={"text"} placeholder={"Enter title"} />
              <Input onChange={handleChange} value={formState.description} id={"description"} textarea={true} placeholder={"Enter description"} />
            </div>

            <div className="flex items-center justify-center p-6 pt-3 border-t border-gray-200 rounded-b ">
              <Button type={"submit"} text={"Publish News"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddNewsModal
