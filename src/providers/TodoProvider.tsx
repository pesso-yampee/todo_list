import { createContext, useState } from "react";

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
  setList: React.Dispatch<React.SetStateAction<TodoProps[]>>;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
};

export const TodoStateContext = createContext({} as TodoStateProps);
export const TodoDispatchContext = createContext({} as TodoDispatchProps);

export function TodoProvider({ children }: Props) {
  const [list, setList] = useState<TodoProps[]>([]);
  const [searchText, setSearchText] = useState<string>("");

  return (
    <TodoStateContext.Provider value={{ list, searchText }}>
      <TodoDispatchContext.Provider value={{ setList, setSearchText }}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}
