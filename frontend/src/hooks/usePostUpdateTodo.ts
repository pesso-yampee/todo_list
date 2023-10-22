import { apiClient } from 'constants/apiClient'
import { TodoUpdateRequest } from 'types/todo'

type Props = {
  id: number
  data: TodoUpdateRequest
  onSuccess: () => void
  onError: (error: unknown) => void
}

export const usePostUpdateTodo = () => {
  const doPost = ({ id, data, onSuccess, onError }: Props) => {
    apiClient
      .post('api/todos/update', {
        id: id,
        title: data.title,
        detail: data.detail,
      })
      .then(() => onSuccess())
      .catch((error) => onError(error))
  }

  return {
    doPost,
  }
}
