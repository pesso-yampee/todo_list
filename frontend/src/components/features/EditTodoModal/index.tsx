import { Box, Button, Modal, Stack, TextField } from '@mui/material'
import { useFetchEditTodo } from 'hooks/useFetchEditTodo'
import { usePutUpdateTodo } from 'hooks/usePutUpdateTodo'
import { Dispatch, SetStateAction, useEffect } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { TodoCreateRequest, TodoUpdateResponse } from 'types/todo'

type Props = {
  modalInfo: { isOpen: boolean; todoItemId: number | null }
  setModalInfo: Dispatch<
    SetStateAction<{ isOpen: boolean; todoItemId: number | null }>
  >
}

export function EditTodoModal({ modalInfo, setModalInfo }: Props) {
  const { data, error, isLoading } = useFetchEditTodo(
    modalInfo.todoItemId as number
  )
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
  const handleOnCloseModal = () =>
    setModalInfo({ isOpen: false, todoItemId: null })
  const handleOnSubmit: SubmitHandler<TodoCreateRequest> = (data) => {
    doPost({
      data,
      id: modalInfo.todoItemId as number,
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
      open={modalInfo.isOpen}
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
