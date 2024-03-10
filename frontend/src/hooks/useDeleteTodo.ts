import { apiClient } from '@/constants/apiClient'
import { useState } from 'react'

type Props = {
  id: string
  onSuccess: () => void
  onError: () => void
  onFinally: () => void
}
export const useDeleteTodo = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const doDelete = ({ id, onError, onSuccess, onFinally }: Props) => {
    if (!id) return

    setIsLoading(true)

    apiClient
      .delete(`/api/todos/${id}`)
      .then(() => onSuccess())
      .catch(() => onError())
      .finally(() => {
        setIsLoading(false)
        onFinally()
      })
  }

  return {
    doDelete,
    isLoading,
  }
}
