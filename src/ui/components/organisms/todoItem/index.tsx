import { DeleteButton } from "ui/components/molecules/deleteButton";
import styles from "./style.module.css";

type Props = {
  list: Array<{ text: string; id: string }>;
  useDeleteTodo: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export function TodoItem({ list, useDeleteTodo }: Props) {
  return (
    <ul className={styles.list}>
      {list.map((item) => (
        <li key={item.id} id={item.id}>
          <div className={styles.flexContainer}>
            <span className={styles.text}>{item.text}</span>
            <DeleteButton useDeleteTodo={useDeleteTodo} />
          </div>
        </li>
      ))}
    </ul>
  );
}
