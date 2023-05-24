import { PageTitle } from "ui/components/atoms/pageTitle";
import { NewTodoInput } from "ui/components/molecules/newTodoInput";
import { SearchTodoInput } from "ui/components/molecules/searchTodoInput";
import { TodoItem } from "ui/components/organisms/todoItem";
import styles from "./style.module.css";
import { useTodo } from "hooks/useTodo";

export function TodoListTemplate() {
  const {
    list,
    searchText,
    useAddToList,
    useSetSearchTodo,
    useDeleteTodo,
    useFilterList,
  } = useTodo();
  
  const filteredList = useFilterList();

  return (
    <div className={styles.container}>
      <PageTitle text="Todo List" />
      <div className={styles.contents}>
        <NewTodoInput useAddToList={useAddToList} />
        <SearchTodoInput useSetSearchTodo={useSetSearchTodo} />
        <TodoItem
          list={searchText === "" ? list : filteredList}
          useDeleteTodo={useDeleteTodo}
        />
      </div>
    </div>
  );
}
