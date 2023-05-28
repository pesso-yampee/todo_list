import { PageTitle } from "ui/components/atoms/pageTitle";
import { NewTodoInput } from "ui/components/molecules/newTodoInput";
import { SearchTodoInput } from "ui/components/molecules/searchTodoInput";
import { TodoItem } from "ui/components/organisms/todoItem";
import styles from "./style.module.css";

export function TodoListTemplate() {
  return (
    <div className={styles.container}>
      <PageTitle text="Todo List" />
      <div className={styles.contents}>
        <NewTodoInput />
        <SearchTodoInput />
        <TodoItem />
      </div>
    </div>
  );
}
