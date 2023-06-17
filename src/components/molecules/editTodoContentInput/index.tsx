import { TodoDispatchContext, TodoStateContext } from "providers/TodoProvider";
import { useContext } from "react";
import { Input } from "components/atoms/Input";

export function EditTodoContentInput() {
  const { todoContent } = useContext(TodoStateContext);
  const { inputTodoContent } = useContext(TodoDispatchContext);
  return (
    <Input
      placeholder=""
      onChange={inputTodoContent}
      name="content"
      value={todoContent}
    />
  );
}
