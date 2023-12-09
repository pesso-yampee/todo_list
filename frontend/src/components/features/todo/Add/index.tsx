'use client'

import { LoadingButton } from '@mui/lab'
import { Alert, Stack, TextField } from '@mui/material'
import { usePostCreateTodo } from 'hooks/usePostCreateTodo'
import { useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { TodoCreateRequest } from 'types/todo'

export const AddTodo = () => {
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
    <Stack
      component={'form'}
      gap={'16px'}
      noValidate
      onSubmit={handleSubmit(handleOnSubmitCreateTodo)}
    >
      <Controller
        name="title"
        control={control}
        rules={{ required: '名前は必ず入力してください' }}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            type="text"
            label="名前"
            required
            error={fieldState.invalid}
            helperText={fieldState.error?.message}
          />
        )}
      />
      <Controller
        name="detail"
        control={control}
        rules={{ required: '詳細は必ず入力してください' }}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            type="text"
            label="詳細"
            required
            error={fieldState.invalid}
            helperText={fieldState.error?.message}
          />
        )}
      />
      <LoadingButton
        loading={isCreateLoading}
        type="submit"
        color="success"
        variant="contained"
      >
        作成する
      </LoadingButton>
    </Stack>
  )
}
