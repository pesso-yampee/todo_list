import { useState } from "react";
import { PageTitle } from "ui/components/atoms/pageTitle";
import { NewTodoInput } from "ui/components/molecules/newTodoInput";
import { SearchTodoInput } from "ui/components/molecules/searchTodoInput";
import { TodoItem } from "ui/components/organisms/todoItem";
import styles from "./style.module.css";

type TodoProps = {
  text: string;
}

export function ListPage() {
  const [list, setList] = useState<TodoProps[]>([]);
  return (
    <div className={styles.container}>
      <PageTitle text="Todo List" />
      <div className={styles.contents}>
        <NewTodoInput setList={setList} />
        <SearchTodoInput />
        <TodoItem list={list} />
      </div>
    </div>
  );
}
