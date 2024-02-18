import { Provider } from 'jotai'
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
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
