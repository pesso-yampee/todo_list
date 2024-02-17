'use client'

import { useHeaderNavigation } from './fetchers/use-header-navigation'

export const HeaderNavigation = () => {
  const { isAuthenticated, onClickLogin, onClickLogout, onClickRegister } = useHeaderNavigation()
  
  return (
    <header className="fixed left-0 top-0 w-full">
      <nav className="h-12 bg-green-600 px-4">
        <ul className="flex h-full items-center justify-end gap-x-2">
          {!isAuthenticated ? (
            <>
              <li className="flex h-full items-center">
                <button
                  className="h-full text-sm font-bold text-white w-20"
                  onClick={onClickLogin}
                >
                  ログイン
                </button>
              </li>
              <li className="flex h-full items-center">
                <button
                  className="h-full text-sm font-bold text-white w-20"
                  onClick={onClickRegister}
                >
                  新規登録
                </button>
              </li>
            </>
          ) : (
            <li className="flex h-full items-center">
              <button
                className="h-full text-sm font-bold text-white"
                onClick={onClickLogout}
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
