import { useContext } from "react";
import { TodoDispatchContext } from "providers/TodoProvider";
import { Input } from "ui/components/atoms/Input";

export function SearchTodoInput() {
  const { useSetSearchTodo } = useContext(TodoDispatchContext);

  return (
    <Input
      placeholder="Search Keyword"
      onChange={useSetSearchTodo}
      name="search"
      value={undefined}
    />
  );
}
