'use client'

import { Button } from '@/_components/common/button'
import { Box, Stack, Typography } from '@mui/material'
import { useInputForm } from './logics/use-input-form'

type Props = {
  isOpen: boolean
  onClose: () => void
  refetch: () => void
}

export const DeleteCofirmModal = ({ isOpen, onClose, refetch }: Props) => {
  const { dialogRef, isLoading, onSubmit } = useInputForm(onClose, refetch)

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
