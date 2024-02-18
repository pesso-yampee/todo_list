import { AxiosResponse } from 'axios'
import { apiClient } from 'constants/apiClient'
import { useSetAtom } from 'jotai'
import { FieldValues } from 'react-hook-form'
import { isAuthenticatedAtom } from 'store'

type LoginResponse = {
  id: number
  name: string
  email: string
  email_verified_at: Date
  created_at: Date
  updated_at: Date
}

type Props = {
  data: FieldValues
  onError: () => void
  onSuccess: (response: AxiosResponse<LoginResponse>) => void
}

export const usePostLoginUser = () => {
  const setIsAuthenticated = useSetAtom(isAuthenticatedAtom)

  const fetchMe = async () => {
    return apiClient
      .get('api/me')
      .then((response) => {
        if (response.data) {
          setIsAuthenticated(() => ({ isAuthenticated: true }))
        }
      })
      .catch((error) => {
        setIsAuthenticated(() => ({ isAuthenticated: false }))
      })
  }

  const doPost = ({ data, onError, onSuccess }: Props) => {
    apiClient.get('/sanctum/csrf-cookie').then(async () => {
      await apiClient
        .post('/api/login', data)
        .then((response: AxiosResponse<LoginResponse>) => onSuccess(response))
        .catch(() => onError())

      await fetchMe()
    })
  }

  return {
    doPost,
  }
}
