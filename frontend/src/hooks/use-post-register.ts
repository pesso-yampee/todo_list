import { apiClient } from '@/constants/api-client'
import { useState } from 'react'
import { FieldValues } from 'react-hook-form'

type Props = {
  data: FieldValues
  onError: () => void
  onSuccess: () => void
}

export const usePostRegister = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const doPost = ({ data, onError, onSuccess }: Props) => {
    setIsLoading(true)
    apiClient
      .post('/api/register', data)
      .then(() => onSuccess())
      .catch(() => onError)
      .finally(() => setIsLoading(false))
  }
  return { doPost, isLoading }
}
