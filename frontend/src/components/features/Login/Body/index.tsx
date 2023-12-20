'use client'

import { PrimaryButton } from 'components/common/Button/Primary'
import { InputField } from 'components/common/InputField'
import { PAGE_PATH } from 'constants/pagePath'
import { EMAIL_REGEX } from 'constants/regexes'
import { usePostLoginUser } from 'hooks/usePostLoginUser'
import { useRouter } from 'next/navigation'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import {toast} from 'react-toastify'

export const LoginBody = () => {
  const router = useRouter()
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
        router.push(PAGE_PATH.TOP)
      },
      onError: () => toast.error('ログインに失敗しました。'),
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmitLogin)} className="w-full">
      <div className="grid gap-2 p-4">
        <div className="">
          <label className="text-sm font-bold">メールアドレス</label>
          <InputField
            control={control}
            name={'email'}
            rules={{ required: 'メールアドレスを入力してください', pattern: {value: EMAIL_REGEX, message: '正しい形式で入力してください'} }}
            type="email"
          />
        </div>
        <div className="">
          <label className="text-sm font-bold">パスワード</label>
          <InputField
            control={control}
            name={'password'}
            rules={{ required: 'パスワードを入力してください' }}
            type="password"
          />
        </div>
        <PrimaryButton
          type={'submit'}
          text={'送信'}
          style={{ width: 'fit-content', marginLeft: 'auto' }}
        />
      </div>
    </form>
  )
}
