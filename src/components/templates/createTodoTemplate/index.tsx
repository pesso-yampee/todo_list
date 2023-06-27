import { PageTitle } from "components/atoms/pageTitle";
import { NewTodoTitleInput } from "components/molecules/newTodoTitleInput";
import { CreateTodoButton } from "components/molecules/createTodoButton";
import { NewTodoContentInput } from "components/molecules/newTodoContentInput";
import { Navigation } from "components/organisms/navigation";
import styles from "./style.module.css";
import { useState } from "react";

type Props = {
  text: string;
};

export function CreateTodoTemplate({ text }: Props) {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoContent, setTodoContent] = useState("");

  return (
    <div className={styles.container}>
      <Navigation />
      <PageTitle text={text} />
      <div className={styles.contents}>
        <NewTodoTitleInput setTodoTitle={setTodoTitle} todoTitle={todoTitle} />
        <NewTodoContentInput
          setTodoContent={setTodoContent}
          todoContent={todoContent}
        />
        <CreateTodoButton
          todoTitle={todoTitle}
          todoContent={todoContent}
          setTodoTitle={setTodoTitle}
          setTodoContent={setTodoContent}
        />
      </div>
    </div>
  );
}
