'use client'

import { TodoType } from '@/types/todo'
import { Button } from '@/_components/common/button'
import { ListItem, Stack, Typography } from '@mui/material'
import { useTodo } from './logics/use-todo'

type Props = {
  item: TodoType
  onEditModalOpen: () => void
  onDeleteConfirmModalOpen: () => void
}

export const TodoItem = ({
  item,
  onEditModalOpen,
  onDeleteConfirmModalOpen,
}: Props) => {
  const { editTodo, deleteTodo } = useTodo(
    onEditModalOpen,
    onDeleteConfirmModalOpen
  )

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
        <Button text={'編集'} fullWidth onClick={() => editTodo(item)} />
        <Button
          text={'削除'}
          color={'error'}
          onClick={() => deleteTodo(item)}
        />
      </Stack>
    </ListItem>
  )
}
