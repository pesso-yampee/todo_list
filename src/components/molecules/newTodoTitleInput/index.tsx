import { TodoDispatchContext, TodoStateContext } from "providers/TodoProvider";
import { useContext } from "react";
import { Input } from "components/atoms/Input";

export function NewTodoTitleInput() {
  const { todoTitle } = useContext(TodoStateContext);
  const { inputTodoTitle } = useContext(TodoDispatchContext);

  return (
    <Input
      placeholder="Title"
      onChange={inputTodoTitle}
      name="title"
      value={todoTitle}
    />
  );
}
