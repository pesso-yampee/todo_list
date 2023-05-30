import { useTodo } from "hooks/useTodo";
import { createContext } from "react";

type Props = {
  children: JSX.Element;
};

type TodoProps = {
  title: string | null | undefined;
  content: string | null | undefined;
  id: string;
};

type TodoStateProps = {
  list: TodoProps[];
  searchTodoTitle: string;
  todo: TodoProps;
  todoTitle: string;
  todoContent: string;
};

type TodoDispatchProps = {
  setTodo: React.Dispatch<React.SetStateAction<TodoProps>>;
  useInputTodoTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  useInputTodoContent: (e: React.ChangeEvent<HTMLInputElement>) => void;
  useAddToList: (e: React.MouseEvent<HTMLButtonElement>) => void;
  useSetSearchTodo: (e: React.ChangeEvent<HTMLInputElement>) => void;
  useDeleteTodo: (e: React.MouseEvent<HTMLButtonElement>) => void;
  useFilterList: () => TodoProps[];
  useInitializeList: () => TodoProps[];
  useFindTodoDetail: (e: React.MouseEvent<HTMLButtonElement>) => void;
  useSetTodoTitleAndContentIntoField: (
    e: React.MouseEvent<HTMLButtonElement>
  ) => void;
  useUpdateTodo: () => void;
};

export const TodoStateContext = createContext({} as TodoStateProps);
export const TodoDispatchContext = createContext({} as TodoDispatchProps);

export function TodoProvider({ children }: Props) {
  const {
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
  } = useTodo();

  return (
    <TodoStateContext.Provider
      value={{ list, searchTodoTitle, todo, todoTitle, todoContent }}
    >
      <TodoDispatchContext.Provider
        value={{
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
        }}
      >
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}
