import { KeyboardEvent } from "react";
import { Input } from "ui/components/atoms/Input";
type Props = {
  setList: React.Dispatch<
    React.SetStateAction<
      {
        text: string;
      }[]
    >
  >;
};

export function NewTodoInput({ setList }: Props) {
  function addToList(e: KeyboardEvent<HTMLInputElement>) {
    let value = "";

    if (e.code === "Enter") {
      value = e.currentTarget.value;
      setList((prevTodos) => {
        return [...prevTodos, { text: value }];
      });
    }
  }

  return <Input placeholder="New Todo" keyDownEvent={addToList} changeEvent={undefined} />;
}
