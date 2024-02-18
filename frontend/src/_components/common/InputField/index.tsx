'use client'

import { HTMLInputTypeAttribute } from 'react'
import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

type Props<T extends FieldValues> = {
  control: UseControllerProps<T>['control']
  name: UseControllerProps<T>['name']
  rules?: UseControllerProps<T>['rules']
  placeholder?: string
  type?: HTMLInputTypeAttribute
}

export const InputField = <T extends FieldValues>({
  control,
  name,
  rules,
  placeholder,
  type = 'text',
}: Props<T>) => {
  const {
    field,
    fieldState: { error },
  } = useController({ control, name, rules })

  return (
    <div className='grid gap-2'>
      <input
        {...field}
        type={type}
        placeholder={placeholder}
        className='w-full rounded border-2 border-solid border-gray-300 px-1 py-2 invalid:border-pink-500 invalid:text-pink-500 focus:invalid:border-pink-500 focus:invalid:text-pink-500'
      />
      <span className='text-sm text-red-500'>
        {error?.message && error.message}
      </span>
    </div>
  )
}
