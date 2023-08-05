import { Button } from 'components/atoms/Button'
import { usePostLoginUser } from 'hooks/usePostLoginUser'
import { NextPage } from 'next'
import { useForm } from 'react-hook-form'

const LoginPage: NextPage = () => {
  const { doPost } = usePostLoginUser()
  const { handleSubmit, register } = useForm({
    defaultValues: {
      email: null,
      password: null,
    },
  })

  const onSubmit = () => {
    console.log(true)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Email" {...register('email')} type="email" />
      <input placeholder="Password" {...register('password')} type="password" />
      <Button type="submit" className="button-primary">
        <span>ログイン</span>
      </Button>
    </form>
  )
}

export default LoginPage
