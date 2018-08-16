import { createSelector } from '@ngrx/store';
import { TodoState } from './todo.reducer';

export const todosSelector = (s: TodoState) => s.todo.todos;
export const filterSelector = (s: TodoState) => s.todo.filter;
export const filteredTodosSelector = createSelector(
  todosSelector,
  filterSelector,
  (todos, filter) => (filter ? todos.filter(todo => todo.title.includes(filter)) : todos)
);
