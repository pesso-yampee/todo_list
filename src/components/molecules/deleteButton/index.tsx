import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { IconButton } from "components/atoms/IconButton";
import { useDeleteTodo } from "hooks/useDeleteTodo";

export function DeleteButton() {
  const { doDelete } = useDeleteTodo();
  const handleOnClickdeleteTodo = (e: React.MouseEvent<HTMLButtonElement>) => {
    const currentTarget = e.currentTarget;
    const todoItem = currentTarget.closest("li");
    const todoItemId = todoItem?.id;
    const res = window.confirm(
      `タスク「${todoItem?.textContent}」を本当に削除しますか？`
    );

    if (res) {
      todoItemId && doDelete(todoItemId);
    }
  };

  return (
    <IconButton
      ariaLabel="TODOを削除する"
      onClick={handleOnClickdeleteTodo}
      className="button-icon"
    >
      <FontAwesomeIcon icon={faTrash} size="1x" />
    </IconButton>
  );
}
