'use client'

import { PrimaryButton } from 'components/common/Button/Primary'
import { InputField } from 'components/common/InputField'
import { usePostMemberRegisteration } from 'hooks/usePostRegisterMemberInfo'
import { useForm } from 'react-hook-form'

export const LoginBody = () => {
  const { doPost } = usePostMemberRegisteration()
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      userName: '',
      password: '',
      passwordCheck: '',
    },
    mode: 'onBlur',
  })

  const submitRegisterMemberInfo = () => {
    doPost({
      onSuccess: () => console.log('会員登録しました。'),
      onError: () => console.log('会員登録できませんでした。'),
    })
  }

  return (
    <form onSubmit={handleSubmit(submitRegisterMemberInfo)} className="w-full">
      <div className="grid gap-2 p-4">
        <div className="">
          <label className="text-sm font-bold">メールアドレス</label>
          <InputField
            control={control}
            name={'email'}
            rules={{ required: 'メールアドレスを入力してください' }}
            type="email"
          />
        </div>
        <div className="">
          <label className="text-sm font-bold">ユーザー名</label>
          <InputField
            control={control}
            name={'userName'}
            rules={{ required: 'ユーザー名を入力してください' }}
            type="text"
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
        {/* パスワード（確認）は別にサーバーに送る必要はない。なぜならサーバー側がほしいのはパスワードの情報だけだから。 */}
        <div className="">
          <label className="text-sm font-bold">パスワード（確認）</label>
          <InputField
            control={control}
            name={'passwordCheck'}
            rules={{ required: '確認用のパスワードを入力してください' }}
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
