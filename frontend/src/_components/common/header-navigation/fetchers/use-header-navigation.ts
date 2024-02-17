import { usePostLogoutUser } from 'hooks/usePostLogoutUser'
import { useAtomValue } from 'jotai'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { isAuthenticatedAtom } from 'store'

export const useHeaderNavigation = () => {
  const isAuthenticated = useAtomValue(isAuthenticatedAtom)
  const router = useRouter()
  const { doPost } = usePostLogoutUser()

  const onClickLogin = () => {
    router.push('/login')
  }

  const onClickRegister = () => {
    router.push('/register')
  }

  const onClickLogout = () => {
    doPost({
      onSuccess: () => {
        toast.success('ログアウトしました')
        router.push('/login')
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
