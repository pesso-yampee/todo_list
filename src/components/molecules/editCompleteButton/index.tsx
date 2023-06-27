import { Button } from "components/atoms/button";
import { PAGE_PATH } from "constants/pagePath";
import { useRouter } from "next/router";
import {
  TodoContentAtom,
  TodoIdAtom,
  TodoTitleAtom,
  UpdateEditedTodoSelector,
} from "states/TodoState";
import { useRecoilValue, useSetRecoilState } from "recoil";

export function EditCompleteButton() {
  const router = useRouter();
  const todoId = useRecoilValue<string>(TodoIdAtom);
  const setTodoContent = useSetRecoilState<string>(TodoContentAtom);
  const setTodoTitle = useSetRecoilState<string>(TodoTitleAtom);
  const setUpdateTodoIsEdited = useSetRecoilState(UpdateEditedTodoSelector);

  const completeEditTodo = () => {
    setUpdateTodoIsEdited(todoId);

    router.push(PAGE_PATH.TOP);

    setTodoTitle("");
    setTodoContent("");
  };

  return (
    <Button onClick={completeEditTodo} className="button-primary">
      <span>Edit Todo</span>
    </Button>
  );
}
