import { Box, Button, Stack, TextField } from '@mui/material'
import { PageTitle } from 'components/atoms/PageTitle'
import { PAGE_PATH } from 'constants/pagePath'
import { useFetchEditTodo } from 'hooks/useFetchEditTodo'
import { usePostUpdateTodo } from 'hooks/usePostUpdateTodo'
import { useRouter } from 'next/router'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { TodoCreateRequest, TodoUpdateRequest } from 'types/todo'

type Props = {
  text: string
}

export function EditTodoTemplate({ text }: Props) {
  const router = useRouter()
  const id = Number(router.query.id) as number
  const { data } = useFetchEditTodo(id)
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TodoUpdateRequest>({
    defaultValues: {
      title: data?.title,
      detail: data?.detail,
    },
  })
  const { doPost } = usePostUpdateTodo()
  const handleOnSubmit: SubmitHandler<TodoCreateRequest> = (data) => {
    doPost({
      id,
      data,
      onSuccess: () => {
        router.push(PAGE_PATH.TOP)
      },
      onError: (error) => {
        console.error(error)
      },
    })
  }

  return (
    <Box>
      <PageTitle text={text} />
      <Box>
        <Stack
          component={'form'}
          noValidate
          onSubmit={handleSubmit(handleOnSubmit)}
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
                required
                error={fieldState.invalid}
                helperText={fieldState.error?.message}
              />
            )}
          />
          <Button type="submit" color="success">
            更新する
          </Button>
        </Stack>
      </Box>
    </Box>
  )
}
