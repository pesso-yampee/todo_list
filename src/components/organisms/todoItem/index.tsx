import { useCallback, useContext } from "react";
import { TodoStateContext } from "providers/TodoProvider";
import { DeleteButton } from "components/molecules/deleteButton";
import { DetailButton } from "components/molecules/detailButton";
import { EditButton } from "components/molecules/editButton";
import styles from "./style.module.css";
import { TodoType } from "types/todo";

export const TodoItem = () => {
  const {list, searchTodoTitle} = useContext(TodoStateContext);
  /**
   * 前方一致検索でヒットしたTodoを新しいリストとして返す処理
   *
   */
  const searchPrefixMatchTodoList = useCallback(() => {
    const result = list.filter((item) => {
      return item.title?.startsWith(searchTodoTitle);
    });
    return result;
  }, [list, searchTodoTitle]);

  // リストを初期化する処理
  const initializeList = () => {
    console.log(searchPrefixMatchTodoList());
    const searchedTodoList: TodoType[] = searchPrefixMatchTodoList();
    return searchTodoTitle === "" ? list : searchedTodoList;
  };

  const list1 = initializeList();

  return (
    <ul className={styles.list}>
      {list1.map((item) => (
        <li key={item.id} id={item.id}>
          <div className={styles.itemContainer}>
            <span className={styles.text}>{item.title}</span>
            <div className={styles.btnContainer}>
              <DetailButton />
              <EditButton />
              <DeleteButton />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
