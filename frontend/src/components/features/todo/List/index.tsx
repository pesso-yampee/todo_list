'use client'

import { List } from '@mui/material'
import { useFetchTodoList } from 'hooks/useFetchTodoList'
import { useState } from 'react'
import { TodoType } from 'types/todo'
import { EditTodoModal } from '../Edit/Modal'
import { TodoItem } from '../Item'

export const TodoList = () => {
  const { data, refetch } = useFetchTodoList()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [todoId, setTodoId] = useState<string>('')

  return (
    <>
      <ul className="mt-6 grid gap-2">
        {data?.map((item: TodoType) => (
          <TodoItem
            key={item.id}
            item={item}
            refetch={refetch}
            setTodoId={setTodoId}
            setIsModalOpen={setIsModalOpen}
          />
        ))}
      </ul>
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
