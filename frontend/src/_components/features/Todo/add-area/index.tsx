'use client'

import { usePostCreateTodo } from '@/hooks/usePostCreateTodo'
import { authUserAtom } from '@/store'
import { TodoCreateRequest } from '@/types/todo'
import { Alert } from '@/_components/common/alert'
import { Button } from '@/_components/common/button'
import { InputField } from '@/_components/common/input-field'
import { Box } from '@mui/material'
import { useAtomValue } from 'jotai'
import { useRef, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

export const TodoAddArea = () => {
  const { doPost } = usePostCreateTodo()
  const authUser = useAtomValue(authUserAtom)
  const [isCreateLoading, setIsCreateLoading] = useState(false)
  const submitProcessing = useRef(false)
  const { control, handleSubmit } = useForm<TodoCreateRequest>({
    defaultValues: {
      title: '',
      detail: '',
    },
    mode: 'onBlur',
  })

  const handleOnSubmitCreateTodo: SubmitHandler<TodoCreateRequest> = (data) => {
    if (submitProcessing.current) return

    const postData = {
      ...data,
      user_id: authUser?.id,
    }

    submitProcessing.current = true
    setIsCreateLoading(true)

    doPost({
      data: postData,
      onSuccess: () => {
        return <Alert severity={'success'} text={'作成に成功しました'} />
      },
      onError: () => {
        return <Alert severity={'error'} text={'作成に失敗しました'} />
      },
      onFinally: () => {
        submitProcessing.current = false
        setIsCreateLoading(false)
      },
    })
  }

  return (
    <Box
      component={'form'}
      marginTop={'16px'}
      display={'grid'}
      gap={'16px'}
      onSubmit={handleSubmit(handleOnSubmitCreateTodo)}
    >
      <Box display={'grid'} gap={'16px'}>
        <InputField
          control={control}
          name={'title'}
          placeholder={'名前'}
          rules={{ required: '名前を入力してください' }}
        />
        <InputField control={control} name={'detail'} placeholder={'詳細'} />
        <Button
          type={'submit'}
          color={'success'}
          text={isCreateLoading ? '作成中' : '作成する'}
        ></Button>
      </Box>
    </Box>
  )
}
