import { PAGE_PATH } from '@/constants/pagePath'
import { isAuthenticatedAtom } from '@/store'
import { useAtomValue } from 'jotai'
import { useRouter } from 'next/navigation'

export const SanctumGuard = () => {
  const router = useRouter()
  const isAuthenticated = useAtomValue(isAuthenticatedAtom)

  if (isAuthenticated) {
    router.push(PAGE_PATH.login)
  }
}
