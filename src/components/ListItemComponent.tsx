import { type ComponentPropsWithoutRef } from "react";
import {
  deleteTodo,
  setInputValue,
  setIsComplete,
  setIsUpdating,
  setTodoToUpdate,
} from "../reducer/todos-reducer/todos.action.ts";
import { TodoType } from "../App.tsx";
import { useTodosContext } from "../custom-hooks/useTodosContext.ts";
import { ButtonComponent } from "./ButtonComponent.tsx";

interface ListItemPropsType extends ComponentPropsWithoutRef<"li"> {
  todo: TodoType;
}

const ListItemComponent = ({ todo, ...otherProps }: ListItemPropsType) => {
  const { dispatch } = useTodosContext();
  const handelComplete = () => {
    setIsComplete(dispatch, todo.id);
  };
  const handelEdit = () => {
    setIsUpdating(dispatch);
    setTodoToUpdate(dispatch, todo);
    setInputValue(dispatch, todo.todoValue);
  };
  const handelDelete = () => {
    deleteTodo(dispatch, todo.id);
  };
  return (
    <li {...otherProps}>
      <span
        style={{
          textDecoration: todo.isComplete ? "line-through" : "",
          marginRight: "2rem",
        }}
      >
        {todo.todoValue}
      </span>
      <ButtonComponent onClick={handelComplete}>complete</ButtonComponent>
      <ButtonComponent onClick={handelEdit}>edit</ButtonComponent>
      <ButtonComponent onClick={handelDelete}>delete</ButtonComponent>
    </li>
  );
};

export default ListItemComponent;
