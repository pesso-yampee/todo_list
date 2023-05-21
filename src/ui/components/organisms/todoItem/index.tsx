import { DeleteButton } from "ui/components/molecules/deleteButton";
import styles from "./style.module.css";

type Props = {
  list: Array<{ text: string; id: string }>;
  setList: React.Dispatch<
    React.SetStateAction<
      {
        text: string;
        id: string;
      }[]
    >
  >;
};

export function TodoItem({ list, setList }: Props) {
  return (
    <ul className={styles.list}>
      {list.map((item) => (
        <li key={item.id} id={item.id}>
          <div className={styles.flexContainer}>
            <span className={styles.text}>{item.text}</span>
            <DeleteButton setList={setList} />
          </div>
        </li>
      ))}
    </ul>
  );
}
