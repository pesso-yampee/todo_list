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
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TodoCreateRequest>({
    defaultValues: {
      title: '',
      detail: '',
    },
  })

  const handleOnSubmitCreateTodo: SubmitHandler<TodoCreateRequest> = (data) => {
    doPost({
      data,
      setIsCreateLoading,
      onSuccess: () => {
        return <Alert severity="success">作成に成功しました</Alert>
      },
      onError: () => {
        return <Alert severity="error">作成に失敗しました</Alert>
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
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            type="text"
            label="詳細"
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
