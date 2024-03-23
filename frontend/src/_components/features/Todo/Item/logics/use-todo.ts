import { todoAtom } from '@/store'
import { TodoType } from '@/types/todo'
import { useSetAtom } from 'jotai'

export const useTodo = (
  onEditModalOpen: () => void,
  onDeleteConfirmModalOpen: () => void
) => {
  const setTodo = useSetAtom(todoAtom)
  const editTodo = (todo: TodoType) => {
    setTodo({ id: todo.id, detail: todo.detail, title: todo.title })
    onEditModalOpen()
  }
  const deleteTodo = (todo: TodoType) => {
    setTodo({ id: todo.id, detail: todo.detail, title: todo.title })
    onDeleteConfirmModalOpen()
  }

  return { editTodo, deleteTodo }
}
