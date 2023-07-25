import { PageTitle } from "components/atoms/pageTitle";
import { TodoItem } from "components/organisms/todoItem";
import { Navigation } from "components/organisms/navigation";
import styles from "./style.module.css";
import React, { useState } from "react";
import { Input } from "components/atoms/Input";
import useSWR from "swr";
import { apiClient } from "constants/apiClient";

type Props = {
  text: string;
};

export function ListTemplate({ text }: Props) {
  const fetcher = async (url: string) => {
    try {
      const res = await apiClient.get(url);
      return res.data;
    } catch (error) {
      window.alert(error);
    }
  };

  const { data } = useSWR("/task", fetcher);

  if (data) {
    return (
      <div className={styles.container}>
        <Navigation />
        <PageTitle text={text} />
        <div className={styles.contents}>
          <TodoItem list={data} />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <p>データがありません。</p>
      </div>
    );
  }
}
