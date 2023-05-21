import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Button } from "ui/components/atoms/button";

type Props = {
  setList: React.Dispatch<
    React.SetStateAction<
      {
        text: string;
        id: string;
      }[]
    >
  >;
};

export function DeleteButton({ setList }: Props) {
  function deleteTodo(e: React.MouseEvent<HTMLButtonElement>) {
    const currentTarget: EventTarget & HTMLButtonElement = e.currentTarget;
    const todoItem: HTMLLIElement | null = currentTarget.closest("li");
    const todoItemId: string | undefined = todoItem?.id;
    const res: boolean = window.confirm("本当に削除しますか？");

    if (res) {
      setList((prevTodos) =>
        prevTodos.filter((item) => {
          return item.id !== todoItemId;
        })
      );
    }
  }

  return (
    <Button type="button" ariaLabel="delete the todo item" onClick={deleteTodo}>
      <FontAwesomeIcon icon={faTrash} size="1x" />
    </Button>
  );
}
