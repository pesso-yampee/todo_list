import { TodoProvider } from "providers/TodoProvider";
import { EditTodoTemplate } from "components/templates/editTodoTemplate";

export default function Edit() {
  return (
    <TodoProvider>
      <EditTodoTemplate text="TodoEdit" />
    </TodoProvider>
  );
}
