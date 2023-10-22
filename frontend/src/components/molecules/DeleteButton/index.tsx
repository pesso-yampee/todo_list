import { Alert, Button, Snackbar } from '@mui/material'
import { usePostDeleteTodo } from 'hooks/usePostDeleteTodo'

type Props = {
  id: string
  refetch: () => void
}
export function DeleteButton({ id, refetch }: Props) {
  const { doPost } = usePostDeleteTodo()
  const handleOnClickDeleteTodo = () => {
    doPost({
      id,
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
  }

  return (
    <Button
      title="削除"
      color="error"
      variant="contained"
      onClick={handleOnClickDeleteTodo}
    >
      削除
    </Button>
  )
}
