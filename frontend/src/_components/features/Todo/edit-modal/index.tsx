'use client'

import { usePutUpdateTodo } from '@/hooks/usePutUpdateTodo'
import { todoAtom, todoEditModalAtom } from '@/store'
import { TodoUpdateRequest, TodoUpdateResponse } from '@/types/todo'
import { Button } from '@/_components/common/button'
import { InputField } from '@/_components/common/input-field'
import { Box, Stack } from '@mui/material'
import { useAtomValue, useSetAtom } from 'jotai'
import { useEffect, useRef } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

type Props = {
  isOpen: boolean
}

export const TodoEditModal = ({ isOpen }: Props) => {
  const todoState = useAtomValue(todoAtom)
  const setTodoEditModalState = useSetAtom(todoEditModalAtom)
  const { doPost } = usePutUpdateTodo()
  const dialogRef = useRef<HTMLDivElement>(null)
  const { control, handleSubmit } = useForm<TodoUpdateResponse>({
    defaultValues: {
      title: todoState.title,
      detail: todoState.detail,
    },
  })
  const handleOnCloseModal = () => {
    setTodoEditModalState(() => ({ isOpen: false }))
  }
  const handleOnSubmit: SubmitHandler<TodoUpdateRequest> = (data) => {
    doPost({
      data,
      id: todoState.id,
      onSuccess: () => {
        toast.success('成功しました')
      },
      onError: (error) => {
        throw new Error('送信に失敗しました')
      },
    })
  }

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.focus()
    }
  }, [isOpen])

  return (
    <Stack
      ref={dialogRef}
      role={'dialog'}
      aria-modal={'true'}
      tabIndex={-1}
      aria-hidden={'false'}
      position={'fixed'}
      alignItems={'center'}
      justifyContent={'center'}
      sx={{ inset: 0, backdropFilter: 'filter(5px)' }}
    >
      <Box
        borderRadius={'3px'}
        border={'solid 2px #d0d0d0'}
        width={'450px'}
        bgcolor={'#ffffff'}
        padding={'24px'}
      >
        <Box
          component={'form'}
          noValidate
          onSubmit={handleSubmit(handleOnSubmit)}
          display={'grid'}
          gap={'24px'}
        >
          <Stack direction={'column'} gap={3}>
            <Stack direction={'column'} gap={1}>
              <InputField
                type={'text'}
                control={control}
                name={'title'}
                placeholder={'名前'}
              />
              <InputField
                type={'text'}
                control={control}
                name={'detail'}
                placeholder={'詳細'}
              />
            </Stack>
            <Stack direction={'row'} gap={1}>
              <Button
                text={'キャンセル'}
                onClick={handleOnCloseModal}
                color={'inherit'}
                fullWidth
              />
              <Button text={'更新する'} fullWidth />
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Stack>
  )
}
