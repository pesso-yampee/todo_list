import './globals.css'
import { ReactNode } from 'react'
export const metadata: Metadata = {
  title: 'Todo List',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body lang="ja">{children}</body>
    </html>
  )
}
