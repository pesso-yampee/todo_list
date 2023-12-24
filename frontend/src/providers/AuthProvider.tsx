import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react'

type AuthContextProps = {
  isAuth: boolean
  setIsAuth: Dispatch<SetStateAction<boolean>>
}

type AuthProviderProps = {
  children: ReactNode
}

const AuthContext = createContext<AuthContextProps>({
  isAuth: false,
  setIsAuth: () => {},
})

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuth, setIsAuth] = useState<boolean>(false)

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
