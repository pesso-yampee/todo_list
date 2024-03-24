import { usePostRegister } from '@/hooks/use-post-register'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

export const useInputForm = () => {
  const { doPost, isLoading } = usePostRegister()
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      userName: '',
      password: '',
      passwordCheck: '',
    },
    mode: 'onBlur',
  })
  const onSend: SubmitHandler<FieldValues> = (data) => {
    doPost({
      data: {
        name: data.userName,
        email: data.email,
        password: data.password,
      },
      onSuccess: () => toast.success('登録に成功しました。'),
      onError: () => toast.success('登録に失敗しました。'),
    })
  }

  return { control, isLoading, handleSubmit: handleSubmit(onSend) }
}
