import { PAGE_PATH } from '@/constants/pagePath'
import { usePostLogoutUser } from '@/hooks/usePostLogoutUser'
import { isAuthenticatedAtom } from '@/store'
import { useAtomValue } from 'jotai'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

export const useHeaderNavigation = () => {
  const isAuthenticated = useAtomValue(isAuthenticatedAtom)
  const router = useRouter()
  const { doPost } = usePostLogoutUser()

  const onClickLogin = () => {
    router.push(PAGE_PATH.login)
  }

  const onClickRegister = () => {
    router.push(PAGE_PATH.register)
  }

  const onClickLogout = () => {
    doPost({
      onSuccess: () => {
        toast.success('ログアウトしました')
        router.push(PAGE_PATH.login)
      },
      onError: () => {
        toast.error('ログアウトできませんでした')
      },
    })
  }

  return {
    isAuthenticated,
    router,
    doPost,
    onClickRegister,
    onClickLogin,
    onClickLogout,
  }
}
