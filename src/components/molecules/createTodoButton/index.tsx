import { Button } from "components/atoms/button";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";
import { PAGE_PATH } from "constants/pagePath";
import { Dispatch, SetStateAction } from "react";
import { useSetRecoilState } from "recoil";
import { TodoListAtom } from "states/TodoState";

type Props = {
  todoTitle: string | null;
  todoContent: string | null;
  setTodoTitle: Dispatch<SetStateAction<string>>;
  setTodoContent: Dispatch<SetStateAction<string>>;
};

export function CreateTodoButton({
  todoTitle,
  todoContent,
  setTodoTitle,
  setTodoContent,
}: Props) {
  const router = useRouter();
  const setTodoList = useSetRecoilState(TodoListAtom);

  const addTodoHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!todoTitle || !todoContent) {
      window.alert("タイトルもしくはコンテンツが未入力です。");
      return false;
    }
    
    setTodoList((prevTodos) => {
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
    <Button onClick={addTodoHandler} className="button-primary">
      <span>Create Todo</span>
    </Button>
  );
}
