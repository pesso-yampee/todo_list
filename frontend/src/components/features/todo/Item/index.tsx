'use client'

import { Alert, Snackbar } from '@mui/material'
import { DangerButton } from 'components/common/Button/Danger'
import { PrimaryButton } from 'components/common/Button/Primary'
import { useTodoItemEditModalStateMutators } from 'globalStates/todoItemEditModalState'
import { useTodoItemMutators } from 'globalStates/todoItemState'
import { usePostDeleteTodo } from 'hooks/usePostDeleteTodo'
import { useCallback } from 'react'
import { TodoType } from 'types/todo'

type TodoItemProps = {
  item: TodoType
  refetch: () => void
}

export const TodoItem = ({ item, refetch }: TodoItemProps) => {
  const { doPost } = usePostDeleteTodo()
  const { setState: setStateTodoItem } = useTodoItemMutators()
  const { setStateEditModal } = useTodoItemEditModalStateMutators()

  const handleOnClick = {
    editTodo: (todoId: string) => {
      setStateTodoItem({ id: todoId })
      setStateEditModal({ isOpen: true })
    },
    deleteTodo: useCallback(
      (todoId: string) => {
        doPost({
          id: todoId,
          onSuccess: () => {
            refetch()
            return (
              <Snackbar open={true} autoHideDuration={5000}>
                <Alert severity="success">削除しました</Alert>
              </Snackbar>
            )
          },
          onError: () => {
            return (
              <Snackbar open={true} autoHideDuration={5000}>
                <Alert severity="error">削除に失敗しました</Alert>
              </Snackbar>
            )
          },
        })
      },
      [doPost, refetch]
    ),
  }
  return (
    <li className="flex items-center justify-between">
      <span className="text-lg">{item.title}</span>
      <div className="flex gap-2">
        <PrimaryButton
          itemId={item.id}
          text={'編集'}
          onClickEvent={handleOnClick.editTodo}
          style={{ width: '100%' }}
        />
        <DangerButton
          itemId={item.id}
          text={'削除'}
          onClickEvent={handleOnClick.deleteTodo}
        />
      </div>
    </li>
  )
}
