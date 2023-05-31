import { useContext } from "react";
import { TodoStateContext } from "providers/TodoProvider";
import { PageTitle } from "components/atoms/pageTitle";
import { Navigation } from "components/organisms/navigation";
import styles from "./style.module.css";

type Props = {
  text: string;
};

export function DetailTodoTemplate({ text }: Props) {
  const { todo } = useContext(TodoStateContext);

  return (
    <div className={styles.container}>
      <Navigation />
      <PageTitle text={text} />
      <div className={styles.contents}>
        <div className={styles.title}>
          <span>{todo.title}</span>
        </div>
        <div className={styles.content}>
          <p>{todo.content}</p>
        </div>
      </div>
    </div>
  );
}
