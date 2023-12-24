'use client'

import { useTodosMutators } from 'globalStates/todosState'
import { useFetchTodoList } from 'hooks/useFetchTodoList'
import { useEffect } from 'react'
import { TodoType } from 'types/todo'
import { TodoItem } from '../Item'

export const TodoList = () => {
  const { data, refetch } = useFetchTodoList()
  const { setTodosState } = useTodosMutators()

  useEffect(() => {
    if (data) {
      setTodosState({ todos: data })
    }
  }, [data, setTodosState])

  return (
    <>
      <ul className="mt-6 grid gap-2">
        {data?.map((item: TodoType) => (
          <TodoItem key={item.id} item={item} refetch={refetch} />
        ))}
      </ul>
    </>
  )
}
