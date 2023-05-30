import { PageTitle } from "ui/components/atoms/pageTitle";
import { Navigation } from "ui/components/organisms/navigation";
import { EditTodoTitleInput } from "ui/components/molecules/editTodoTitleInput";
import { EditTodoContentInput } from "ui/components/molecules/editTodoContentInput";
import { EditCompleteButton } from "ui/components/molecules/editCompleteButton";
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
