import { createDispatchUtils } from "../../utilities/create-dispatch-utils.ts";
import { TODOS_ACTION_TYPE, type TodosActionTypes } from "./todos.types.ts";
import { type Dispatch } from "react";
import { type TodoType } from "../../App.tsx";

type DispatchType = Dispatch<TodosActionTypes>;

export const addTodo = (dispatch: DispatchType, todo: TodoType) => {
  dispatch(createDispatchUtils(TODOS_ACTION_TYPE.ADD_TODO, todo));
};
export const setInputValue = (dispatch: DispatchType, value: string) => {
  dispatch(createDispatchUtils(TODOS_ACTION_TYPE.SET_INPUT_VALUE, value));
};

export const deleteTodo = (dispatch: DispatchType, id: number) => {
  dispatch(createDispatchUtils(TODOS_ACTION_TYPE.DELETE_TODO, id));
};

export const updateTodo = (dispatch: DispatchType, value: string) => {
  dispatch(createDispatchUtils(TODOS_ACTION_TYPE.UPDATE_TODO, value));
};

export const setIsComplete = (dispatch: DispatchType, id: number) => {
  dispatch(createDispatchUtils(TODOS_ACTION_TYPE.SET_IS_COMPLETE, id));
};

export const setTodoToUpdate = (dispatch: DispatchType, todo: TodoType) => {
  dispatch(createDispatchUtils(TODOS_ACTION_TYPE.SET_TODO_TO_UPDATE, todo));
};
export const setIsUpdating = (dispatch: DispatchType) => {
  dispatch(createDispatchUtils(TODOS_ACTION_TYPE.SET_IS_UPDATING));
};
