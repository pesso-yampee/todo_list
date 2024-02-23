'use client'

import { usePostDeleteTodo } from '@/hooks/usePostDeleteTodo'
import { todoAtom, todoEditModalAtom } from '@/store'
import { TodoType } from '@/types/todo'
import { Button } from '@/_components/common/button'
import { Alert, ListItem, Snackbar, Stack, Typography } from '@mui/material'
import { useSetAtom } from 'jotai'
import { useCallback } from 'react'

type TodoItemProps = {
  item: TodoType
  refetch: () => void
}

export const TodoItem = ({ item, refetch }: TodoItemProps) => {
  const { doPost } = usePostDeleteTodo()
  const setTodo = useSetAtom(todoAtom)
  const setTodoEditModal = useSetAtom(todoEditModalAtom)

  const onClickEvents = {
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
      <Stack direction={'row'} gap={1}>
        <Button
          text={'編集'}
          fullWidth
          onClick={() => onClickEvents.editTodo(item)}
        />
        <Button
          text={'削除'}
          color={'error'}
          onClick={() => onClickEvents.deleteTodo(item.id)}
        />
      </Stack>
    </ListItem>
  )
}
