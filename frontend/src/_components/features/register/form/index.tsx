'use client'

import { PAGE_PATH } from '@/constants/page-path'
import { Button } from '@/_components/common/button'
import { InputField } from '@/_components/common/input-field'
import { Box, Link, Stack, Typography } from '@mui/material'
import { useInputForm } from './logics/use-input-form'
export const RegisterForm = () => {
  const { control, isLoading, handleSubmit } = useInputForm()

  return (
    <Box component={'form'} width={'100%'} onSubmit={handleSubmit}>
      <Stack spacing={2} padding={'16px'}>
        <Stack spacing={2}>
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
          <InputField
            control={control}
            name={'passwordCheck'}
            type={'password'}
            label={'パスワード（確認）'}
            rules={{ required: '確認用のパスワードを入力してください' }}
          />
        </Stack>
        <Stack
          direction={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Typography>
            もしアカウントを持っている場合は
            <Link
              children={'ログイン'}
              underline={'none'}
              style={{ cursor: 'pointer' }}
              href={PAGE_PATH.login}
            />
            から
          </Typography>
          <Button
            text={'登録する'}
            type={'submit'}
            style={{ marginLeft: 'auto' }}
            isLoading={isLoading}
          />
        </Stack>
      </Stack>
    </Box>
  )
}
