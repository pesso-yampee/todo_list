import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { Provider as JotaiProvider } from 'jotai'
import { Metadata } from 'next'
import { ReactNode } from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'Todo List',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='ja'>
      <body>
        <JotaiProvider>
          <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
        </JotaiProvider>
      </body>
    </html>
  )
}
