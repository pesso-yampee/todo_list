import {
  Alert,
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

export const TodoItem = ({ item, refetch }: TodoItemProps) => {
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
    <li>
      <h1 className='color-red'>{item.title}</h1>
      <div className=''>
        <button
          className='bg-teal-50 font-bold text-lg'
          onClick={() => handleOnClick.editTodo(item.id)}
        >
          編集
        </button>
        <button
          onClick={() => handleOnClick.deleteTodo(item.id)}
        >
          削除
        </button>
      </div>
    </li>
  )
}
