import { CreateTodoTemplate } from "components/templates/createTodoTemplate";
import { TodoProvider } from "providers/TodoProvider";

export default function Create() {
  return (
    <TodoProvider>
      <CreateTodoTemplate text="Add New" />
    </TodoProvider>
  );
}
