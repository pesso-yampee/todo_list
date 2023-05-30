import { TodoDispatchContext } from "providers/TodoProvider";
import { useContext } from "react";
import { Button } from "ui/components/atoms/button";

export function CreateTodoButton() {
  const { useAddToList } = useContext(TodoDispatchContext);

  return (
    <Button
      type="button"
      ariaLabel=""
      onClick={useAddToList}
      className="button-primary"
    >
      <span>Create Todo</span>
    </Button>
  );
}
