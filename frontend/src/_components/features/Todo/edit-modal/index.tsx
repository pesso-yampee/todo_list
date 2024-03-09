'use client'

import { usePutUpdateTodo } from '@/hooks/usePutUpdateTodo'
import { todoAtom } from '@/store'
import { TodoUpdateRequest,TodoUpdateResponse } from '@/types/todo'
import { Button } from '@/_components/common/button'
import { InputField } from '@/_components/common/input-field'
import { Box,Stack } from '@mui/material'
import { useAtomValue } from 'jotai'
import { useEffect,useRef } from 'react'
import { SubmitHandler,useForm } from 'react-hook-form'

type Props = {
  isOpen: boolean
  onClose: () => void
  refetch: () => void
}

export const TodoEditModal = ({ isOpen, onClose, refetch }: Props) => {
  const todoState = useAtomValue(todoAtom)
  const { doPost, isLoading } = usePutUpdateTodo()
  const dialogRef = useRef<HTMLDivElement>(null)
  const { control, handleSubmit } = useForm<TodoUpdateResponse>({
    defaultValues: {
      title: todoState?.title ?? '',
      detail: todoState?.detail ?? '',
    },
  })
  const onSubmit: SubmitHandler<TodoUpdateRequest> = (data) => {
    doPost({
      data,
      id: todoState?.id,
      onSuccess: () => {
        onClose()
        refetch()
      },
      onError: () => {
        throw new Error('更新に失敗しました')
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
        <Box component={'form'} noValidate display={'grid'} gap={'24px'}>
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
                onClick={onClose}
                color={'inherit'}
                fullWidth
              />
              <Button
                text={'更新する'}
                fullWidth
                color={'primary'}
                onClick={handleSubmit(onSubmit)}
                isLoading={isLoading}
              />
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Stack>
  )
}
