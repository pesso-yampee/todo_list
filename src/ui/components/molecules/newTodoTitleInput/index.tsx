import { TodoDispatchContext, TodoStateContext } from "providers/TodoProvider";
import { useContext } from "react";
import { Input } from "ui/components/atoms/Input";

export function NewTodoTitleInput() {
  const { todoTitle } = useContext(TodoStateContext);
  const { useInputTodoTitle } = useContext(TodoDispatchContext);

  return (
    <Input
      placeholder="Title"
      onChange={useInputTodoTitle}
      name="title"
      value={todoTitle}
    />
  );
}
