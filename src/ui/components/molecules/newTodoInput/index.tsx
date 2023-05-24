import { Input } from "ui/components/atoms/Input";

type Props = {
  useAddToList: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

export function NewTodoInput({ useAddToList }: Props) {
  return (
    <Input
      placeholder="New Todo"
      onKeyDown={useAddToList}
      onChange={undefined}
    />
  );
}
