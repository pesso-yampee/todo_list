import { useTodo } from "hooks/useTodo";
import { Input } from "ui/components/atoms/Input";

export function SearchTodoInput() {
  const { useSetSearchTodo } = useTodo();

  return (
    <Input
      placeholder="Search Keyword"
      onKeyDown={undefined}
      onChange={useSetSearchTodo}
    />
  );
}
