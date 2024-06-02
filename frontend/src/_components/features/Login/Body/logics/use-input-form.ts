import { useAuth } from '@/hooks/use-Auth'
import { useRouter } from 'next/navigation'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

export const useInputForm = () => {
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

  return { control, isLoading, handleSubmit: handleSubmit(onSubmitLogin) }
}
