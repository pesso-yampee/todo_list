'use client'

import { usePostRegisterMemberInfo } from 'hooks/usePostRegisterMemberInfo'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { PrimaryButton } from '_components/common/Button/Primary'
import { InputField } from '_components/common/InputField'

export const RegisterBody = () => {
  const { doPost } = usePostRegisterMemberInfo()
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
    <form
      onSubmit={handleSubmit(onSubmitRegisterMemberInfo)}
      className='w-full'
    >
      <div className='grid gap-2 p-4'>
        <div className=''>
          <label className='text-sm font-bold'>メールアドレス</label>
          <InputField
            control={control}
            name={'email'}
            rules={{ required: 'メールアドレスを入力してください' }}
            type='email'
          />
        </div>
        <div className=''>
          <label className='text-sm font-bold'>ユーザー名</label>
          <InputField
            control={control}
            name={'userName'}
            rules={{ required: 'ユーザー名を入力してください' }}
            type='text'
          />
        </div>
        <div className=''>
          <label className='text-sm font-bold'>パスワード</label>
          <InputField
            control={control}
            name={'password'}
            rules={{ required: 'パスワードを入力してください' }}
            type='password'
          />
        </div>
        {/* パスワード（確認）は別にサーバーに送る必要はない。なぜならサーバー側がほしいのはパスワードの情報だけだから。 */}
        <div className=''>
          <label className='text-sm font-bold'>パスワード（確認）</label>
          <InputField
            control={control}
            name={'passwordCheck'}
            rules={{ required: '確認用のパスワードを入力してください' }}
            type='password'
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
