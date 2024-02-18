import { Button as MUIButton, ButtonTypeMap } from '@mui/material'
import { ComponentPropsWithoutRef } from 'react'

type ButtonProps = ButtonTypeMap['props'] & ComponentPropsWithoutRef<'button'>

type Props = {
  text: string
} & ButtonProps

export const Button = ({ text, ...buttonProps }: Props) => {
  return (
    <MUIButton variant={'contained'} color={'primary'} {...buttonProps}>
      {text}
    </MUIButton>
  )
}
