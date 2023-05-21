import { ChangeEvent } from "react";
import { Input } from "ui/components/atoms/Input";

type Props = {
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
};

export function SearchTodoInput({ setSearchText }: Props) {
  function changeHandler(e: ChangeEvent<HTMLInputElement>) {
    setSearchText(e.currentTarget.value);
  }

  return (
    <Input
      placeholder="Search Keyword"
      onKeyDown={undefined}
      onChange={changeHandler}
    />
  );
}
