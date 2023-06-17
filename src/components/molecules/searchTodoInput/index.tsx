import { useContext } from "react";
import { TodoDispatchContext } from "providers/TodoProvider";
import { Input } from "components/atoms/Input";

export function SearchTodoInput() {
  const { setSearchTodoTitle } = useContext(TodoDispatchContext);
  
  /**
   * 検索するTodoを設定
   * @param e
   */
  const initializeSearchTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTodoTitle(e.currentTarget.value);
  };

  return (
    <Input
      placeholder="Search Keyword"
      onChange={initializeSearchTodo}
      name="search"
      value={undefined}
    />
  );
}
