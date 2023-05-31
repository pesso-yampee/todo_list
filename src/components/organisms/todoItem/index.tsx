import { useContext } from "react";
import { TodoDispatchContext } from "providers/TodoProvider";
import { DeleteButton } from "components/molecules/deleteButton";
import { DetailButton } from "components/molecules/detailButton";
import { EditButton } from "components/molecules/editButton";
import styles from "./style.module.css";

export function TodoItem() {
  const { useInitializeList } = useContext(TodoDispatchContext);
  const list = useInitializeList();

  return (
    <ul className={styles.list}>
      {list.map((item) => (
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
