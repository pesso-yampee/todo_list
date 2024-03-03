import { PAGE_PATH } from '@/constants/pagePath'
import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'
import { ReactNode, useEffect } from 'react'
import { toast } from 'react-toastify'

type Props = {
  children: ReactNode
}

export const SanctumGuard = ({ children }: Props) => {
  const router = useRouter()
  const { isAuthenticated } = useAuth()

  useEffect(() => {
    if (isAuthenticated) return

    toast.error('認証エラー')
    router.push(PAGE_PATH.login)
  }, [isAuthenticated, router])

  return <>{children}</>
}
