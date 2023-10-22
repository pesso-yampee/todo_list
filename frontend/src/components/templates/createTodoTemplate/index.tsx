import {
  Alert,
  Box,
  Button,
  ButtonGroup,
  Stack,
  TextField,
} from '@mui/material'
import { PageTitle } from 'components/atoms/PageTitle'
import { Navigation } from 'components/organisms/navigation'
import { PAGE_PATH } from 'constants/pagePath'
import { usePostCreateTodo } from 'hooks/usePostCreateTodo'
import { useRouter } from 'next/router'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { TodoCreateRequest } from 'types/todo'

type Props = {
  text: string
}

export function CreateTodoTemplate({ text }: Props) {
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

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      maxWidth={'600px'}
      mt={'100'}
      mx={'auto'}
    >
      <Navigation />
      <PageTitle text={text} />
      <Box
        width={'100%'}
        mt={'20px'}
        padding={'20px'}
        boxShadow={'0 0 5px #333'}
      >
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
          <ButtonGroup variant="contained">
            <Button type="reset" onClick={() => reset()} color="inherit">
              キャンセル
            </Button>
            <Button type="submit" color="success">
              作成する
            </Button>
          </ButtonGroup>
        </Stack>
      </Box>
    </Box>
  )
}
