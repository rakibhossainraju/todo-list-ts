import {
  createContext,
  useReducer,
  type ReactNode,
  type Dispatch,
  useEffect,
} from "react";
import { type TodoType } from "../App.tsx";
import { type TodosActionTypes } from "../reducer/todos-reducer/todos.types.ts";
import { todosReducer } from "../reducer/todos-reducer/todos.reducer.ts";

export interface TodosStateType {
  readonly todos: TodoType[];
  readonly inputValue: string;
  readonly itemToBeUpdate: TodoType;
  readonly isUpdating: boolean;
}

interface TodosContextType {
  readonly todosState: TodosStateType;
  readonly dispatch: Dispatch<TodosActionTypes>;
}

const TODOS_INITIAL_STATE: TodosStateType = {
  todos: [],
  inputValue: "",
  itemToBeUpdate: { todoValue: "", isComplete: false, id: 0 },
  isUpdating: false,
};

export const todosContext = createContext<TodosContextType>({
  todosState: { ...TODOS_INITIAL_STATE },
  dispatch() {},
});

export const TodosContextProvider = ({ children }: { children: ReactNode }) => {
  const localStorageItem = localStorage.getItem("todosState");
  const [todosState, dispatch] = useReducer(
    todosReducer,
    localStorageItem ? JSON.parse(localStorageItem) : TODOS_INITIAL_STATE,
  );

  useEffect(
    () => localStorage.setItem("todosState", JSON.stringify(todosState)),
    [todosState],
  );

  const todosCtxValue: TodosContextType = { todosState, dispatch };
  return (
    <todosContext.Provider value={todosCtxValue}>
      {children}
    </todosContext.Provider>
  );
};
