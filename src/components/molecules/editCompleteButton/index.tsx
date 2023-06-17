import { Button } from "components/atoms/button";
import { useRouter } from "next/router";
import { TodoDispatchContext, TodoStateContext } from "providers/TodoProvider";
import { useContext } from "react";

export function EditCompleteButton() {
  const router = useRouter();
  const { setTodoTitle, setTodoContent } = useContext(TodoDispatchContext);
  const { todoData, todoTitle, todoContent } = useContext(TodoStateContext);

  const updateTodoDataHandler = () => {
    todoData.title = todoTitle;
    todoData.content = todoContent;

    router.push("/");

    setTodoTitle("");
    setTodoContent("");
  };

  return (
    <Button
      type="button"
      ariaLabel=""
      onClick={updateTodoDataHandler}
      className="button-primary"
    >
      <span>Edit Todo</span>
    </Button>
  );
}
