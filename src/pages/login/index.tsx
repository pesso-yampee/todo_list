import { Box, Button, Stack, TextField } from '@mui/material'
import { usePostLoginUser } from 'hooks/usePostLoginUser'
import { NextPage } from 'next'
import Link from 'next/link'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

type TextFieldProps = {
  email: string | null
  password: string | null
}

const LoginPage: NextPage = () => {
  const { doPost } = usePostLoginUser()
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TextFieldProps>({
    defaultValues: {
      email: null,
      password: null,
    },
  })

  const onSubmit: SubmitHandler<TextFieldProps> = (data) => {
    console.log(data)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        maxWidth: 444,
        paddingInline: '20px',
        marginInline: 'auto',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Stack spacing={4} flex={1}>
        <Box component="h1" textAlign={'center'}>
          Sign in
        </Box>
        <Stack spacing={3}>
          <TextField
            id="outlined-email-input"
            required
            label="Email"
            type="email"
            value={emailValue}
            error={'email' in errors}
            helperText={errors.email?.message}
            {...register('email')}
            onChange={(e) => setEmailValue(e.target.value)}
          />
          <TextField
            id="outlined-password-input"
            required
            label="Password"
            type="password"
            value={passwordValue}
            error={'password' in errors}
            helperText={errors.password?.message}
            {...register('password')}
            onChange={(e) => setPasswordValue(e.target.value)}
          />
          <Stack direction={'row'} justifyContent={'space-between'}>
            <Link href="#" passHref>
              <Button variant="text">パスワードを忘れた場合</Button>
            </Link>
            <Link href="#" passHref>
              <Button variant="text">新規登録</Button>
            </Link>
          </Stack>
          <Button
            variant="contained"
            type="submit"
            onClick={handleSubmit(onSubmit)}
          >
            ログイン
          </Button>
        </Stack>
      </Stack>
    </Box>
  )
}

export default LoginPage
