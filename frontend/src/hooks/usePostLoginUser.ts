import { TextFieldProps } from '@mui/material'
import { apiClient } from 'constants/apiClient'

export const usePostLoginUser = () => {
      .post('/api/login', data)
  }

  return {
    doPost,
  }
}
