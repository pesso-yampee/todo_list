import { atom } from 'jotai'
import { TodoType } from 'types/todo'

type TodoAtomDefault = {
  id: string
  detail: string
  title: string
}

type TodosAtomDefault = {
  todos: TodoType[] | null
}

type IsAuthenticatedAtomDefault = {
  isAuthenticated: boolean
}

type TodoEditModalAtomDefault = {
  isOpen: boolean
}

export const isAuthenticatedAtom = atom<IsAuthenticatedAtomDefault>({ isAuthenticated: false })

export const todoAtom = atom<TodoAtomDefault>({
  id: '',
  detail: '',
  title: '',
})

export const todoEditModalAtom = atom<TodoEditModalAtomDefault>({ isOpen: false })

export const todosAtom = atom<TodosAtomDefault>({todos: null})