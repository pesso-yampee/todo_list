import { usePutUpdateTodo } from '@/hooks/use-put-update-todo'
import { todoAtom } from '@/store'
import { TodoUpdateRequest, TodoUpdateResponse } from '@/types/todo'
import { useAtomValue } from 'jotai'
import { useEffect, useRef } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

export const useInputForm = (
  onClose: () => void,
  refetch: () => void,
  isOpen: boolean
) => {
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

  return { control, isLoading, onSubmit: handleSubmit(onSubmit), dialogRef }
}
