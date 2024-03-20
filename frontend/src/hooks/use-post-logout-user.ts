import { apiClient } from '@/constants/api-client'

type Props = {
  onError: () => void
  onSuccess: () => void
}

export const usePostLogoutUser = () => {
  const doPost = ({ onError, onSuccess }: Props) => {
    apiClient
      .post('/api/logout')
      .then(() => onSuccess())
      .catch(() => onError())
  }

  return {
    doPost,
  }
}
