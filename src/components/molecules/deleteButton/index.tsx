import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Button } from "components/atoms/button";
import { apiClient } from "constants/apiClient";

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
    <Button
      ariaLabel="TODOを削除する"
      onClick={handleOnClickdeleteTodo}
      className="button-icon"
    >
      <FontAwesomeIcon icon={faTrash} size="1x" />
    </Button>
  );
}
