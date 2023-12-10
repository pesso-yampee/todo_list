import { apiClient } from 'constants/apiClient'

type Props = {
  onError: () => void
  onSuccess: () => void
}

export const usePostMemberRegisteration = () => {
  const doPost = ({ onError, onSuccess }: Props) => {
    apiClient
      .post('/api/member-registeration')
      .then(() => onSuccess())
      .catch(() => onError)
  }
  return { doPost }
}
