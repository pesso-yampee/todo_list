import { useTodo } from "hooks/useTodo";
import { Input } from "ui/components/atoms/Input";

export function NewTodoInput() {
  const { useAddToList } = useTodo();
  
  return (
    <Input
      placeholder="New Todo"
      onKeyDown={useAddToList}
      onChange={undefined}
    />
  );
}
