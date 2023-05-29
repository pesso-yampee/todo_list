import { useContext } from "react";
import { DeleteButton } from "ui/components/molecules/deleteButton";
import styles from "./style.module.css";
import { TodoDispatchContext } from "providers/TodoProvider";

export function TodoItem() {
  const { useInitializeList } = useContext(TodoDispatchContext);
  const list = useInitializeList();

  return (
    <ul className={styles.list}>
      {list.map((item) => (
        <li key={item.id} id={item.id}>
          <div className={styles.flexContainer}>
            <span className={styles.text}>{item.text}</span>
            <DeleteButton />
          </div>
        </li>
      ))}
    </ul>
  );
}
