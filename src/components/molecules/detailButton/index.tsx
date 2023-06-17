import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNoteSticky } from "@fortawesome/free-solid-svg-icons";
import { Button } from "components/atoms/button";
import { useRouter } from "next/router";
import { useContext } from "react";
import { TodoDispatchContext } from "providers/TodoProvider";
import { PAGE_PATH } from "constants/pagePath";

export function DetailButton() {
  const router = useRouter();
  const { findTodoById } = useContext(TodoDispatchContext);
  
  function onClickHandler(e: React.MouseEvent<HTMLButtonElement>) {
    const id = e.currentTarget.closest('li')?.id;
    
    findTodoById(e);
    id && router.push(`${PAGE_PATH.DETAIL}${id}`);
  }
  
  return (
    <Button
      type="button"
      ariaLabel="詳細情報を確認する"
      onClick={onClickHandler}
      className="button-icon"
    >
      <FontAwesomeIcon icon={faNoteSticky} size="1x" />
    </Button>
  );
}
