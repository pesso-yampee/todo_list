'use client'

import { todoAtom } from '@/store'
import { TodoType } from '@/types/todo'
import { Button } from '@/_components/common/button'
import { ListItem, Stack, Typography } from '@mui/material'
import { useSetAtom } from 'jotai'

type Props = {
  item: TodoType
  refetch: () => void
  onEditModalOpen: () => void
  onDeleteConfirmModalOpen: () => void
}

export const TodoItem = ({
  item,
  refetch,
  onEditModalOpen,
  onDeleteConfirmModalOpen,
}: Props) => {
  const setTodo = useSetAtom(todoAtom)

  const onClickEvents = {
    editTodo: (todo: TodoType) => {
      setTodo({ id: todo.id, detail: todo.detail, title: todo.title })
      onEditModalOpen()
    },
    deleteTodo: (todo: TodoType) => {
      setTodo({ id: todo.id, detail: todo.detail, title: todo.title })
      onDeleteConfirmModalOpen()
    },
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
          onClick={() => onClickEvents.deleteTodo(item)}
        />
      </Stack>
    </ListItem>
  )
}
