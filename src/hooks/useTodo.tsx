import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TodoType } from "types/todo";
import { v4 as uuidv4 } from "uuid";

export const useTodo = () => {
  // 初期表示で表示させておくダミーデータ
  const initialTodoData = [
    { title: "todo1", content: "todo1", id: "awrsgdhfjghk" },
    { title: "todo2", content: "todo2", id: "oqilukyjfthdgdf" },
  ];

  // Todoリストの設定に関わるstate
  const [list, setList] = useState(initialTodoData);

  // Todoデータの取得に関わるstate
  const [todo, setTodo] = useState({} as TodoType);
  const [editTodo, setEditTodo] = useState({} as TodoType);

  // Todoのタイトルもしくはコンテンツの内容を取得するstate
  const [searchTodoTitle, setSearchTodoTitle] = useState("");
  const [todoTitle, setTodoTitle] = useState("");
  const [todoContent, setTodoContent] = useState("");

  const navigate = useNavigate();

  /**
   * 新規追加・編集系
   */
  // 新規追加・編集するTodoのタイトルを設定する処理
  const useInputTodoTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoTitle(e.currentTarget.value);
  };

  // 新規追加・編集するTodoのコンテンツを設定する処理
  const useInputTodoContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoContent(e.currentTarget.value);
  };

  // Todoを追加する処理
  const useAddToList = () => {
    setList((prevTodos) => {
      return [
        ...prevTodos,
        { title: todoTitle, content: todoContent, id: uuidv4() },
      ];
    });
    navigate("/");

    // Todoを新規追加した際にタイトルフィールドとコンテンフィールドをそれぞれ初期化する処理
    const useInitializeCreateField = () => {
      setTodoTitle("");
      setTodoContent("");
    };
    useInitializeCreateField();
  };

  // 編集したいTodoのタイトルとコンテンツをinputタグのvalue属性に予め設定する処理
  const useSetTodoTitleAndContentIntoField = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    const item = getTodoWantToEdit(e);
    const title = item?.title;
    const content = item?.content;

    title && setTodoTitle(title);
    content && setTodoContent(content);

    navigate("/edit");

    // 編集したいTodoを取得する処理
    function getTodoWantToEdit(e: React.MouseEvent<HTMLButtonElement>) {
      const currentTarget: EventTarget & HTMLButtonElement = e.currentTarget;
      const todoItem: HTMLLIElement | null = currentTarget.closest("li");

      if (todoItem === null) return;

      const todoItemId: string = todoItem.id;
      const result: TodoType | undefined = list.find((item) => {
        return item.id === todoItemId;
      });

      result && setEditTodo(result);
      return result;
    }
  };

  // 編集内容を更新する処理
  const useUpdateTodo = () => {
    editTodo.title = todoTitle;
    editTodo.content = todoContent;
    navigate("/");
  };

  /**
   * 検索系
   */
  // 検索するTodoを設定する処理
  const useSetSearchTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTodoTitle(e.currentTarget.value);
  };

  // Todoをフィルタリングする処理
  const useFilterList = () => {
    const result = list.filter((item) => {
      return item.title?.includes(searchTodoTitle);
    });
    return result;
  };

  // リストを初期化する処理
  const useInitializeList = () => {
    const filteredList = useFilterList();
    return searchTodoTitle === "" ? list : filteredList;
  };

  // 詳細を見たいTodoアイテムを絞り込む処理
  const useFindTodoDetail = (e: React.MouseEvent<HTMLButtonElement>) => {
    const findedItem = list.find((item) => {
      return item.id === e.currentTarget.id;
    });
    findedItem && setTodo(findedItem);
  };

  /**
   * 削除系
   */
  // Todoを削除する処理
  const useDeleteTodo = (e: React.MouseEvent<HTMLButtonElement>) => {
    const currentTarget: EventTarget & HTMLButtonElement = e.currentTarget;
    const todoItem: HTMLLIElement | null = currentTarget.closest("li");
    const todoItemId: string | undefined = todoItem?.id;
    const res: boolean = window.confirm(
      `タスク「${todoItem?.textContent}」を本当に削除しますか？`
    );

    if (res) {
      setList((prevTodos) =>
        prevTodos.filter((item) => {
          return item.id !== todoItemId;
        })
      );
    }
  };

  return {
    list,
    searchTodoTitle,
    todo,
    todoTitle,
    todoContent,
    setTodo,
    useInputTodoTitle,
    useInputTodoContent,
    useAddToList,
    useSetSearchTodo,
    useDeleteTodo,
    useFilterList,
    useInitializeList,
    useFindTodoDetail,
    useSetTodoTitleAndContentIntoField,
    useUpdateTodo,
  };
};
