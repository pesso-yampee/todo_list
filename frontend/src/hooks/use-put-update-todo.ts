import { apiClient } from '@/constants/api-client'
import { TodoUpdateRequest } from '@/types/todo'
import { useState } from 'react'

type Props = {
  data: TodoUpdateRequest
  id: string | undefined
  onSuccess: () => void
  onError: (error: unknown) => void
}

export const usePutUpdateTodo = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const doPost = ({ data, id, onSuccess, onError }: Props) => {
    if (!id) return

    setIsLoading(true)

    apiClient
      .put(`api/todos/${id}`, {
        id: id,
        title: data.title,
        detail: data.detail,
      })
      .then(() => onSuccess())
      .catch((error) => onError(error))
      .finally(() => setIsLoading(false))
  }

  return {
    doPost,
    isLoading,
  }
}
