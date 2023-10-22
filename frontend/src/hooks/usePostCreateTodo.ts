import { apiClient } from 'constants/apiClient'
import { TodoCreateRequest } from 'types/todo'

type Props = {
  data: TodoCreateRequest
  onSuccess: () => void
  onError: () => void
}
export const usePostCreateTodo = () => {
  const doPost = ({ data, onSuccess, onError }: Props) => {
    apiClient
      .post('api/todos/create', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(() => onSuccess())
      .catch(() => onError())
  }

  return {
    doPost,
  }
}
