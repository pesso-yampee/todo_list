import { TodoType } from '@/types/todo'
import { atom } from 'jotai'

type TodoAtomDefault =
  | {
      id: string
      detail: string
      title: string
    }
  | undefined

type TodoEditModalAtomDefault = {
  isOpen: boolean
}

type TodosAtomDefault = TodoType[] | undefined

type UserInfoDefault =
  | {
      email: string
      id: number | null
      name: string
    }
  | null
  | undefined

export const authUserAtom = atom<UserInfoDefault>(undefined)

export const todoAtom = atom<TodoAtomDefault>(undefined)

export const todoEditModalAtom = atom<TodoEditModalAtomDefault>({
  isOpen: false,
})

export const todosAtom = atom<TodosAtomDefault>(undefined)
