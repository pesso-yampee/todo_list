'use client'

import { Box, Stack } from '@mui/material'
import { usePutUpdateTodo } from 'hooks/usePutUpdateTodo'
import { useAtomValue, useSetAtom } from 'jotai'
import { useEffect, useRef } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { todoAtom, todoEditModalAtom } from 'store'
import { TodoUpdateRequest, TodoUpdateResponse } from 'types/todo'
import { Button } from '_components/common/Button'
import { InputField } from '_components/common/InputField'

type Props = {
  isOpen: boolean
}

export const EditTodoModal = ({ isOpen }: Props) => {
  const todoState = useAtomValue(todoAtom)
  const setTodoEditModalState = useSetAtom(todoEditModalAtom)
  const { doPost } = usePutUpdateTodo()
  const dialogRef = useRef<HTMLDivElement>(null)
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TodoUpdateResponse>({
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
        console.log('成功しました')
      },
      onError: (error) => {
        console.error(error)
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
        bgcolor={'white'}
        padding={'24px'}
      >
        <Box
          component={'form'}
          noValidate
          onSubmit={handleSubmit(handleOnSubmit)}
          display={'grid'}
          gap={'24px'}
        >
          <Stack direction={'column'} gap={'4px'}>
            <Stack direction={'column'} gap={'4px'}>
              <InputField
                type={'text'}
                control={control}
                name={'title'}
                placeholder={'名前'}
                // rules={{
                //   required: {message: '入力が必須な項目です'}
                // }}
              />
              <InputField
                type={'text'}
                control={control}
                name={'detail'}
                placeholder={'詳細'}
                // rules={{
                //   required: {message: '入力が必須な項目です'}
                // }}
              />
            </Stack>
            <Stack gap={'4px'}>
              <Button text={'キャンセル'} onClick={handleOnCloseModal} />
              <Button text={'更新する'} fullWidth />
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Stack>
  )
}
