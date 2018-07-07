import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { combineLatest } from 'rxjs/operators';
import * as uuid from 'uuid/v1';
import { TodoItem } from '../interfaces';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  items: Observable<TodoItem[]>;
  search = new BehaviorSubject<string>('');

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.items = this.todoService
      .getTodos()
      .pipe(
        combineLatest(this.search.asObservable(), (todos, search) =>
          todos.filter(t => t.title.includes(search))
        )
      );
  }

  addNewTodo(title: string) {
    this.todoService.addTodo({
      id: uuid(),
      title,
      completed: false
    });
  }

  toggleTodo(todo: TodoItem) {
    this.todoService.toggleTodo(todo);
  }

  filterChange(filter: string) {
    this.search.next(filter);
  }
}
