import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { TodoProvider } from "providers/TodoProvider";
import { CreateTodoPage } from "ui/pages/createTodoPage";
import { DetailTodoPage } from "ui/pages/detailTodoPage";
import { EditTodoPage } from "ui/pages/editTodoPage";
import { ListPage } from "ui/pages/listPage";

export function RouteComponent() {
  return (
    <Router>
      <TodoProvider>
        <Routes>
          <Route path="/" element={<ListPage />} />
          <Route path="/create" element={<CreateTodoPage />} />
          <Route path="/detail" element={<DetailTodoPage />} />
          <Route path="/edit" element={<EditTodoPage />} />
        </Routes>
      </TodoProvider>
    </Router>
  );
}