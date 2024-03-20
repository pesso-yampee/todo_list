import { apiClient } from '@/constants/api-client'
import { useState } from 'react'
import { FieldValues } from 'react-hook-form'

type Props = {
  data: FieldValues
  onError: () => void
  onSuccess: () => void
}

export const usePostRegisterMemberInfo = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const doPost = ({ data, onError, onSuccess }: Props) => {
    setIsLoading(true)
    apiClient
      .post('/api/member-registeration', data)
      .then(() => onSuccess())
      .catch(() => onError)
      .finally(() => setIsLoading(true))
  }
  return { doPost, isLoading }
}
