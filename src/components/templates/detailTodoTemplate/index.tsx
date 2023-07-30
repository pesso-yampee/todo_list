import { PageTitle } from "components/atoms/PageTitle";
import { Navigation } from "components/organisms/navigation";
import { useRecoilValue } from "recoil";
import styles from "./style.module.css";
import { TodoContentsAtom, TodoTitleAtom } from "states/TodoState";

type Props = {
  text: string;
};

export function DetailTodoTemplate({ text }: Props) {
  const todoContent = useRecoilValue(TodoContentsAtom);
  const todoTitle = useRecoilValue(TodoTitleAtom);

  return (
    <div className={styles.container}>
      <Navigation />
      <PageTitle text={text} />
      <div className={styles.contents}>
        <div className={styles.title}>
          <span>{todoTitle}</span>
        </div>
        <div className={styles.content}>
          <p>{todoContent}</p>
        </div>
      </div>
    </div>
  );
}
