'use client'

import { PAGE_PATH } from '@/constants/pagePath'
import { EMAIL_REGEX } from '@/constants/regexes'
import { usePostLoginUser } from '@/hooks/usePostLoginUser'
import { isAuthenticatedAtom } from '@/store'
import { Button } from '@/_components/common/button'
import { InputField } from '@/_components/common/input-field'
import { Box, Stack } from '@mui/material'
import { useSetAtom } from 'jotai'
import { useRouter } from 'next/navigation'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

export const LoginBody = () => {
  const router = useRouter()
  const setIsAuthenticated = useSetAtom(isAuthenticatedAtom)
  const { doPost } = usePostLoginUser()

  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onBlur',
  })

  const onSubmitLogin: SubmitHandler<FieldValues> = (data) => {
    doPost({
      data,
      onSuccess: () => {
        toast.success('ログインに成功しました。')
        setIsAuthenticated(true)
        router.push(PAGE_PATH.top)
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
          />
        </Box>
      </Stack>
    </Box>
  )
}
