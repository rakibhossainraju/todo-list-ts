import { type ChangeEvent, type FormEvent } from "react";
import InputComponent from "./components/InputComponent.tsx";
import { useTodosContext } from "./custom-hooks/useTodosContext.ts";
import {
  addTodo,
  setInputValue,
  setIsUpdating,
  updateTodo,
} from "./reducer/todos-reducer/todos.action.ts";
import ListItemComponent from "./components/ListItemComponent.tsx";

export interface TodoType {
  readonly todoValue: string;
  readonly isComplete: boolean;
  readonly id: number;
}

const App = () => {
  const { todosState, dispatch } = useTodosContext();
  const handelSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!todosState.inputValue.trim())
      return alert("Please enter a valid todo");

    const todo: TodoType = {
      todoValue: todosState.inputValue,
      isComplete: false,
      id: Date.now(),
    };
    addTodo(dispatch, todo);
    setInputValue(dispatch, "");
  };
  const handelUpdate = (event: FormEvent) => {
    event.preventDefault();
    setIsUpdating(dispatch);
    setInputValue(dispatch, "");
    updateTodo(dispatch, todosState.inputValue);
  };
  const handelChange = (event: ChangeEvent) => {
    const input = event.currentTarget as HTMLInputElement;
    setInputValue(dispatch, input.value);
  };
  return (
    <>
      <form onSubmit={todosState.isUpdating ? handelUpdate : handelSubmit}>
        <InputComponent
          onChange={handelChange}
          value={todosState.inputValue}
          name="todoValue"
        />
        <button>{todosState.isUpdating ? "Update" : "Add"} Todo</button>
      </form>
      <ul>
        {todosState.todos.map((todo) => (
          <ListItemComponent key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
};

export default App;
