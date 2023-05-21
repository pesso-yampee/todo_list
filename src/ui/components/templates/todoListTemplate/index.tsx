import { useState } from "react";
import { PageTitle } from "ui/components/atoms/pageTitle";
import { NewTodoInput } from "ui/components/molecules/newTodoInput";
import { SearchTodoInput } from "ui/components/molecules/searchTodoInput";
import { TodoItem } from "ui/components/organisms/todoItem";
import styles from "./style.module.css";

type TodoProps = {
  text: string;
  id: string;
};

export function TodoListTemplate() {
  const [list, setList] = useState<TodoProps[]>([]);
  const [searchText, setSearchText] = useState<string>("");

  const filterList = (() => {
    const result: TodoProps[] = list.filter((item) => {
      return item.text.includes(searchText);
    });
    return result;
  })();

  return (
    <div className={styles.container}>
      <PageTitle text="Todo List" />
      <div className={styles.contents}>
        <NewTodoInput setList={setList} />
        <SearchTodoInput setSearchText={setSearchText} />
        <TodoItem
          list={searchText === "" ? list : filterList}
          setList={setList}
        />
      </div>
    </div>
  );
}
