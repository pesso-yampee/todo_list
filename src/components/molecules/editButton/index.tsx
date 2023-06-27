import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { Button } from "components/atoms/button";
import { useRouter } from "next/router";
import { PAGE_PATH } from "constants/pagePath";
import { TodoType } from "types/todo";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  TodoContentAtom,
  TodoIdAtom,
  TodoListAtom,
  TodoTitleAtom,
} from "states/TodoState";

export function EditButton() {
  const router = useRouter();
  const setTodoTitle = useSetRecoilState<string>(TodoTitleAtom);
  const setTodoContent = useSetRecoilState<string>(TodoContentAtom);
  const setTodoId = useSetRecoilState<string>(TodoIdAtom);
  const todoList = useRecoilValue<TodoType[]>(TodoListAtom);

  const transitionEditTodoPage = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = e.currentTarget.closest("li")?.id;
    
    // idが存在しない場合：後続処理を実行しない
    if (!id) {
      window.alert("idが存在しませんでした。");
      return false;
    }
    
    const item = todoList.find((item) => item.id === id);
    
    if (item) {
      setTodoId(item.id);
      setTodoTitle(item.title);
      setTodoContent(item.content);
    }

    router.push(`${PAGE_PATH.EDIT}${id}`);
  };

  return (
    <Button
      ariaLabel="TODOを編集する"
      onClick={transitionEditTodoPage}
      className="button-icon"
    >
      <FontAwesomeIcon icon={faEdit} size="1x" />
    </Button>
  );
}
