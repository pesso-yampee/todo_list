'use client'

import { usePostLogoutUser } from 'hooks/usePostLogoutUser'
import { useRouter } from 'next/navigation'
import { useAuth } from 'providers/AuthProvider'
import { toast } from 'react-toastify'

export const HeaderNavigation = () => {
  const { isAuth } = useAuth()
  const router = useRouter()
  const { doPost } = usePostLogoutUser()

  const handleOnClickLogin = () => {
    router.push('/login')
  }

  const handleOnClickRegister = () => {
    router.push('/register')
  }

  const handleOnClickLogout = () => {
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

  return (
    <header className="fixed left-0 top-0 w-full">
      <nav className="h-12 bg-green-600 px-4">
        <ul className="flex h-full items-center justify-end gap-x-2">
          {!isAuth ? (
            <>
              <li className="flex h-full items-center">
                <button
                  className="h-full text-sm font-bold text-white w-20"
                  onClick={handleOnClickLogin}
                >
                  ログイン
                </button>
              </li>
              <li className="flex h-full items-center">
                <button
                  className="h-full text-sm font-bold text-white w-20"
                  onClick={handleOnClickRegister}
                >
                  新規登録
                </button>
              </li>
            </>
          ) : (
            <li className="flex h-full items-center">
              <button
                className="h-full text-sm font-bold text-white"
                onClick={handleOnClickLogout}
              >
                ログアウト
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  )
}
