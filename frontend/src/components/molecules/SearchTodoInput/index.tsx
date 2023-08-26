import { Input } from 'components/atoms/Input'
import { Dispatch, SetStateAction } from 'react'

type Props = {
  setTodoTitle: Dispatch<SetStateAction<string>>
}

export function SearchTodoInput({ setTodoTitle }: Props) {
  /**
   * 検索するTodoを設定
   * @param e
   */
  const handleOnChangeSearchTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoTitle(e.currentTarget.value)
  }

  return (
    <Input
      placeholder="Search Todo"
      onChange={handleOnChangeSearchTodo}
      name="search"
    />
  )
}