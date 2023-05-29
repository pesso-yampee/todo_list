import { useContext } from "react";
import { TodoDispatchContext } from "providers/TodoProvider";
import { Input } from "ui/components/atoms/Input";

export function NewTodoInput() {
  const { useAddToList } = useContext(TodoDispatchContext);
  
  return (
    <Input
      placeholder="New Todo"
      onKeyDown={useAddToList}
      onChange={undefined}
    />
  );
}
