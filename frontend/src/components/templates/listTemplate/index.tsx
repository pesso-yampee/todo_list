import { Alert, Box, Button, Stack, TextField, Typography } from '@mui/material'
import { PageTitle } from 'components/atoms/PageTitle'
import { TodoItemList } from 'components/organisms/todoItemList'
import { PAGE_PATH } from 'constants/pagePath'
import { useFetchTodoList } from 'hooks/useFetchTodoList'
import { usePostCreateTodo } from 'hooks/usePostCreateTodo'
import { useRouter } from 'next/router'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { TodoCreateRequest } from 'types/todo'

type Props = {
  text: string
}

export const ListTemplate = ({ text }: Props) => {
  const router = useRouter()
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<TodoCreateRequest>({
    defaultValues: {
      title: null,
      detail: null,
    },
  })
  const { doPost } = usePostCreateTodo()
  const { data, error, refetch, isLoading } = useFetchTodoList()

  const handleSubmitCreateTodo: SubmitHandler<TodoCreateRequest> = (data) => {
    doPost({
      data,
      onSuccess: () => {
        router.push(PAGE_PATH.TOP)
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
  return (
    <Box maxWidth={'450px'}>
      <PageTitle text={text} />
      <Stack
        component={'form'}
        gap={'16px'}
        noValidate
        onSubmit={handleSubmit(handleSubmitCreateTodo)}
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
        <Button type="submit" color="success" variant="contained">
          作成する
        </Button>
      </Stack>
      <Box>
        {data && !isLoading && <TodoItemList list={data} refetch={refetch} />}
      </Box>
    </Box>
  )
}
