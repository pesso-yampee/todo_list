import { apiClient } from 'constants/apiClient'
import { TodoCreateRequest } from 'types/todo'

type Props = {
  data: TodoCreateRequest
  onSuccess: () => void
  onError: () => void
  onFinally: () => void
}
export const usePostCreateTodo = () => {
  const doPost = ({ data, onSuccess, onError, onFinally }: Props) => {
    apiClient
      .post('api/todos/create', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(() => onSuccess())
      .catch(() => onError())
      .finally(() => onFinally())
  }

  return {
    doPost,
  }
}
