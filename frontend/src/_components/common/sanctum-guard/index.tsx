import { PAGE_PATH } from '@/constants/pagePath'
import { isAuthenticatedAtom } from '@/store'
import { useAtomValue } from 'jotai'
import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'
import { toast } from 'react-toastify'

type Props = {
  children: ReactNode
}

export const SanctumGuard = ({ children }: Props) => {
  const router = useRouter()
  const isAuthenticated = useAtomValue(isAuthenticatedAtom)

  if (!isAuthenticated) {
    toast.error('認証エラー')
    router.push(PAGE_PATH.login)
  }

  return <>{children}</>
}
