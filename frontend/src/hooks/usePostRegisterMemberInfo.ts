import { apiClient } from 'constants/apiClient'
import { FieldValues } from 'react-hook-form'

type Props = {
  data: FieldValues
  onError: () => void
  onSuccess: () => void
}

export const usePostRegisterMemberInfo = () => {
  const doPost = ({ data, onError, onSuccess }: Props) => {
    apiClient
      .post('/api/member-registeration', data)
      .then(() => onSuccess())
      .catch(() => onError)
  }
  return { doPost }
}
