import { atom, useRecoilValue, useSetRecoilState } from 'recoil'

const todoItemState = atom({
  key: 'todoItemState',
  default: {
    id: '',
  },
})

export const useTodoItemState = () => {
  return useRecoilValue(todoItemState)
}

export const useTodoItemMutators = () => {
  const setState = useSetRecoilState(todoItemState)

  return { setState }
}
