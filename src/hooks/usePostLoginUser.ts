import { apiClient } from 'constants/apiClient'

type dataProps = { email: string; password: string }

export const usePostLoginUser = () => {
  doPost: async (data: dataProps) => {
    return await apiClient.post('/users', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  }

  return {
  }
}
