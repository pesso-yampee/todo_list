'use client'

import { EMAIL_REGEX } from '@/constants/regexes'
import { Button } from '@/_components/common/button'
import { InputField } from '@/_components/common/input-field'
import { Box, Stack } from '@mui/material'
import { useInputForm } from './logics/use-input-form'

export const LoginBody = () => {
  const { control, isLoading, handleSubmit } = useInputForm()
  
  return (
    <Box component={'form'} width={'100%'} onSubmit={handleSubmit}>
      <Stack direction={'column'} spacing={2} padding={'16px'}>
        <InputField
          control={control}
          name={'email'}
          type={'email'}
          label={'メールアドレス'}
          rules={{
            required: 'メールアドレスを入力してください',
            pattern: {
              value: EMAIL_REGEX,
              message: '正しい形式で入力してください',
            },
          }}
        />
        <InputField
          control={control}
          name={'password'}
          type={'password'}
          label={'パスワード'}
          rules={{ required: 'パスワードを入力してください' }}
        />
        <Box textAlign={'right'}>
          <Button
            type={'submit'}
            variant={'contained'}
            text={'送信'}
            size={'medium'}
            isLoading={isLoading}
          />
        </Box>
      </Stack>
    </Box>
  )
}
