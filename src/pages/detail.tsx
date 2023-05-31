import { TodoProvider } from "providers/TodoProvider";
import { DetailTodoTemplate } from "components/templates/detailTodoTemplate";

export default function Detail() {
  return (
    <TodoProvider>
      <DetailTodoTemplate text="TodoDetail" />
    </TodoProvider>
  );
}
