import { apiClient } from '@/constants/apiClient'

type Props = {
  id: string
  onSuccess: () => void
  onError: () => void
}
export const useDeleteTodo = () => {
  const doDelete = ({ id, onError, onSuccess }: Props) => {
    apiClient
      .delete(`/api/todos/${id}`)
      .then(() => onSuccess())
      .catch(() => onError())
  }

  return {
    doDelete,
  }
}
