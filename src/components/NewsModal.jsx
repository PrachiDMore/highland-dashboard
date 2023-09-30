import React from 'react'

const NewsModal = ({ showNews, setShowNews }) => {
  return (
    <>
      <div id="defaultModal" tabindex="-1" aria-hidden="true" className={showNews ? "fixed flex justify-center items-center top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen max-h-full opacity-100 bg-black/50" : " flex justify-center items-center fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen max-h-full opacity-0 pointer-events-none bg-black/50"}>
        <div className="relative w-full max-w-3xl max-h-full">
          <div className="relative bg-white rounded-lg shadow ">

            <div className="flex items-center justify-between p-6 pb-3 border-b rounded-t ">
              <h3 className="text-xl font-semibold text-gray-900 ">
              Children's Mental Health Awareness Week
              </h3>
              <button onClick={() => { setShowNews(false) }} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-6 h-6 ml-auto inline-flex justify-center items-center " data-modal-hide="staticModal">
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <div className="p-6">
              {/* <p className="text-lg font-semibold leading-relaxed ">Children's Mental Health Awareness Week</p> */}
              <p className="leading-relaxed text-gray-500 ">
                You know what this wonderful week is all about, but when is it? The weeks of February 61-2, 2023, will be marked as Children's Mental Health Week. Children's Mental Health Week has a different theme every year. Lets Connect is the focus of Children's Mental Health Week in 2023. Facts about Children's Mental Health Week To help you understand more about this significant occasion, here are five facts about Children Mental Health Week: 1.2015 saw the debut of Children's Mental Health Week. 2.The previous years topic for Children's Mental Health Week in 2022 "Express Yourself". 3.According to The Children's Society, five out of every 30 students in a school are likely to struggle with mental health issues. 4.According to The Children's Society, 50% of all mental health issues begin before the age of 14 years old. 5. 75% of adolescents and teenagers with mental health issues don't receive the necessary support (Mental Health Foundation).
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewsModal