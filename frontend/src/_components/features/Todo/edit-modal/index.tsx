'use client'

import { Button } from '@/_components/common/button'
import { InputField } from '@/_components/common/input-field'
import { Box, Stack } from '@mui/material'
import { useInputForm } from './logics/use-input-form'

type Props = {
  isOpen: boolean
  onClose: () => void
  refetch: () => void
}

export const TodoEditModal = ({ isOpen, onClose, refetch }: Props) => {
  const { dialogRef, control, onSubmit, isLoading } = useInputForm(
    onClose,
    refetch,
    isOpen
  )

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
                onClick={onSubmit}
                isLoading={isLoading}
              />
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Stack>
  )
}
