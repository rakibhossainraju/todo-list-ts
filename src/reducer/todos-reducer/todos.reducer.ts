import { type TodosStateType } from "../../context/todos-context.tsx";
import { TODOS_ACTION_TYPE, type TodosActionTypes } from "./todos.types.ts";

export const todosReducer = (
  state: TodosStateType,
  action: TodosActionTypes,
): TodosStateType => {
  switch (action.type) {
    case TODOS_ACTION_TYPE.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case TODOS_ACTION_TYPE.SET_INPUT_VALUE:
      return {
        ...state,
        inputValue: action.payload,
      };
    case TODOS_ACTION_TYPE.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case TODOS_ACTION_TYPE.UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id == state.itemToBeUpdate.id)
            return { ...todo, todoValue: action.payload };
          return todo;
        }),
      };
    case TODOS_ACTION_TYPE.SET_IS_COMPLETE:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload)
            return { ...todo, isComplete: !todo.isComplete };
          return todo;
        }),
      };
    case TODOS_ACTION_TYPE.SET_IS_UPDATING:
      return {
        ...state,
        isUpdating: !state.isUpdating,
      };
    case TODOS_ACTION_TYPE.SET_TODO_TO_UPDATE:
      return {
        ...state,
        itemToBeUpdate: action.payload,
      };
    default:
      return state;
  }
};
