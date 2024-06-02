import { useFetchTodoList } from '@/hooks/use-fetch-todo-list'
import { usePostCreateTodo } from '@/hooks/use-post-create-todo'
import { authUserAtom } from '@/store'
import { TodoCreateRequest } from '@/types/todo'
import { useAtomValue } from 'jotai'
import { useRef, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

export const useInputForm = () => {
  const authUser = useAtomValue(authUserAtom)
  const { refetch } = useFetchTodoList()
  const { doPost } = usePostCreateTodo()
  const [isCreateLoading, setIsCreateLoading] = useState<boolean>(false)
  const submitProcessing = useRef<boolean>(false)
  const { control, handleSubmit, reset } = useForm<TodoCreateRequest>({
    defaultValues: {
      title: '',
      detail: '',
    },
    mode: 'onBlur',
  })

  const handleOnSubmitCreateTodo: SubmitHandler<TodoCreateRequest> = (data) => {
    if (submitProcessing.current) return

    const postData = {
      ...data,
      user_id: authUser?.id,
    }

    submitProcessing.current = true
    setIsCreateLoading(true)

    doPost({
      data: postData,
      onSuccess: () => {
        refetch()
        reset()
      },
      onError: () => {
        throw new Error('作成できませんでした')
      },
      onFinally: () => {
        submitProcessing.current = false
        setIsCreateLoading(false)
      },
    })
  }

  return {
    isCreateLoading,
    control,
    handleSubmit: handleSubmit(handleOnSubmitCreateTodo),
  }
}
