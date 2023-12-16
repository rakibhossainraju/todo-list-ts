import { type TodoType } from "../App.tsx";
import {
  type AddTodoType,
  type DeleteTodType,
  type SetInputValueType,
  type SetIsCompleteType,
  type SetIsUpdatingType,
  type SetTodoToUpdateType,
  type UpdateTodoType,
  type TodosActionTypes,
  TODOS_ACTION_TYPE,
} from "../reducer/todos-reducer/todos.types.ts";

type PayloadType = TodoType | string | number | undefined;

export function createDispatchUtils(
  type: TODOS_ACTION_TYPE.ADD_TODO,
  payload: TodoType,
): AddTodoType;
export function createDispatchUtils(
  type: TODOS_ACTION_TYPE.UPDATE_TODO,
  payload: string,
): UpdateTodoType;
export function createDispatchUtils(
  type: TODOS_ACTION_TYPE.SET_TODO_TO_UPDATE,
  payload: TodoType,
): SetTodoToUpdateType;
export function createDispatchUtils(
  type: TODOS_ACTION_TYPE.DELETE_TODO,
  payload: number,
): DeleteTodType;
export function createDispatchUtils(
  type: TODOS_ACTION_TYPE.SET_INPUT_VALUE,
  payload: string,
): SetInputValueType;
export function createDispatchUtils(
  type: TODOS_ACTION_TYPE.SET_IS_COMPLETE,
  payload: number,
): SetIsCompleteType;

export function createDispatchUtils(
  type: TODOS_ACTION_TYPE.SET_IS_UPDATING,
): SetIsUpdatingType;

export function createDispatchUtils(
  type: TODOS_ACTION_TYPE,
  payload?: PayloadType,
): TodosActionTypes {
  if (payload !== undefined) return { type, payload } as TodosActionTypes;
  return { type } as TodosActionTypes;
}
