import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TodoItem } from '../interfaces';
import { AddTodo, ToggleTodo, UpdateFilter } from '../state/todo.actions';
import { TodoState } from '../state/todo.reducer';
import { filteredTodosSelector } from '../state/todo.selectors';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  items: Observable<TodoItem[]>;

  constructor(private store: Store<TodoState>) {}

  ngOnInit() {
    this.items = this.store.select(filteredTodosSelector);
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
