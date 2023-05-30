import { TodoDispatchContext, TodoStateContext } from "providers/TodoProvider";
import { useContext } from "react";
import { Input } from "ui/components/atoms/Input";

export function EditTodoTitleInput() {
  const { todoTitle } = useContext(TodoStateContext);
  const { useInputTodoTitle } = useContext(TodoDispatchContext);
  return (
    <Input
      placeholder=""
      onChange={useInputTodoTitle}
      name="content"
      value={todoTitle}
    />
  );
}