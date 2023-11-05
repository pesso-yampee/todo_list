import { TextFieldProps } from '@mui/material'
import { apiClient } from 'constants/apiClient'

export const usePostLoginUser = () => {
  const doPost = async (data: TextFieldProps) => {
    return await apiClient.post('/login', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  }

  return {
    doPost,
  }
}
