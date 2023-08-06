import { apiClient } from 'constants/apiClient'
import { FormInputType } from 'types/todo'

type Props = {
  data: FormInputType
  todoItemId: string
  onSuccess: () => void
  onError: (error: unknown) => void
}

export const usePutEditTodo = () => {
  const doPut = async ({ data, todoItemId, onSuccess, onError }: Props) => {
    try {
      await apiClient.put(`/task/${todoItemId}`, {
        title: data.title,
        contents: data.contents,
      })
      onSuccess()
    } catch (error) {
      onError(error)
    }
  }

  return {
    doPut,
  }
}
