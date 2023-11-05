import { INITIAL_DATA } from 'constants/data'
import { RECOIL_ATOM_KEYS, RECOIL_SELECTOR_KEYS } from 'constants/recoilKeys'
import { atom, selector } from 'recoil'
import { TodoType } from 'types/todo'

const { TODO_LIST_STATE, TODO_TITLE_STATE, TODO_DETAIL_STATE, TODO_ID_STATE } =
  RECOIL_ATOM_KEYS

export const TodoListAtom = atom({
  key: TODO_LIST_STATE,
  default: INITIAL_DATA as TodoType[],
})

export const TodoTitleAtom = atom({
  key: TODO_TITLE_STATE,
  default: '',
})

export const TodoDetailAtom = atom({
  key: TODO_DETAIL_STATE,
  default: '',
})

export const TodoIdAtom = atom({
  key: TODO_ID_STATE,
  default: '',
})

export const UpdateEditedTodoSelector = selector({
  key: RECOIL_SELECTOR_KEYS.UPDATE_TODO_IS_EDITED_SELECTOR,
  get: ({ get }) => {
    return get(TodoListAtom)
  },
  // MEMO: targetIdの型をstring型にしたらエラーの原因になるため、any型で対応。
  set: ({ get, set }, targetId: any) => {
    const todoList: TodoType[] = get(TodoListAtom)
    const todoTitle: string = get(TodoTitleAtom)
    const todoDetail: string = get(TodoDetailAtom)
    const foundTodoIndex = todoList.findIndex((item) => item.id === targetId)

    if (foundTodoIndex !== -1) {
      const updateTodo = {
        ...todoList[foundTodoIndex],
        title: todoTitle,
        content: todoDetail,
      }

      const newTodoList = todoList.map((item) => {
        return item.id === targetId ? updateTodo : item
      })

      set(TodoListAtom, newTodoList)
    }
  },
})
