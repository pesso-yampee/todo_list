'use client'

import { TextField, TextFieldProps } from '@mui/material'
import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

type Props<T extends FieldValues> = Pick<
  UseControllerProps<T>,
  'control' | 'name' | 'rules'
> &
  TextFieldProps

export const InputField = <T extends FieldValues>({
  control,
  name,
  rules,
  ...textFieldProps
}: Props<T>) => {
  const {
    field,
    fieldState: { error },
  } = useController({ control, name, rules })

  return (
    <TextField
      fullWidth
      variant={'outlined'}
      required
      error={error?.message ? true : false}
      helperText={error?.message}
      {...field}
      {...textFieldProps}
    />
  )
}
