import { TodoDispatchContext } from "providers/TodoProvider";
import { useContext } from "react";
import { Button } from "components/atoms/button";

export function CreateTodoButton() {
  const { addTodo } = useContext(TodoDispatchContext);

  return (
    <Button
      type="button"
      ariaLabel=""
      onClick={addTodo}
      className="button-primary"
    >
      <span>Create Todo</span>
    </Button>
  );
}
