import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Button } from "components/atoms/button";
import { useContext } from "react";
import { TodoDispatchContext } from "providers/TodoProvider";

export function DeleteButton() {
  const { setList } = useContext(TodoDispatchContext);

  const deleteTodo = (e: React.MouseEvent<HTMLButtonElement>) => {
    const currentTarget = e.currentTarget;
    const todoItem = currentTarget.closest("li");
    const todoItemId = todoItem?.id;
    const res = window.confirm(
      `タスク「${todoItem?.textContent}」を本当に削除しますか？`
    );

    if (res) {
      setList((prevTodos) =>
        prevTodos.filter((item) => {
          return item.id !== todoItemId;
        })
      );
    }
  };

  return (
    <Button
      type="button"
      ariaLabel="delete the todo item"
      onClick={deleteTodo}
      className="button-icon"
    >
      <FontAwesomeIcon icon={faTrash} size="1x" />
    </Button>
  );
}
