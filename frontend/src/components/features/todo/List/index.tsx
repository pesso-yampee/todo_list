'use client'

import { useFetchTodoList } from 'hooks/useFetchTodoList'
import { TodoType } from 'types/todo'
import { TodoItem } from '../Item'

export const TodoList = () => {
  const { data, refetch } = useFetchTodoList()

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
