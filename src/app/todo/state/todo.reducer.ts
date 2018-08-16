import * as uuid from 'uuid/v1';
import { TodoItem } from '../interfaces';
import { TodoActions, TodoActionTypes } from './todo.actions';

export interface TodoState {
  todo: TodoData;
}

interface TodoData {
  todos: TodoItem[];
  filter: string;
}

const initialState: TodoData = {
  todos: [],
  filter: ''
};

export function reducer(state = initialState, action: TodoActions): TodoData {
  switch (action.type) {
    case TodoActionTypes.AddTodo: {
      const todo: TodoItem = {
        id: uuid(),
        title: action.title,
        completed: false
      };
      const todos = [...state.todos, todo];
      return { ...state, todos };
    }

    case TodoActionTypes.ToggleTodo: {
      const todos = state.todos.map(
        todo => (todo.id === action.todo.id ? { ...todo, completed: !todo.completed } : todo)
      );
      return { ...state, todos };
    }

    case TodoActionTypes.UpdateFilter: {
      return { ...state, filter: action.filter };
    }

    default:
      return state;
  }
}
