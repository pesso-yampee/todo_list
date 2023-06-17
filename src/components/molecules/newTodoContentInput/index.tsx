import { TodoDispatchContext, TodoStateContext } from "providers/TodoProvider";
import { useContext } from "react";
import { Input } from "components/atoms/Input";

export function NewTodoContentInput() {
  const { todoContent } = useContext(TodoStateContext);
  const { inputTodoContent } = useContext(TodoDispatchContext);

  return (
    <Input
      placeholder="Content"
      onChange={inputTodoContent}
      name="content"
      value={todoContent}
    />
  );
}
