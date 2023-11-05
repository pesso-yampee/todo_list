import { LoadingButton } from '@mui/lab'
import { Alert, Box, Stack, TextField, Typography } from '@mui/material'
import { PageTitle } from 'components/atoms/PageTitle'
import { TodoItemList } from 'components/organisms/todoItemList'
import { useFetchTodoList } from 'hooks/useFetchTodoList'
import { usePostCreateTodo } from 'hooks/usePostCreateTodo'
import { useEffect, useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { TodoCreateRequest } from 'types/todo'

type Props = {
  text: string
}

export const TodoListContents = ({ text }: Props) => {
  const [isCreateLoading, setIsCreateLoading] = useState(false)
  const [isActiveCreateButton, setIsActiveCreateButton] = useState(false)
  const { doPost } = usePostCreateTodo()
  const { data, error, refetch, isLoading } = useFetchTodoList()
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
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
  if (!data && error) {
    return <Typography>表示するデータがありません。</Typography>
  }

  useEffect(() => {
    if (getValues('title')?.length > 0) {
      setIsActiveCreateButton(true)
    }
  }, [])
  
  return (
    <Box maxWidth={'450px'}>
      <PageTitle text={text} />
      <Stack
        component={'form'}
        gap={'16px'}
        noValidate
        onSubmit={handleSubmit(handleOnSubmitCreateTodo)}
      >
        <Controller
          name="title"
          control={control}
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
          disabled={isActiveCreateButton}
        >
          作成する
        </LoadingButton>
      </Stack>
      <Box>{!isLoading && <TodoItemList data={data} refetch={refetch} />}</Box>
    </Box>
  )
}
