import { apiClient } from '@/constants/apiClient'
import { useState } from 'react'

type Props = {
  id: string
  onSuccess: () => void
  onError: () => void
}
export const useDeleteTodo = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const doDelete = ({ id, onError, onSuccess }: Props) => {
    setIsLoading(true)
    apiClient
      .delete(`/api/todos/${id}`)
      .then(() => onSuccess())
      .catch(() => onError())
      .finally(() => setIsLoading(false))
  }

  return {
    doDelete,
    isLoading,
  }
}
