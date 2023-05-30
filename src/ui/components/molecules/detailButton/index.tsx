import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNoteSticky } from "@fortawesome/free-solid-svg-icons";
import { Button } from "ui/components/atoms/button";
import { TodoDispatchContext, TodoStateContext } from "providers/TodoProvider";

export function DetailButton() {
  const { list } = useContext(TodoStateContext);
  const { setTodo } = useContext(TodoDispatchContext);
  const navigate = useNavigate();

  // 詳細を見たいTodoアイテムを絞り込み、詳細画面へ遷移する処理
  function onClickHander(e: React.MouseEvent<HTMLButtonElement>) {
    const findedItem = list.find((item) => {
      const currentTargetItem: HTMLElement | null =
        e.currentTarget.closest("li");
      return item.id === currentTargetItem?.id;
    });
    findedItem && setTodo(findedItem);

    navigate("/detail");
  }

  return (
    <Button
      type="button"
      ariaLabel="詳細情報を確認する"
      onClick={onClickHander}
      className="button-icon"
    >
      <FontAwesomeIcon icon={faNoteSticky} size="1x" />
    </Button>
  );
}
