import { DeleteButton } from "ui/components/molecules/deleteButton";
import styles from "./style.module.css";

export function TodoItem() {
  return (
    <div className={styles.flexContainer}>
      <span className={styles.text}>aaa</span>
      <DeleteButton />
    </div>
  );
}
