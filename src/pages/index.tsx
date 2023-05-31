import { TodoProvider } from "providers/TodoProvider";
import { ListTemplate } from "components/templates/listTemplate";

export default function List() {
  return (
    <TodoProvider>
      <ListTemplate text="TodoList" />
    </TodoProvider>
  );
}
