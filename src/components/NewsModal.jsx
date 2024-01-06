import React from 'react'

const NewsModal = ({ showNews, setShowNews }) => {
  return (
    <>
      <div id="defaultModal" tabindex="-1" aria-hidden="true" className={showNews?.show ? "fixed flex justify-center items-center top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen max-h-full opacity-100 bg-black/50" : " flex justify-center items-center fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen max-h-full opacity-0 pointer-events-none bg-black/50"}>
        <div className="relative w-full max-w-3xl max-h-full">
          <div className="relative bg-white rounded-lg shadow ">

            <div className="flex items-center justify-between p-6 pb-3 border-b rounded-t ">
              <h3 className="text-xl font-semibold text-gray-900 ">
                {showNews?.data?.title}
              </h3>
              <button onClick={() => { setShowNews({ show: false, data: undefined }) }} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-6 h-6 ml-auto inline-flex justify-center items-center " data-modal-hide="staticModal">
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
              </button>
            </div>

            <div className="p-6">
              <img src={showNews?.data?.image} alt="" className='w-60 h-60 rounded-lg m-auto' />
              <p className="leading-relaxed text-gray-500 ">
                {showNews?.data?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewsModal