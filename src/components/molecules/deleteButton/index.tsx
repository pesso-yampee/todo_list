import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { apiClient } from "constants/apiClient";
import { IconButton } from "components/atoms/IconButton";

export function DeleteButton() {
  const handleOnClickdeleteTodo = (e: React.MouseEvent<HTMLButtonElement>) => {
    const currentTarget = e.currentTarget;
    const todoItem = currentTarget.closest("li");
    const todoItemId = todoItem?.id;
    const res = window.confirm(
      `タスク「${todoItem?.textContent}」を本当に削除しますか？`
    );

    if (res) {
      try {
        apiClient.delete(`/task/${todoItemId}`);
      } catch (error) {
        console.log(error);
      }
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
