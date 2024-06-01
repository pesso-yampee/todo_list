import { useFetchTodoList } from '@/hooks/use-fetch-todo-list'
import { todoListAtom } from '@/store'
import { useSetAtom } from 'jotai'
import { useEffect } from 'react'

export const useTodoList = () => {
  const setTodoList = useSetAtom(todoListAtom)
  const { data, refetch } = useFetchTodoList()

  useEffect(() => {
    if (data) {
      setTodoList(data)
    }
  }, [data, setTodoList])

  return { data, refetch }
}
