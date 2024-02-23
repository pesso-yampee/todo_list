import { apiClient } from '@/constants/apiClient'
import { isAuthenticatedAtom } from '@/store'
import { AxiosResponse } from 'axios'
import { useSetAtom } from 'jotai'
import { FieldValues } from 'react-hook-form'

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
          setIsAuthenticated(true)
        }
      })
      .catch((error) => {
        setIsAuthenticated(false)
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
