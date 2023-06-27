import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Button } from "components/atoms/button";
import { useSetRecoilState } from "recoil";
import { TodoListAtom } from "states/TodoState";
import { TodoType } from "types/todo";

export function DeleteButton() {
  const setTodoList = useSetRecoilState<TodoType[]>(TodoListAtom);

  const deleteTodoHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const currentTarget = e.currentTarget;
    const todoItem = currentTarget.closest("li");
    const todoItemId = todoItem?.id;
    const res = window.confirm(
      `タスク「${todoItem?.textContent}」を本当に削除しますか？`
    );

    if (res) {
      setTodoList((prevTodos) =>
        prevTodos.filter((item) => {
          return item.id !== todoItemId;
        })
      );
    }
  };

  return (
    <Button
      ariaLabel="TODOを削除する"
      onClick={deleteTodoHandler}
      className="button-icon"
    >
      <FontAwesomeIcon icon={faTrash} size="1x" />
    </Button>
  );
}
