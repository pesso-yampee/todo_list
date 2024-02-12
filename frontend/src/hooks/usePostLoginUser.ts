import { AxiosResponse } from 'axios'
import { apiClient } from 'constants/apiClient'
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
  const doPost = ({ data, onError, onSuccess }: Props) => {
    apiClient.get('/sanctum/csrf-cookie').then(() => {
      apiClient
        .post('/api/login', data)
        .then((response: AxiosResponse<LoginResponse>) => onSuccess(response))
        .catch(() => onError())
    })
  }

  return {
    doPost,
  }
}
