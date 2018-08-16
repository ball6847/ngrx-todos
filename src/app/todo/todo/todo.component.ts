import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { TodoItem } from '../interfaces';
import { AddTodo, ToggleTodo, UpdateFilter } from '../state/todo.actions';
import { TodoState } from '../state/todo.reducer';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  items: Observable<TodoItem[]>;

  constructor(private store: Store<TodoState>) {}

  ngOnInit() {
    const todos$ = this.store.select(state => state.todo.todos);
    const filter$ = this.store.select(state => state.todo.filter);

    this.items = combineLatest(
      todos$,
      filter$,
      (todos, filter) => (filter ? todos.filter(todo => todo.title.includes(filter)) : todos)
    );
  }

  addNewTodo(title: string) {
    this.store.dispatch(new AddTodo(title));
  }

  toggleTodo(todo: TodoItem) {
    this.store.dispatch(new ToggleTodo(todo));
  }

  filterChange(filter: string) {
    this.store.dispatch(new UpdateFilter(filter));
  }
}
