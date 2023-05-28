import { DeleteButton } from "ui/components/molecules/deleteButton";
import { useTodo } from "hooks/useTodo";
import styles from "./style.module.css";

export function TodoItem() {
  const { useInitializeList } = useTodo();
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
