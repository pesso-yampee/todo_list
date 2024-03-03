import { apiClient } from '@/constants/apiClient'
import { authUserAtom } from '@/store'
import { useAtom } from 'jotai'
import { useRouter } from 'next/navigation'
import { useCallback } from 'react'
import { FieldValues } from 'react-hook-form'
import { toast } from 'react-toastify'

type LoginProps = {
  data: FieldValues
  onError: () => void
  onSuccess: () => void
}

export const useAuth = () => {
  // まず認可情報を取得する。
  // 認証に通っている場合、me の情報を取得でき、通っていない場合エラーを返してくれる
  // meの情報はset関数を使って globalState に保存する
  // meをもってして、isAuthenticated を true にすべきなのか false なのかを判断すれば良い
  // また、上記理由により isAuthenticated は globalState で管理する必要はなくなる

  const [authUser, setAuthUser] = useAtom(authUserAtom)
  const router = useRouter()

  const fetchMe = useCallback(() => {
    apiClient
      .get('api/me')
      .then((res) => {
        setAuthUser(res.data.data)
      })
      .catch(() => {
        setAuthUser(null)
      })
  }, [setAuthUser])

  const logout = useCallback(() => {
    apiClient
      .post('api/logout')
      .then(() => {
        router.push(process.env.NEXT_PUBLIC_FRONT_END || '')
      })
      .catch(() => {
        toast.error('ログアウトできませんでした')
      })
  }, [router])

  const login = useCallback(
    async ({ data, onError, onSuccess }: LoginProps) => {
      apiClient.get('/sanctum/csrf-cookie').then(() => {
        apiClient
          .post('api/login', data)
          .then(() => {
            onSuccess()
            fetchMe()
          })
          .catch(() => onError())
      })
    },
    [fetchMe]
  )

  return {
    isAuthenticated: authUser !== null,
    fetchMe,
    logout,
    login,
  }
}