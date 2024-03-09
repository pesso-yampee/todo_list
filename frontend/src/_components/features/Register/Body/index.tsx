'use client'

import { usePostRegisterMemberInfo } from '@/hooks/usePostRegisterMemberInfo'
import { Button } from '@/_components/common/button'
import { InputField } from '@/_components/common/input-field'
import { Box, Stack } from '@mui/material'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'

export const RegisterBody = () => {
  const { doPost, isLoading } = usePostRegisterMemberInfo()
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      userName: '',
      password: '',
      passwordCheck: '',
    },
    mode: 'onBlur',
  })

  const onSubmitRegisterMemberInfo: SubmitHandler<FieldValues> = (data) => {
    doPost({
      data,
      onSuccess: () => console.log('会員登録しました。'),
      onError: () => console.log('会員登録できませんでした。'),
    })
  }

  return (
    <Box
      component={'form'}
      width={'100%'}
      onSubmit={handleSubmit(onSubmitRegisterMemberInfo)}
    >
      <Stack spacing={2} padding={'16px'}>
        <InputField
          control={control}
          name={'email'}
          type={'email'}
          label={'メールアドレス'}
          rules={{ required: 'メールアドレスを入力してください' }}
        />
        <InputField
          control={control}
          name={'userName'}
          type={'text'}
          label={'ユーザー名'}
          rules={{ required: 'ユーザー名を入力してください' }}
        />
        <InputField
          control={control}
          name={'password'}
          type={'password'}
          label={'パスワード'}
          rules={{ required: 'パスワードを入力してください' }}
        />
        {/* パスワード（確認）は別にサーバーに送る必要はない。なぜならサーバー側がほしいのはパスワードの情報だけだから。 */}
        <InputField
          control={control}
          name={'passwordCheck'}
          type={'password'}
          label={'パスワード（確認）'}
          rules={{ required: '確認用のパスワードを入力してください' }}
        />
        <Button
          text={'送信'}
          style={{ marginLeft: 'auto' }}
          isLoading={isLoading}
        />
      </Stack>
    </Box>
  )
}
