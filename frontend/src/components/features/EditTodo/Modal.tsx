import { Box, Button, Modal, Stack, TextField } from '@mui/material'
import { useFetchEditTodo } from 'hooks/useFetchEditTodo'
import { usePutUpdateTodo } from 'hooks/usePutUpdateTodo'
import { Dispatch, SetStateAction, useEffect } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { TodoUpdateRequest, TodoUpdateResponse } from 'types/todo'

type Props = {
  todoId: string
  isModalOpen: boolean
  setIsModalOpen: Dispatch<SetStateAction<boolean>>
}

export function EditTodoModal({ todoId, isModalOpen, setIsModalOpen }: Props) {
  const { data } = useFetchEditTodo(todoId)
  const { doPost } = usePutUpdateTodo()
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<TodoUpdateResponse>({
    defaultValues: {
      title: '',
      detail: '',
    },
  })
  const handleOnCloseModal = () => setIsModalOpen(false)
  const handleOnSubmit: SubmitHandler<TodoUpdateRequest> = (data) => {
    doPost({
      data,
      id: todoId,
      onSuccess: () => {
        console.log('成功しました')
      },
      onError: (error) => {
        console.error(error)
      },
    })
  }

  useEffect(() => {
    reset({ title: data?.title ?? '', detail: data?.detail ?? '' })
  }, [data])

  return (
    <Modal
      open={isModalOpen}
      onClose={handleOnCloseModal}
      sx={{ display: 'grid', placeContent: 'center' }}
    >
      <Box width={'320px'} bgcolor={'white'} p={'24px'} borderRadius={'5px'}>
        <Stack
          component={'form'}
          noValidate
          onSubmit={handleSubmit(handleOnSubmit)}
          gap={'24px'}
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
                fullWidth
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
                fullWidth
              />
            )}
          />
          <Stack flexDirection={'row'} gap={'8px'}>
            <Button
              type="button"
              color="inherit"
              variant="contained"
              fullWidth
              onClick={() => handleOnCloseModal()}
            >
              キャンセル
            </Button>
            <Button type="submit" color="success" variant="contained" fullWidth>
              更新する
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Modal>
  )
}
