import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { Button } from "components/atoms/button";
import { useRouter } from "next/router";
import { useContext } from "react";
import { TodoDispatchContext } from "providers/TodoProvider";
import { PAGE_PATH } from "constants/pagePath";

export function EditButton() {
  const router = useRouter();
  const { findTodoById, setTodoTitle, setTodoContent } =
    useContext(TodoDispatchContext);

  function onClickHander(e: React.MouseEvent<HTMLButtonElement>) {
    const id = e.currentTarget.closest('li')?.id;
    const item = findTodoById(e);
    const title = item?.title;
    const content = item?.content;

    title && setTodoTitle(title);
    content && setTodoContent(content);

    id && router.push(`${PAGE_PATH.EDIT}${id}`);
  }

  return (
    <Button
      type="button"
      ariaLabel="編集する"
      onClick={onClickHander}
      className="button-icon"
    >
      <FontAwesomeIcon icon={faEdit} size="1x" />
    </Button>
  );
}
