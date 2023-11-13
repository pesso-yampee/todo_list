'use client'

import { List } from '@mui/material'
import { useFetchTodoList } from 'hooks/useFetchTodoList'
import { useState } from 'react'
import { TodoType } from 'types/todo'
import { EditTodoModal } from '../EditTodo'
import { TodoItem } from '../todoItem'

export const TodoList = () => {
  const { data, refetch } = useFetchTodoList()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [todoId, setTodoId] = useState<string>('')

  return (
    <>
      <List>
        {data?.map((item: TodoType) => (
          <TodoItem
            item={item}
            refetch={refetch}
            setTodoId={setTodoId}
            setIsModalOpen={setIsModalOpen}
          />
        ))}
      </List>
      {isModalOpen && (
        <EditTodoModal
          todoId={todoId}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </>
  )
}
