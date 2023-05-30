import { TodoDispatchContext, TodoStateContext } from "providers/TodoProvider";
import { useContext } from "react";
import { Input } from "ui/components/atoms/Input";

export function EditTodoContentInput() {
  const { todoContent } = useContext(TodoStateContext);
  const { useInputTodoContent } = useContext(TodoDispatchContext);
  return (
    <Input
      placeholder=""
      onChange={useInputTodoContent}
      name="content"
      value={todoContent}
    />
  );
}
