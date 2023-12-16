import { useContext } from "react";
import { todosContext } from "../context/todos-context.tsx";

export const useTodosContext = () => useContext(todosContext);
