'use client'

import { Alert, Snackbar } from '@mui/material'
import { DangerButton } from '_components/common/Button/Danger'
import { PrimaryButton } from '_components/common/Button/Primary'
import { usePostDeleteTodo } from 'hooks/usePostDeleteTodo'
import { useSetAtom } from 'jotai'
import { useCallback } from 'react'
import { todoAtom, todoEditModalAtom } from 'store'
import { TodoType } from 'types/todo'

type TodoItemProps = {
  item: TodoType
  refetch: () => void
}

export const TodoItem = ({ item, refetch }: TodoItemProps) => {
  const { doPost } = usePostDeleteTodo()
  const setTodo = useSetAtom(todoAtom)
  const setTodoEditModal = useSetAtom(todoEditModalAtom)

  const handleOnClick = {
    editTodo: (todo: TodoType) => {
      setTodo({ id: todo.id, detail: todo.detail, title: todo.title })
      setTodoEditModal({ isOpen: true })
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
          text={'編集'}
          style={{ width: '100%' }}
          onClick={() => handleOnClick.editTodo(item)}
        />
        <DangerButton
          text={'削除'}
          onClick={() => handleOnClick.deleteTodo(item.id)}
        />
      </div>
    </li>
  )
}
