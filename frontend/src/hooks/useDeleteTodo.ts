import { apiClient } from 'constants/apiClient'

export const useDeleteTodo = () => {
  const doDelete = (todoItemId: string) => {
    try {
      apiClient.delete(`/task/${todoItemId}`)
    } catch (error) {
      console.log(error)
    }
  }

  return {
    doDelete,
  }
}
