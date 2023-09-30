import React from 'react'
import Button from './Button'
import Input from './Input'

const EditNewsModal = ({ setEditNews, editNews }) => {
  return (
    <>
      <div id="staticModal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true" className={editNews ? "fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen flex justify-center items-center max-h-full opacity-100 bg-black/50" : "fixed flex justify-center items-center top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen max-h-full opacity-0 bg-black/50 pointer-events-none"}>
        <div className="relative w-full max-w-3xl max-h-full">

          <div className="relative bg-white rounded-lg shadow ">

            <div className="flex items-center justify-between p-6 pb-3 border-b rounded-t ">
              <h3 className="text-xl font-semibold text-gray-900 ">
                Edit Content
              </h3>
              <button onClick={() => { setEditNews(false) }} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-6 h-6 ml-auto inline-flex justify-center items-center " data-modal-hide="staticModal">
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <div className="p-6 flex flex-col justify-center gap-3">
              <div className='flex justify-between gap-3 '>
                <Input textarea={false} type={"file"}/>
                <img className='h-28' src="/assets/news.png" alt="" />
              </div>
              <Input textarea={false} type={"text"} value={"Children's Mental Health Awareness Week"}/>
              <Input textarea={true} text={"You know what this wonderful week is all about, but when is it? The weeks of February 61-2, 2023, will be marked as Children's Mental Health Week. Children's Mental Health Week has a different theme every year. Lets Connect is the focus of Children's Mental Health Week in 2023. Facts about Children's Mental Health Week To help you understand more about this significant occasion, here are five facts about Children Mental Health Week: 1.2015 saw the debut of Children's Mental Health Week. 2.The previous years topic for Children's Mental Health Week in 2022 'Express Yourself'. 3.According to The Children's Society, five out of every 30 students in a school are likely to struggle with mental health issues. 4.According to The Children's Society, 50% of all mental health issues begin before the age of 14 years old. 5. 75% of adolescents and teenagers with mental health issues don't receive the necessary support (Mental Health Foundation)."}/>
              {/* <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                The European Union's General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
              </p> */}
            </div>

            <div className="flex items-center justify-center p-6 pt-3 border-t border-gray-200 rounded-b ">
              <Button  text={"Update"}/>

              {/* <button data-modal-hide="staticModal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
              <button data-modal-hide="staticModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button> */}
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default EditNewsModal