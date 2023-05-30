import { useContext } from "react";
import { TodoDispatchContext } from "providers/TodoProvider";
import { DeleteButton } from "ui/components/molecules/deleteButton";
import { DetailButton } from "ui/components/molecules/detailButton";
import { EditButton } from "ui/components/molecules/editButton";
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
