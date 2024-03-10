'use client'

import { useDeleteTodo } from '@/hooks/useDeleteTodo'
import { todoAtom } from '@/store'
import { Button } from '@/_components/common/button'
import { Box, Stack, Typography } from '@mui/material'
import { useAtomValue } from 'jotai'
import { useEffect, useRef } from 'react'

type Props = {
  isOpen: boolean
  onClose: () => void
  refetch: () => void
}

export const DeleteCofirmModal = ({ isOpen, onClose, refetch }: Props) => {
  const todoState = useAtomValue(todoAtom)
  const { doDelete, isLoading } = useDeleteTodo()
  const dialogRef = useRef<HTMLDivElement>(null)
  const onSubmit = () => {
    doDelete({
      id: todoState?.id || '',
      onSuccess: () => {
        refetch()
      },
      onError: () => {
        throw new Error('削除に失敗しました')
      },
      onFinally: () => {
        onClose()
      },
    })
  }

  useEffect(() => {
    if (dialogRef.current) {
      dialogRef.current.focus()
    }
  }, [dialogRef])

  return (
    <Stack
      ref={dialogRef}
      role={'dialog'}
      aria-modal={'true'}
      tabIndex={-1}
      aria-hidden={!isOpen}
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
        <Typography paragraph>本当に削除しますか？</Typography>
        <Stack direction={'row'} gap={1}>
          <Button
            fullWidth
            text={'キャンセル'}
            onClick={onClose}
            color={'inherit'}
            disabled={isLoading}
          />
          <Button
            fullWidth
            text={'削除'}
            onClick={onSubmit}
            color={'error'}
            isLoading={isLoading}
          />
        </Stack>
      </Box>
    </Stack>
  )
}
