import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Stack,
  TextField,
  TextFieldProps,
} from '@mui/material'
import { usePostLoginUser } from 'hooks/usePostLoginUser'
import { NextPage } from 'next'
import Link from 'next/link'
import { useState } from 'react'
import { Form, SubmitHandler, useForm } from 'react-hook-form'

const LoginPage: NextPage = () => {
  const { doPost } = usePostLoginUser()
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TextFieldProps>({
    defaultValues: {
      email: null,
      password: null,
    },
  })

  const onSubmit: SubmitHandler<TextFieldProps> = async (data) => {
    const result = await doPost(data)
    console.log(result)
  }

  return (
    <Form control={control}>
      <Card sx={{ maxWidth: 600, textAlign: 'center' }}>
        <CardHeader title="Sign in" />
        <CardContent>
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
          </Stack>
        </CardContent>
        <CardActions>
          <Link href="#" passHref>
            <Button variant="text">パスワードを忘れた場合</Button>
          </Link>
          <Link href="#" passHref>
            <Button variant="text">新規登録</Button>
          </Link>
          <Button
            variant="contained"
            type="submit"
            onClick={handleSubmit(onSubmit)}
          >
            ログイン
          </Button>
        </CardActions>
      </Card>
    </Form>
  )
}

export default LoginPage
