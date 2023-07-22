import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { Button } from "components/atoms/button";
import { useRouter } from "next/router";
import { PAGE_PATH } from "constants/pagePath";
import { TodoType } from "types/todo";
import { useSetRecoilState } from "recoil";
import { TodoContentsAtom, TodoIdAtom, TodoTitleAtom } from "states/TodoState";

type Props = {
  list: TodoType[];
};

export function EditButton({ list }: Props) {
  const router = useRouter();
  const setTodoTitle = useSetRecoilState<string>(TodoTitleAtom);
  const setTodoContent = useSetRecoilState<string>(TodoContentsAtom);
  const setTodoId = useSetRecoilState<string>(TodoIdAtom);

  const handleOnClickSetTodoInfo = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = e.currentTarget.closest("li")?.id;

    // idが存在しない場合：後続処理を実行しない
    if (!id) {
      window.alert("idが存在しませんでした。");
      return false;
    }

    const item = list.find((item) => item.id === id);

    if (item) {
      setTodoId(item.id);
      setTodoTitle(item.title);
      setTodoContent(item.contents);
    }

    router.push(`${PAGE_PATH.EDIT}${id}`);
  };

  return (
    <Button
      ariaLabel="TODOを編集する"
      onClick={handleOnClickSetTodoInfo}
      className="button-icon"
    >
      <FontAwesomeIcon icon={faEdit} size="1x" />
    </Button>
  );
}
