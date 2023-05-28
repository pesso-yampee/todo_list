import { TodoProvider } from "providers/TodoProvider";
import { ListPage } from "ui/pages/listPage";

function App() {
  return (
    <TodoProvider>
      <ListPage />
    </TodoProvider>
  );
}

export default App;
