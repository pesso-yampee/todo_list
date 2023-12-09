import { Metadata } from 'next'
import { ReactNode } from 'react'
import './globals.css'
import { AppProvider } from './provider'

export const metadata: Metadata = {
  title: 'Todo List',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  )
}
