'use client'

import { Alert, ListItem, Snackbar, Stack, Typography } from '@mui/material'
import { usePostDeleteTodo } from 'hooks/usePostDeleteTodo'
import { useSetAtom } from 'jotai'
import { useCallback } from 'react'
import { todoAtom, todoEditModalAtom } from 'store'
import { TodoType } from 'types/todo'
import { Button } from '_components/common/Button'

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
                <Alert severity='success'>削除しました</Alert>
              </Snackbar>
            )
          },
          onError: () => {
            return (
              <Snackbar open={true} autoHideDuration={5000}>
                <Alert severity='error'>削除に失敗しました</Alert>
              </Snackbar>
            )
          },
        })
      },
      [doPost, refetch]
    ),
  }
  return (
    <ListItem
      disableGutters
      disablePadding
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Typography fontSize={'20px'}>{item.title}</Typography>
      <Stack gap={'8px'}>
        <Button
          text={'編集'}
          fullWidth
          onClick={() => handleOnClick.editTodo(item)}
        />
        <Button
          text={'削除'}
          onClick={() => handleOnClick.deleteTodo(item.id)}
        />
      </Stack>
    </ListItem>
  )
}
