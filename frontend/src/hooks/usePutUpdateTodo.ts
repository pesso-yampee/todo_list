import { apiClient } from 'constants/apiClient'
import { TodoUpdateRequest } from 'types/todo'

type Props = {
  data: TodoUpdateRequest
  id: string
  onSuccess: () => void
  onError: (error: unknown) => void
}

export const usePutUpdateTodo = () => {
  const doPost = ({ data, id, onSuccess, onError }: Props) => {
    apiClient
      .put(`api/todos/update/${id}`, {
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
