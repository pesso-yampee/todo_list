import { Input } from "components/atoms/Input";
import { useRecoilState } from "recoil";
import { TodoContentAtom } from "states/TodoState";

export function EditTodoContentInput() {
  const [todoContent, setTodoContent] = useRecoilState(TodoContentAtom);

  /**
   * Todoのコンテンツを設定
   * @param e
   */
  const inputTodoContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoContent(e.currentTarget.value);
  };

  return (
    <Input onChange={inputTodoContent} name="content" value={todoContent} />
  );
}
