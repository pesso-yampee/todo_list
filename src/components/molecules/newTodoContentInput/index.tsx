import { Input } from "components/atoms/Input";
import { Dispatch, SetStateAction } from "react";

type Props = {
  setTodoContent: Dispatch<SetStateAction<string>>;
  todoContent: string;
};

export function NewTodoContentInput({ setTodoContent, todoContent }: Props) {
  /**
   * Todoのコンテンツを設定
   * @param e
   */
  const inputTodoContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoContent(e.currentTarget.value);
  };

  return (
    <Input
      placeholder="Content"
      onChange={inputTodoContent}
      name="content"
      value={todoContent}
    />
  );
}
