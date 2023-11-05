import { apiClient } from 'constants/apiClient'
import { Dispatch, SetStateAction } from 'react'
import { TodoCreateRequest } from 'types/todo'

type Props = {
  data: TodoCreateRequest
  setIsCreateLoading: Dispatch<SetStateAction<boolean>>
  onSuccess: () => void
  onError: () => void
}
export const usePostCreateTodo = () => {
  const doPost = ({ data, setIsCreateLoading, onSuccess, onError }: Props) => {
    apiClient
      .post('api/todos/create', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(() => onSuccess())
      .catch(() => onError())
      .finally(() => setIsCreateLoading(false))
  }

  return {
    doPost,
  }
}
