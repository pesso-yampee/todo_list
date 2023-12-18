import { useCallback } from 'react'
import { atom, useRecoilValue, useSetRecoilState } from 'recoil'
import { TodoType } from 'types/todo'

type Default = {
  todos: TodoType[]
}

const todosState = atom<Default>({
  key: 'todosState',
  default: {
    todos: [],
  },
})

export const useTodosState = () => {
  return useRecoilValue(todosState)
}

export const useTodosMutators = () => {
  const setState = useSetRecoilState(todosState)

  const setTodosState = useCallback((state: {todos: TodoType[]}) => setState(state), [setState])

  return { setTodosState }
}
