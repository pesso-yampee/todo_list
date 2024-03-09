'use client'

import { useDisclosure } from '@/hooks/use-disclosure'
import { useFetchTodoList } from '@/hooks/useFetchTodoList'
import { todosAtom } from '@/store'
import { TodoType } from '@/types/todo'
import { TodoEditModal } from '@/_components/features/todo/edit-modal'
import { List } from '@mui/material'
import { useSetAtom } from 'jotai'
import { useEffect } from 'react'
import { TodoItem } from '../item'

export const TodoList = () => {
  const setTodos = useSetAtom(todosAtom)
  const { data, refetch } = useFetchTodoList()
  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    if (data) {
      setTodos(data)
    }
  }, [data, setTodos])

  return (
    <>
      <List
        disablePadding
        sx={{ marginTop: '24px', display: 'grid', gap: '8px' }}
      >
        {data?.map((item: TodoType) => (
          <TodoItem
            key={item.id}
            item={item}
            refetch={refetch}
            onOpen={onOpen}
          />
        ))}
      </List>
      {isOpen && (
        <TodoEditModal isOpen={isOpen} onClose={onClose} refetch={refetch} />
      )}
    </>
  )
}
