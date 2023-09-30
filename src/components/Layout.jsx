import React from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div className='w-screen h-screen flex'>
      <div className='w-[16%] h-screen fixed'>
        <Sidebar />
      </div>
      <div className='w-[84%] ml-[16%] h-screen'>
        <Topbar />
        <div className='custom-height mt-20 p-7 overflow-y-auto'>
          {children}
        </div>
        <Footer />
      </div>

    </div>
  )
}

export default Layout