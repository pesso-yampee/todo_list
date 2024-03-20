'use client'

import { EMAIL_REGEX } from '@/constants/regexes'
import { useAuth } from '@/hooks/use-Auth'
import { Button } from '@/_components/common/button'
import { InputField } from '@/_components/common/input-field'
import { Box, Stack } from '@mui/material'
import { useRouter } from 'next/navigation'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

export const LoginBody = () => {
  const router = useRouter()
  const { login, isLoading } = useAuth()

  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onBlur',
  })

  const onSubmitLogin: SubmitHandler<FieldValues> = (data) => {
    login({
      data,
      onSuccess: () => {
        router.push(process.env.NEXT_PUBLIC_FRONT_END || '')
        toast.success('ログインに成功しました。')
      },
      onError: () => toast.error('ログインに失敗しました。'),
    })
  }

  return (
    <Box
      component={'form'}
      width={'100%'}
      onSubmit={handleSubmit(onSubmitLogin)}
    >
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
