import { v4 as uuidv4 } from "uuid";
import { DeleteButton } from "ui/components/molecules/deleteButton";
import styles from "./style.module.css";

type Props = {
  list: Array<{ text: string }>;
};

export function TodoItem({ list }: Props) {
  return (
    <ul>
      {list.map((item) => (
        <li key={uuidv4()}>
          <div className={styles.flexContainer}>
            <span className={styles.text}>{item.text}</span>
            <DeleteButton />
          </div>
        </li>
      ))}
    </ul>
  );
}
