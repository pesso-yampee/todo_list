import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Button } from "components/atoms/button";
import { TodoDispatchContext } from "providers/TodoProvider";

export function DeleteButton() {
  const { useDeleteTodo } = useContext(TodoDispatchContext);

  return (
    <Button
      type="button"
      ariaLabel="delete the todo item"
      onClick={useDeleteTodo}
      className="button-icon"
    >
      <FontAwesomeIcon icon={faTrash} size="1x" />
    </Button>
  );
}
