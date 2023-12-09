'use client'

import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

type Props<T extends FieldValues> = {
  control: UseControllerProps<T>['control']
  name: UseControllerProps<T>['name']
  rules: UseControllerProps<T>['rules']
  label: string
}

export const InputField = <T extends FieldValues>({
  control,
  name,
  rules,
  label,
}: Props<T>) => {
  const { field, fieldState } = useController({ control, name, rules })
  const { error } = fieldState

  return (
    <div className="grid gap-2">
      <div className="group relative rounded border-2 border-gray-200">
        <input
          {...field}
          type={'text'}
          className="group w-full p-2 duration-300 invalid:border-red-500 invalid:text-red-500 focus:pt-8"
        />
        <label
          htmlFor={name}
          className="absolute left-0 top-0 h-full p-2 group-focus:text-gray-300"
        >
          {label}
        </label>
      </div>
      <span className="text-sm text-red-500">
        {error?.message ?? '値を入力してください'}
      </span>
    </div>
  )
}
