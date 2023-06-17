import React, {
  ReactNode,
  createContext,
  Dispatch,
  SetStateAction,
  ChangeEvent,
  MouseEvent,
  useState,
} from "react";
import { TodoType } from "types/todo";

type TodoStateProps = {
  list: TodoType[];
  searchTodoTitle: string;
  todoData: TodoType;
  todoTitle: string;
  todoContent: string;
};

type TodoDispatchProps = {
  setList: Dispatch<
    SetStateAction<
      {
        title: string;
        content: string;
        id: string;
      }[]
    >
  >;
  setTodoData: Dispatch<SetStateAction<TodoType>>;
  setTodoTitle: Dispatch<SetStateAction<string>>;
  setSearchTodoTitle: Dispatch<SetStateAction<string>>;
  setTodoContent: Dispatch<SetStateAction<string>>;
  inputTodoTitle: (e: ChangeEvent<HTMLInputElement>) => void;
  inputTodoContent: (e: ChangeEvent<HTMLInputElement>) => void;
  findTodoById: (
    e: MouseEvent<HTMLButtonElement>
  ) => TodoType | null | undefined;
};

type ComponentProps = {
  children: ReactNode;
};

export const TodoStateContext = createContext({} as TodoStateProps);
export const TodoDispatchContext = createContext({} as TodoDispatchProps);

export function TodoProvider({ children }: ComponentProps) {
  // 初期表示で表示させておくダミーデータ
  const initialTodoData = [
    { title: "todo1", content: "todo1", id: "awrsgdhfjghk" },
    { title: "todo2", content: "todo2", id: "oqilukyjfthdgdf" },
  ];

  // Todoリストの設定に関わるstate
  const [list, setList] = useState(initialTodoData);

  // Todoデータの取得に関わるstate
  const [todoData, setTodoData] = useState({} as TodoType);

  // Todoのタイトルもしくはコンテンツの内容を取得するstate
  const [searchTodoTitle, setSearchTodoTitle] = useState("");
  const [todoTitle, setTodoTitle] = useState("");
  const [todoContent, setTodoContent] = useState("");

  /**
   * Todoのタイトルを設定
   * @param e
   */
  const inputTodoTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoTitle(e.currentTarget.value);
  };

  /**
   * Todoのコンテンツを設定
   * @param e
   */
  const inputTodoContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoContent(e.currentTarget.value);
  };

  /**
   * 編集したいTodoを取得し,state「todo」を更新
   * @param e
   */
  const findTodoById = (
    e: React.MouseEvent<HTMLButtonElement>
  ): TodoType | null | undefined => {
    const eventTarget = e.currentTarget;
    const todo = eventTarget.closest("li");
    const todoId = todo?.id;
    const targetTodo = list.find((item) => {
      return item.id === todoId;
    });

    targetTodo && setTodoData(targetTodo);
    return targetTodo;
  };

  return (
    <TodoStateContext.Provider
      value={{ list, searchTodoTitle, todoData, todoTitle, todoContent }}
    >
      <TodoDispatchContext.Provider
        value={{
          setTodoData,
          setList,
          setTodoTitle,
          setTodoContent,
          setSearchTodoTitle,
          inputTodoTitle,
          inputTodoContent,
          findTodoById,
        }}
      >
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}
