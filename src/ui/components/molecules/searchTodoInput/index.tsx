import { Input } from "ui/components/atoms/Input";

type Props = {
  useSetSearchTodo: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function SearchTodoInput({ useSetSearchTodo }: Props) {
  return (
    <Input
      placeholder="Search Keyword"
      onKeyDown={undefined}
      onChange={useSetSearchTodo}
    />
  );
}
