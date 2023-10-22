import { apiClient } from 'constants/apiClient'
import { TodoUpdateRequest } from 'types/todo'

type Props = {
  id: number
  data: TodoUpdateRequest
  onSuccess: () => void
  onError: (error: unknown) => void
}

export const usePutUpdateTodo = () => {
  const doPost = ({ id, data, onSuccess, onError }: Props) => {
    apiClient
      .put(`api/todos/update/${id}`, {
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
