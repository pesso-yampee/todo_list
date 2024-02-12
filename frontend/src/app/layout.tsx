import { HeaderNavigation } from '_components/common/HeaderNavigation'
import { Metadata } from 'next'
import { ReactNode } from 'react'
import { AppProvider } from '../providers/AppProvider'
import './globals.css'

export const metadata: Metadata = {
  title: 'Todo List',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <AppProvider>
          <HeaderNavigation />
          {children}
        </AppProvider>
      </body>
    </html>
  )
}
