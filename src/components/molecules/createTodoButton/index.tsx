import { TodoDispatchContext, TodoStateContext } from "providers/TodoProvider";
import { useContext } from "react";
import { Button } from "components/atoms/button";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";
import { PAGE_PATH } from "constants/pagePath";

export function CreateTodoButton() {
  const { todoTitle, todoContent } = useContext(TodoStateContext);
  const { setList, setTodoTitle, setTodoContent } =
    useContext(TodoDispatchContext);
  const router = useRouter();

  const addTodo = () => {
    setList((prevTodos) => {
      return [
        ...prevTodos,
        { title: todoTitle, content: todoContent, id: uuidv4() },
      ];
    });
    
    router.push(PAGE_PATH.TOP);

    // フィールドを初期化
    setTodoTitle("");
    setTodoContent("");
  };

  return (
    <Button
      type="button"
      ariaLabel=""
      onClick={addTodo}
      className="button-primary"
    >
      <span>Create Todo</span>
    </Button>
  );
}
