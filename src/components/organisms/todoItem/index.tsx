import { DeleteButton } from "components/molecules/DeleteButton";
import { DetailButton } from "components/molecules/DetailButton";
import { EditButton } from "components/molecules/EditButton";
import styles from "./style.module.css";
import { TodoType } from "types/todo";

type Props = {
  list: TodoType[];
};

export const TodoItem = ({ list }: Props) => {
  return (
    <ul className={styles.list}>
      {list.map((item) => (
        <li key={item.id} id={item.id}>
          <div className={styles.itemContainer}>
            <span className={styles.text}>{item.title}</span>
            <div className={styles.btnContainer}>
              <DetailButton />
              <EditButton list={list} />
              <DeleteButton />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
