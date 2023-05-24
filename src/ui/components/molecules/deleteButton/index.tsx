import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Button } from "ui/components/atoms/button";

type Props = {
  useDeleteTodo: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export function DeleteButton({ useDeleteTodo }: Props) {
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
