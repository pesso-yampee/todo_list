import { apiClient } from 'constants/apiClient'
import { FormInputType } from 'types/todo'

export const usePostCraeteTodo = () => {
  const doPost = async (data: FormInputType) => {
    try {
      await apiClient.post('/task', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
    } catch (error) {
      console.log(error)
    }
  }

  return {
    doPost,
  }
}
