"use client";

import { AuthContextProvider } from '@/context/Auth'
import './globals.css'
import { Inter } from 'next/font/google'
import LoadingBar from 'react-top-loading-bar'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

const metadata = {
  title: 'Highland Hospital',
  description: 'Highland Hospital Dashboard',
}

export default function RootLayout({ children }) {
  const router = useRouter()
  useEffect(() => {
    if (localStorage.getItem("token") === null || localStorage.getItem("token") === "") {
      router.push("/login")
    } else {
      return;
    }
  }, [])
  return (
    <html lang="en">
      <body className={inter.className}>
      <script src="https://upload-widget.cloudinary.com/global/all.js" type="text/javascript" async></script>  
        {/* <LoadingBar color='#f11946' ref={ref} /> */}
        <AuthContextProvider>
          {children}
        </AuthContextProvider>
      </body>
    </html>
  )
}
