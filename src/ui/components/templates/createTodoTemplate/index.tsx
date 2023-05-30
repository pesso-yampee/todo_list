import { PageTitle } from "ui/components/atoms/pageTitle";
import { NewTodoTitleInput } from "ui/components/molecules/newTodoTitleInput";
import { CreateTodoButton } from "ui/components/molecules/createTodoButton";
import { NewTodoContentInput } from "ui/components/molecules/newTodoContentInput";
import { Navigation } from "ui/components/organisms/navigation";
import styles from "./style.module.css";

type Props = {
  text: string;
};

export function CreateTodoTemplate({ text }: Props) {
  return (
    <div className={styles.container}>
      <Navigation />
      <PageTitle text={text} />
      <div className={styles.contents}>
        <NewTodoTitleInput />
        <NewTodoContentInput />
        <CreateTodoButton />
      </div>
    </div>
  );
}
