'use client'

import { useDeleteTodo } from '@/hooks/useDeleteTodo'
import { todoAtom } from '@/store'
import { TodoType } from '@/types/todo'
import { Button } from '@/_components/common/button'
import { ListItem, Stack, Typography } from '@mui/material'
import { useSetAtom } from 'jotai'
import { useCallback } from 'react'
import { toast } from 'react-toastify'

type Props = {
  item: TodoType
  refetch: () => void
  onOpen: () => void
}

export const TodoItem = ({ item, refetch, onOpen }: Props) => {
  const { doDelete, isLoading } = useDeleteTodo()
  const setTodo = useSetAtom(todoAtom)

  const onClickEvents = {
    editTodo: (todo: TodoType) => {
      setTodo({ id: todo.id, detail: todo.detail, title: todo.title })
      onOpen()
    },
    deleteTodo: useCallback(
      (todoId: string) => {
        doDelete({
          id: todoId,
          onSuccess: () => {
            refetch()
            toast.success('削除しました')
          },
          onError: () => {
            toast.error('削除に失敗しました')
          },
        })
      },
      [doDelete, refetch]
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
          isLoading={isLoading}
        />
        <Button
          text={'削除'}
          color={'error'}
          onClick={() => onClickEvents.deleteTodo(item.id)}
          isLoading={isLoading}
        />
      </Stack>
    </ListItem>
  )
}
