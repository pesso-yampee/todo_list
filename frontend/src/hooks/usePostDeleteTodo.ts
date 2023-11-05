import { apiClient } from 'constants/apiClient'

type Props = {
  id: string
  onSuccess: () => void
  onError: () => void
}
export const usePostDeleteTodo = () => {
  const doPost = ({ id, onSuccess, onError }: Props) => {
    apiClient
      .post('api/todos/delete', { id: id })
      .then(() => onSuccess())
      .catch(() => onError())
  }

  return {
    doPost,
  }
}
