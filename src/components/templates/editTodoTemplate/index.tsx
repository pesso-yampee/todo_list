import { PageTitle } from "components/atoms/pageTitle";
import { Navigation } from "components/organisms/navigation";
import { EditTodoTitleInput } from "components/molecules/editTodoTitleInput";
import { EditTodoContentInput } from "components/molecules/editTodoContentInput";
import { EditCompleteButton } from "components/molecules/editCompleteButton";
import styles from "./style.module.css";

type Props = {
  text: string;
};

export function EditTodoTemplate({ text }: Props) {
  return (
    <div className={styles.container}>
      <Navigation />
      <PageTitle text={text} />
      <div className={styles.contents}>
        <EditTodoTitleInput />
        <EditTodoContentInput />
        <EditCompleteButton />
      </div>
    </div>
  );
}
