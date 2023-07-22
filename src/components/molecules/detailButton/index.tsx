import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNoteSticky } from "@fortawesome/free-solid-svg-icons";
import { Button } from "components/atoms/button";
import { useRouter } from "next/router";
import { PAGE_PATH } from "constants/pagePath";
import { TodoType } from "types/todo";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  TodoContentsAtom,
  TodoListAtom,
  TodoTitleAtom,
} from "states/TodoState";

export function DetailButton() {
  const router = useRouter();
  const setTodoTitle = useSetRecoilState<string>(TodoTitleAtom);
  const setTodoContent = useSetRecoilState<string>(TodoContentsAtom);
  const todoList = useRecoilValue<TodoType[]>(TodoListAtom);

  const transitionDetailTodoPage = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = e.currentTarget.closest("li")?.id;

    // idが存在しない場合：後続処理を実行しない
    if (!id) {
      console.error("idが存在しませんでした。");
      return false;
    }

    const item = todoList.find((item) => item.id === id);

    if (item) {
      setTodoTitle(item.title);
      setTodoContent(item.contents);
    }

    router.push(`${PAGE_PATH.DETAIL}${id}`);
  };

  return (
    <Button
      ariaLabel="TODOの詳細情報を確認する"
      onClick={transitionDetailTodoPage}
      className="button-icon"
    >
      <FontAwesomeIcon icon={faNoteSticky} size="1x" />
    </Button>
  );
}
