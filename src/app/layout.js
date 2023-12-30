import { AuthContextProvider } from '@/context/Auth'
import './globals.css'
import { Inter } from 'next/font/google'
import LoadingBar from 'react-top-loading-bar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Highland Hospital',
  description: 'Highland Hospital Dashboard',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <LoadingBar color='#f11946' ref={ref} /> */}
        <AuthContextProvider>
          {children}
        </AuthContextProvider>
      </body>
    </html>
  )
}
