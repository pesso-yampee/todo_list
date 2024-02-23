import { PAGE_PATH } from '@/constants/pagePath'
import { isAuthenticatedAtom } from '@/store'
import { useAtomValue } from 'jotai'
import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const SanctumGuard = ({ children }: Props) => {
  const router = useRouter()
  const isAuthenticated = useAtomValue(isAuthenticatedAtom)

  if (!isAuthenticated) {
    router.push(PAGE_PATH.login)
  }

  return <>{children}</>
}
