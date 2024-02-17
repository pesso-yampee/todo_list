'use client'

import { useFetchTodoList } from 'hooks/useFetchTodoList'
import { useEffect } from 'react'
import { TodoType } from 'types/todo'
import { TodoItem } from '../Item'
import { useSetAtom } from 'jotai'
import { todosAtom } from 'store'

export const TodoList = () => {
  const { data, refetch } = useFetchTodoList()
  const setTodos = useSetAtom(todosAtom)

  useEffect(() => {
    if (data) {
      setTodos({ todos: data })
    }
  }, [data, setTodos])

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
