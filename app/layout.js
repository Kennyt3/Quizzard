import './global.css'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'
import Loading from './(loading)'
import UserProvider from '@/context/userContext'
export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Suspense fallback={<Loading />}>
          <UserProvider>{children}</UserProvider>
        </Suspense>
      </body>
    </html>
  )
}
