import { TodoDispatchContext } from "providers/TodoProvider";
import { useContext } from "react";
import { Button } from "components/atoms/button";

export function EditCompleteButton() {
  const { useUpdateTodo } = useContext(TodoDispatchContext);

  return (
    <Button
      type="button"
      ariaLabel=""
      onClick={useUpdateTodo}
      className="button-primary"
    >
      <span>Edit Todo</span>
    </Button>
  );
}
