import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { Provider as JotaiProvider } from 'jotai'
import { Metadata } from 'next'
import { ReactNode } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './global.css'

export const metadata: Metadata = {
  title: 'Todo List',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='ja'>
      <body>
        <JotaiProvider>
          <AppRouterCacheProvider>
            {children}
            <ToastContainer />
          </AppRouterCacheProvider>
        </JotaiProvider>
      </body>
    </html>
  )
}
