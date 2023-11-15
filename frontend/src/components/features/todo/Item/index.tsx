import {
  Alert,
  Box,
  Button,
  ListItem,
  ListItemText,
  Snackbar,
} from '@mui/material'
import { usePostDeleteTodo } from 'hooks/usePostDeleteTodo'
import { Dispatch, SetStateAction } from 'react'
import { TodoType } from 'types/todo'

type todoItemProps = {
  item: TodoType
  refetch: () => void
  setTodoId: Dispatch<SetStateAction<string>>
  setIsModalOpen: Dispatch<SetStateAction<boolean>>
}

export const TodoItem = ({
  item,
  refetch,
  setTodoId,
  setIsModalOpen,
}: todoItemProps) => {
  const { doPost } = usePostDeleteTodo()
  const handleOnClick = {
    editTodo: (todoId: string) => {
      setTodoId(todoId)
      setIsModalOpen(true)
    },
    deleteTodo: (todoId: string) => {
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
  }
  return (
    <ListItem disableGutters>
      <ListItemText>{item.title}</ListItemText>
      <Box display={'flex'} gap={'8px'}>
        <Button
          title="編集"
          color="primary"
          variant="contained"
          onClick={() => handleOnClick.editTodo(item.id)}
        >
          編集
        </Button>
        <Button
          title="削除"
          color="error"
          variant="contained"
          onClick={() => handleOnClick.deleteTodo(item.id)}
        >
          削除
        </Button>
      </Box>
    </ListItem>
  )
}
