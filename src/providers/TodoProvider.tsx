import { useTodo } from "hooks/useTodo";
import { createContext } from "react";

type Props = {
  children: JSX.Element;
};

type TodoProps = {
  text: string;
  id: string;
};

type TodoStateProps = {
  list: TodoProps[];
  searchText: string;
};

type TodoDispatchProps = {
  useAddToList: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  useSetSearchTodo: (e: React.ChangeEvent<HTMLInputElement>) => void;
  useDeleteTodo: (e: React.MouseEvent<HTMLButtonElement>) => void;
  useFilterList: () => TodoProps[];
  useInitializeList: () => TodoProps[];
};

export const TodoStateContext = createContext({} as TodoStateProps);
export const TodoDispatchContext = createContext({} as TodoDispatchProps);

export function TodoProvider({ children }: Props) {
  const {
    list,
    searchText,
    useAddToList,
    useSetSearchTodo,
    useDeleteTodo,
    useFilterList,
    useInitializeList,
  } = useTodo();

  return (
    <TodoStateContext.Provider value={{ list, searchText }}>
      <TodoDispatchContext.Provider
        value={{
          useAddToList,
          useSetSearchTodo,
          useDeleteTodo,
          useFilterList,
          useInitializeList,
        }}
      >
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}
