import { PageTitle } from "components/atoms/pageTitle";
import { NewTodoTitleInput } from "components/molecules/newTodoTitleInput";
import { CreateTodoButton } from "components/molecules/createTodoButton";
import { NewTodoContentInput } from "components/molecules/newTodoContentInput";
import { Navigation } from "components/organisms/navigation";
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
