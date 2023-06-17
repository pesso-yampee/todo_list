import { TodoDispatchContext, TodoStateContext } from "providers/TodoProvider";
import { useContext } from "react";
import { Input } from "components/atoms/Input";


export function EditTodoTitleInput() {
  const { todoTitle } = useContext(TodoStateContext);
  const { inputTodoTitle } = useContext(TodoDispatchContext);
  return (
    <Input
      placeholder=""
      onChange={inputTodoTitle}
      name="content"
      value={todoTitle}
    />
  );
}
