import { Input } from "components/atoms/Input";
import { Dispatch, SetStateAction } from "react";

type Props = {
  todoTitle: string;
  setTodoTitle: Dispatch<SetStateAction<string>>;
};

export function NewTodoTitleInput({ setTodoTitle, todoTitle }: Props) {
  /**
   * Todoのタイトルを設定
   * @param e
   */
  const inputTodoTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoTitle(e.currentTarget.value);
  };

  return (
    <Input
      placeholder="Title"
      onChange={inputTodoTitle}
      name="title"
      value={todoTitle}
    />
  );
}
