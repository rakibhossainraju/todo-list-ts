import { type TodoType } from "../../App.tsx";

export enum TODOS_ACTION_TYPE {
  ADD_TODO = "ADD_TODO",
  DELETE_TODO = "DELETE_TODO",
  UPDATE_TODO = "UPDATE_TODO",
  SET_INPUT_VALUE = "SET_INPUT_VALUE",
  SET_IS_UPDATING = "SET_IS_UPDATING",
  SET_TODO_TO_UPDATE = "SET_TODO_TO_UPDATE",
  SET_IS_COMPLETE = "SET_IS_COMPLETE",
}

export interface AddTodoType {
  type: TODOS_ACTION_TYPE.ADD_TODO;
  payload: TodoType;
}

export interface UpdateTodoType {
  type: TODOS_ACTION_TYPE.UPDATE_TODO;
  payload: string;
}

export interface SetTodoToUpdateType {
  type: TODOS_ACTION_TYPE.SET_TODO_TO_UPDATE;
  payload: TodoType;
}

export interface DeleteTodType {
  type: TODOS_ACTION_TYPE.DELETE_TODO;
  payload: number;
}

export interface SetInputValueType {
  type: TODOS_ACTION_TYPE.SET_INPUT_VALUE;
  payload: string;
}

export interface SetIsCompleteType {
  type: TODOS_ACTION_TYPE.SET_IS_COMPLETE;
  payload: number;
}

export interface SetIsUpdatingType {
  type: TODOS_ACTION_TYPE.SET_IS_UPDATING;
}

export type TodosActionTypes =
  | AddTodoType
  | UpdateTodoType
  | SetTodoToUpdateType
  | DeleteTodType
  | SetInputValueType
  | SetIsUpdatingType
  | SetIsCompleteType;
