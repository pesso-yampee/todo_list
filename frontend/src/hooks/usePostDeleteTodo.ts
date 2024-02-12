import { apiClient } from 'constants/apiClient'

type Props = {
  id: string
  onSuccess: () => void
  onError: () => void
}
export const usePostDeleteTodo = () => {
  
  const doPost = ({ id, onError, onSuccess }: Props) => {
    apiClient
        .delete(`/api/todos/${id}`)
        .then(() => onSuccess())
        .catch(() => onError())
  }

  return {
    doPost,
  }
}
