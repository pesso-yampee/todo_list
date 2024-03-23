import { useDeleteTodo } from '@/hooks/use-delete-todo'
import { todoAtom } from '@/store'
import { useAtomValue } from 'jotai'
import { useEffect, useRef } from 'react'

export const useInputForm = (onClose: () => void, refetch: () => void) => {
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

  return { isLoading, onSubmit, dialogRef }
}
