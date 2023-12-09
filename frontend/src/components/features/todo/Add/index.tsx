'use client'

import { Alert } from 'components/common/Alert'
import { InputField } from 'components/common/InputField'
import { usePostCreateTodo } from 'hooks/usePostCreateTodo'
import { useRef, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { TodoCreateRequest } from 'types/todo'

export const AddTodo = () => {
  const { doPost } = usePostCreateTodo()
  const [isCreateLoading, setIsCreateLoading] = useState(false)
  const submitProcessing = useRef(false)
  const { control, handleSubmit } = useForm<TodoCreateRequest>({
    defaultValues: {
      title: '',
      detail: '',
    },
    mode: 'onBlur',
  })

  const handleOnSubmitCreateTodo: SubmitHandler<TodoCreateRequest> = (
    data,
    event
  ) => {
    event?.preventDefault()
    event?.stopPropagation()

    if (submitProcessing.current) return false

    submitProcessing.current = true
    setIsCreateLoading(true)

    doPost({
      data,
      onSuccess: () => {
        return <Alert severity={'success'} text={'作成に成功しました'} />
      },
      onError: () => {
        return <Alert severity={'error'} text={'作成に失敗しました'} />
      },
      onFinally: () => {
        submitProcessing.current = false
        setIsCreateLoading(false)
      },
    })
  }

  return (
    <form
      className="mt-4 grid gap-4"
      onSubmit={handleSubmit(handleOnSubmitCreateTodo)}
    >
      <div className="grid gap-4">
        <InputField
          control={control}
          name={'title'}
          placeholder={'名前'}
          rules={{ required: true }}
        />
        <InputField
          control={control}
          name={'detail'}
          placeholder={'詳細'}
          rules={{ required: true }}
        />
        <button
          type="submit"
          className="rounded border-2 border-solid border-green-600 bg-green-600 py-2 text-white duration-300 hover:bg-white hover:text-green-600"
        >
          {isCreateLoading ? '作成中' : '作成する'}
        </button>
      </div>
    </form>
  )
}
