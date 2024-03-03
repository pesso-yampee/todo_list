import { apiClient } from '@/constants/apiClient'
import { useAuth } from '@/hooks/useAuth'
import { FieldValues } from 'react-hook-form'

type Props = {
  data: FieldValues
  onError: () => void
  onSuccess: () => void
}

export const usePostLoginUser = () => {
  const { fetchMe } = useAuth()

  const doPost = async ({ data, onError, onSuccess }: Props) => {
    await apiClient.get('/sanctum/csrf-cookie')
    await apiClient
      .post('/api/login', data)
      .then(() => {
        onSuccess()
        fetchMe()
      })
      .catch(() => onError())
  }

  return {
    doPost,
  }
}
