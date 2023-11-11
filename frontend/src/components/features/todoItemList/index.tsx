import {
  Alert,
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Snackbar,
} from '@mui/material'
import { usePostDeleteTodo } from 'hooks/usePostDeleteTodo'
import { useRouter } from 'next/router'
import { Dispatch, SetStateAction } from 'react'
import { TodoType } from 'types/todo'

type Props = {
  data: TodoType[]
  refetch: () => void
  setModalInfo: Dispatch<
    SetStateAction<{ isOpen: boolean; todoItemId: number | null }>
  >
}

export const TodoItemList = ({ data, refetch, setModalInfo }: Props) => {
  const router = useRouter()
  const { doPost } = usePostDeleteTodo()
  const handleOnClick = {
    editTodo: (todoItemId: number) => {
      setModalInfo({ isOpen: true, todoItemId: todoItemId })
    },
    deleteTodo: (todoItemId: number) => {
      doPost({
        id: todoItemId,
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
    <List>
      {data.map((item) => (
        <ListItem key={item.id} id={String(item.id)} disableGutters>
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
      ))}
    </List>
  )
}
