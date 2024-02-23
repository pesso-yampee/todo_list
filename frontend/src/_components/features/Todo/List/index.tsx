'use client'

import { useFetchTodoList } from '@/hooks/useFetchTodoList'
import { todosAtom } from '@/store'
import { TodoType } from '@/types/todo'
import { List } from '@mui/material'
import { useSetAtom } from 'jotai'
import { useEffect } from 'react'
import { TodoItem } from '../item'

export const TodoList = () => {
  const { data, refetch } = useFetchTodoList()
  const setTodos = useSetAtom(todosAtom)

  useEffect(() => {
    if (data) {
      setTodos({ todos: data })
    }
  }, [data, setTodos])

  return (
    <List
      disablePadding
      sx={{ marginTop: '24px', display: 'grid', gap: '8px' }}
    >
      {data?.map((item: TodoType) => (
        <TodoItem key={item.id} item={item} refetch={refetch} />
      ))}
    </List>
  )
}
