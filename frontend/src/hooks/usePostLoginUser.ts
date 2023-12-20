import { apiClient } from 'constants/apiClient'
import { FieldValues } from 'react-hook-form'

type Props = {
  data: FieldValues
  onError: () => void
  onSuccess: () => void
}

export const usePostLoginUser = () => {
  const doPost = async ({ data, onError, onSuccess }: Props) => {
    return await apiClient.post('/api/login', data)
      .then(() => onSuccess())
      .catch(() => onError())
  }

  return {
    doPost,
  }
}
