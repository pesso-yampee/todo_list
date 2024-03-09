import { LoadingButton } from '@mui/lab'
import { ButtonTypeMap } from '@mui/material'
import { ComponentPropsWithoutRef } from 'react'

type ButtonProps = ButtonTypeMap['props'] & ComponentPropsWithoutRef<'button'>

type Props = {
  text: string
  isLoading?: boolean
} & ButtonProps

export const Button = ({ text, isLoading, ...buttonProps }: Props) => {
  return (
    <LoadingButton variant={'contained'} color={'primary'} loading={isLoading} {...buttonProps}>
      {text}
    </LoadingButton>
  )
}
