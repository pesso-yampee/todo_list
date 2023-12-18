import { useCallback } from 'react'
import { atom, useRecoilValue, useSetRecoilState } from 'recoil'
import { TodoType } from 'types/todo'

const todoState = atom<TodoType>({
  key: 'todoState',
  default: {
    id: '',
    detail: '',
    title: ''
  },
})

export const useTodoState = () => {
  return useRecoilValue(todoState)
}

export const useTodoStateMutators = () => {
  const setState = useSetRecoilState(todoState)

  const setTodoState = useCallback((state: TodoType) => setState(state), [setState])

  return { setTodoState }
}
