import React from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div className='w-screen h-screen flex'>
      <div className='w-[15%] h-screen fixed'>
        <Sidebar />
      </div>
      <div className='w-[85%] ml-[15%] custom-height'>
        <Topbar />
        <div className='overflow-scroll mt-20'>
          <div className='p-7 bg-lightBlue h-full'>
            {children}
          </div>
          <Footer/>
        </div>
      </div>

    </div>
  )
}

export default Layout