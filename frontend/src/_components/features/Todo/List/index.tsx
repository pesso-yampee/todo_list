'use client'

import { List } from '@mui/material'
import { useFetchTodoList } from 'hooks/useFetchTodoList'
import { useSetAtom } from 'jotai'
import { useEffect } from 'react'
import { todosAtom } from 'store'
import { TodoType } from 'types/todo'
import { TodoItem } from '../Item'

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
