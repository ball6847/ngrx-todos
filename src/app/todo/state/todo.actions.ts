import { Action } from '@ngrx/store';
import { TodoItem } from '../interfaces';

export enum TodoActionTypes {
  LoadTodos = '[Todo] Load Todos',
  AddTodo = '[Todo] Add Todo',
  ToggleTodo = '[Todo] Toggle Todo',
  UpdateFilter = '[Todo] Update Filter'
}

export class AddTodo implements Action {
  readonly type = TodoActionTypes.AddTodo;
  constructor(public title: string) {}
}

export class ToggleTodo implements Action {
  readonly type = TodoActionTypes.ToggleTodo;
  constructor(public todo: TodoItem) {}
}

export class UpdateFilter implements Action {
  readonly type = TodoActionTypes.UpdateFilter;
  constructor(public filter: string) {}
}

export type TodoActions = AddTodo | ToggleTodo | UpdateFilter;
