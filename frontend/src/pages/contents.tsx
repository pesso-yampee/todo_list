import { LoadingButton } from '@mui/lab'
import {
  Alert,
  Box,
  CircularProgress,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { EditTodoModal } from 'components/features/EditTodoModal'
import { TodoItemList } from 'components/features/todoItemList'
import { useFetchTodoList } from 'hooks/useFetchTodoList'
import { usePostCreateTodo } from 'hooks/usePostCreateTodo'
import { useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { TodoCreateRequest } from 'types/todo'

type Props = {
  text: string
}

export const TodoListContents = ({ text }: Props) => {
  const [isCreateLoading, setIsCreateLoading] = useState(false)
  const [modalInfo, setModalInfo] = useState<{
    isOpen: boolean
    todoItemId: number | null
  }>({ isOpen: false, todoItemId: null })
  const { doPost } = usePostCreateTodo()
  const { data, error, refetch, isLoading } = useFetchTodoList()
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
    <Box maxWidth={'450px'}>
      <Typography component={'h1'}>{text}</Typography>
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
      {isLoading && (
        <Box
          display={'grid'}
          minHeight={'300px'}
          sx={{ placeContent: 'center' }}
        >
          <CircularProgress color="inherit" />
        </Box>
      )}
      {!data && error && <Typography>表示するデータがありません。</Typography>}
      <Box>
        {!isLoading && (
          <TodoItemList
            data={data}
            refetch={refetch}
            setModalInfo={setModalInfo}
          />
        )}
      </Box>
      {modalInfo.isOpen && (
        <EditTodoModal modalInfo={modalInfo} setModalInfo={setModalInfo} />
      )}
    </Box>
  )
}
