import { PageTitle } from "components/atoms/pageTitle";
import { TodoItem } from "components/organisms/todoItem";
import { Navigation } from "components/organisms/navigation";
import styles from "./style.module.css";
import React, { useState } from "react";
import { TodoType } from "types/todo";
import { Input } from "components/atoms/Input";
import useSWR from "swr";
import { apiInstance } from "constants/apiInstance";

type Props = {
  text: string;
};

export function ListTemplate({ text }: Props) {
  const [todoTitle, setTodoTitle] = useState("");
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoTitle(e.currentTarget.value);
  };

  const fetcher = async (url: string) => {
    try {
      const res = await apiInstance.get(url);
      return res.data;
    } catch (error) {
      window.alert(error);
    }
  };

  const { data } = useSWR("/task", fetcher);

  /**
   * 前方一致検索でヒットしたTodoを新しいリストとして返す処理
   */
  const searchPrefixMatchTodoList = () => {
    const result: TodoType[] = data.filter((item: TodoType) => {
      return item.title?.startsWith(todoTitle);
    });

    return result;
  };

  if (data) {
    return (
      <div className={styles.container}>
        <Navigation />
        <PageTitle text={text} />
        <div className={styles.contents}>
          <Input placeholder="Title" onChangeHandler={onChangeHandler} />
          <TodoItem list={data} />
        </div>
      </div>
    );
  } else {
    <div>
      <p>データがありません。</p>
    </div>;
  }
}
