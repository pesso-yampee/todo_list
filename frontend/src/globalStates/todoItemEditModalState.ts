import { useCallback } from 'react'
import { atom, useRecoilValue, useSetRecoilState } from 'recoil'

export type TodoItemEditModalStateProps = {
  isOpen: boolean
}

export const todoItemEditModalState = atom<TodoItemEditModalStateProps>({
  key: 'todoItemEditModalState',
  default: { isOpen: false },
})

export const useTodoItemEditModalState = () => {
  return useRecoilValue(todoItemEditModalState)
}

export const useTodoItemEditModalStateMutators = () => {
  const setState = useSetRecoilState(todoItemEditModalState)
  const setStateEditModal = useCallback(
    (state: TodoItemEditModalStateProps) => {
      setState(state)
    },
    [setState]
  )
  return { setStateEditModal }
}
