import { KeyboardEvent } from "react";
import { v4 as uuidv4 } from "uuid";
import { Input } from "ui/components/atoms/Input";
type Props = {
  setList: React.Dispatch<
    React.SetStateAction<
      {
        text: string;
        id: string;
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
        return [...prevTodos, { text: value, id: uuidv4() }];
      });
    }
  }

  return (
    <Input
      placeholder="New Todo"
      keyDownEvent={addToList}
      changeEvent={undefined}
    />
  );
}
