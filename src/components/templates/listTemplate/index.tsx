import { PageTitle } from "components/atoms/pageTitle";
import { SearchTodoInput } from "components/molecules/searchTodoInput";
import { TodoItem } from "components/organisms/todoItem";
import { Navigation } from "components/organisms/navigation";
import styles from "./style.module.css";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { TodoListAtom } from "states/TodoState";
import { TodoType } from "types/todo";

type Props = {
  text: string;
};

export function ListTemplate({ text }: Props) {
  const [todoTitle, setTodoTitle] = useState("");
  const todoList = useRecoilValue(TodoListAtom);

  /**
   * 前方一致検索でヒットしたTodoを新しいリストとして返す処理
   */
  const searchPrefixMatchTodoList = () => {
    const result: TodoType[] = todoList.filter((item) => {
      return item.title?.startsWith(todoTitle);
    });

    return result;
  };

  const list = searchPrefixMatchTodoList();

  return (
    <div className={styles.container}>
      <Navigation />
      <PageTitle text={text} />
      <div className={styles.contents}>
        <SearchTodoInput setTodoTitle={setTodoTitle} />
        <TodoItem list={list} />
      </div>
    </div>
  );
}
