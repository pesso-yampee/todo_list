import { useTodoList } from "hooks/useTodoList";
import { createContext } from "react";
import { TodoType } from "types/todo";

type Props = {
  children: JSX.Element;
};

type TodoStateProps = {
  list: TodoType[];
  searchTodoTitle: string;
  todo: TodoType;
  todoTitle: string;
  todoContent: string;
};

type TodoDispatchProps = {
  setTodo: React.Dispatch<React.SetStateAction<TodoType>>;
  useInputTodoTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  useInputTodoContent: (e: React.ChangeEvent<HTMLInputElement>) => void;
  useAddToList: (e: React.MouseEvent<HTMLButtonElement>) => void;
  useSetSearchTodo: (e: React.ChangeEvent<HTMLInputElement>) => void;
  useDeleteTodo: (e: React.MouseEvent<HTMLButtonElement>) => void;
  useFilterList: () => TodoType[];
  useInitializeList: () => TodoType[];
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
  } = useTodoList();

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
