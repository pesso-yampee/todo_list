import { usePostRegisterMemberInfo } from '@/hooks/use-post-register-member-info'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'

export const useInputForm = () => {
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

  return { control, isLoading, handleSubmit: handleSubmit(onSubmitRegisterMemberInfo) }
}
