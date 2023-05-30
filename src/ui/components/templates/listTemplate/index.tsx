import { PageTitle } from "ui/components/atoms/pageTitle";
import { SearchTodoInput } from "ui/components/molecules/searchTodoInput";
import { TodoItem } from "ui/components/organisms/todoItem";
import { Navigation } from "ui/components/organisms/navigation";
import styles from "./style.module.css";

type Props = {
  text: string;
};

export function ListTemplate({ text }: Props) {
  return (
    <div className={styles.container}>
      <Navigation />
      <PageTitle text={text} />
      <div className={styles.contents}>
        <SearchTodoInput />
        <TodoItem />
      </div>
    </div>
  );
}
