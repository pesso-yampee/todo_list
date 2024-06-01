'use client'

import { useDisclosure } from '@/hooks/use-disclosure'
import { TodoType } from '@/types/todo'
import { DeleteCofirmModal } from '@/_components/features/todo/delete-confirm-modal'
import { TodoEditModal } from '@/_components/features/todo/edit-modal'
import { List } from '@mui/material'
import { TodoItem } from '../item'
import { useTodoList } from './logics/use-todo-list'

export const TodoList = () => {
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
  const { data, refetch } = useTodoList()

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
