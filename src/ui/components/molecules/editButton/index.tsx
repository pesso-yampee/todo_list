import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { TodoDispatchContext } from "providers/TodoProvider";
import { Button } from "ui/components/atoms/button";

export function EditButton() {
  const { useSetTodoTitleAndContentIntoField } =
    useContext(TodoDispatchContext);

  return (
    <Button
      type="button"
      ariaLabel="編集する"
      onClick={useSetTodoTitleAndContentIntoField}
      className="button-icon"
    >
      <FontAwesomeIcon icon={faEdit} size="1x" />
    </Button>
  );
}
