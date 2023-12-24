'use client'

import { ReactNode } from 'react'
import { RecoilRoot } from 'recoil'
import { AuthProvider } from './AuthProvider'

export const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <AuthProvider>
      <RecoilRoot>{children}</RecoilRoot>
    </AuthProvider>
  )
}
