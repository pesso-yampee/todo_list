import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useTodo } from "hooks/useTodo";
import { Button } from "ui/components/atoms/button";

export function DeleteButton() {
  const { useDeleteTodo } = useTodo();

  return (
    <Button
      type="button"
      ariaLabel="delete the todo item"
      onClick={useDeleteTodo}
    >
      <FontAwesomeIcon icon={faTrash} size="1x" />
    </Button>
  );
}
