import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

type TodoProps = {
  text: string;
  id: string;
};

export const useTodo = () => {
  const [list, setList] = useState<TodoProps[]>([]);
  const [searchText, setSearchText] = useState<string>("");

  // Todoを追加する処理
  const useAddToList = (e: React.KeyboardEvent<HTMLInputElement>) => {
    let value: string = "";

    // テキスト変換システムが動作中（日本語モード中）で、かつEnterキーを入力した場合は処理を何もせずに返す。
    if (e.nativeEvent.isComposing && e.code === "Enter") {
      return;
    } else if (e.code === "Enter") {
      value = e.currentTarget.value;
      setList((prevTodos) => {
        return [...prevTodos, { text: value, id: uuidv4() }];
      });
    }
  };

  // 検索するTodoを設定する処理
  const useSetSearchTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.currentTarget.value);
  };

  // Todoを削除する処理
  const useDeleteTodo = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const currentTarget: EventTarget & HTMLButtonElement = e.currentTarget;
    const todoItem: HTMLLIElement | null = currentTarget.closest("li");
    const todoItemId: string | undefined = todoItem?.id;
    const res: boolean = window.confirm(`タスク「${todoItem?.textContent}」を本当に削除しますか？`);

    if (res) {
      setList((prevTodos) =>
        prevTodos.filter((item) => {
          return item.id !== todoItemId;
        })
      );
    }
  };

  // Todoをフィルタリングする処理
  const useFilterList = () => {
    const result: TodoProps[] = list.filter((item) => {
      return item.text.includes(searchText);
    });
    return result;
  };

  return {
    list,
    searchText,
    useAddToList,
    useSetSearchTodo,
    useDeleteTodo,
    useFilterList,
  };
}