import { Input } from "components/atoms/Input";
import { useRecoilState } from "recoil";
import { TodoTitleAtom } from "states/TodoState";

export function EditTodoTitleInput() {
  const [todoTitle, setTodoTitle] = useRecoilState(TodoTitleAtom);

  /**
   * Todoのタイトルを設定
   * @param e
   */
  const inputTodoTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoTitle(e.currentTarget.value);
  };

  return <Input onChange={inputTodoTitle} name="content" value={todoTitle} />;
}
