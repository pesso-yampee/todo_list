'use client'

import { Box } from '@mui/material'
import { usePostCreateTodo } from 'hooks/usePostCreateTodo'
import { useRef, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { TodoCreateRequest } from 'types/todo'
import { Alert } from '_components/common/alert'
import { Button } from '_components/common/button'
import { InputField } from '_components/common/input-field'

export const AddTodoArea = () => {
  const { doPost } = usePostCreateTodo()
  const [isCreateLoading, setIsCreateLoading] = useState(false)
  const submitProcessing = useRef(false)
  const { control, handleSubmit } = useForm<TodoCreateRequest>({
    defaultValues: {
      title: '',
      detail: '',
    },
    mode: 'onBlur',
  })

  const handleOnSubmitCreateTodo: SubmitHandler<TodoCreateRequest> = (
    data,
    event
  ) => {
    event?.preventDefault()
    event?.stopPropagation()

    if (submitProcessing.current) return false

    submitProcessing.current = true
    setIsCreateLoading(true)

    doPost({
      data,
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
          color={'secondary'}
          text={isCreateLoading ? '作成中' : '作成する'}
        ></Button>
      </Box>
    </Box>
  )
}
