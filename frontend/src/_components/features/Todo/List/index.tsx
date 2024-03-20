'use client'

import { useDisclosure } from '@/hooks/use-disclosure'
import { useFetchTodoList } from '@/hooks/use-fetch-todo-list'
import { todosAtom } from '@/store'
import { TodoType } from '@/types/todo'
import { DeleteCofirmModal } from '@/_components/features/todo/delete-confirm-modal'
import { TodoEditModal } from '@/_components/features/todo/edit-modal'
import { List } from '@mui/material'
import { useSetAtom } from 'jotai'
import { useEffect } from 'react'
import { TodoItem } from '../item'

export const TodoList = () => {
  const setTodos = useSetAtom(todosAtom)
  const { data, refetch } = useFetchTodoList()
  const {
    isOpen: isEditModalOpen,
    onOpen: onEditModalOpen,
    onClose: onEditModalClose,
  } = useDisclosure()
  const {
    isOpen: isDeleteConfirmModalOpen,
    onOpen: onDeleteConfirmModalOpen,
    onClose: onDeleteConfirmModalClose,
  } = useDisclosure()

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
            onEditModalOpen={onEditModalOpen}
            onDeleteConfirmModalOpen={onDeleteConfirmModalOpen}
          />
        ))}
      </List>
      {isEditModalOpen && (
        <TodoEditModal
          isOpen={isEditModalOpen}
          onClose={onEditModalClose}
          refetch={refetch}
        />
      )}
      {isDeleteConfirmModalOpen && (
        <DeleteCofirmModal
          isOpen={isDeleteConfirmModalOpen}
          onClose={onDeleteConfirmModalClose}
          refetch={refetch}
        />
      )}
    </>
  )
}
