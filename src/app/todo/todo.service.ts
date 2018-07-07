import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TodoItem } from './interfaces';

@Injectable({ providedIn: 'root' })
export class TodoService {
  todoSubject = new BehaviorSubject<TodoItem[]>([]);

  getTodos() {
    return this.todoSubject.asObservable();
  }

  addTodo(todo: TodoItem) {
    const todos = [...this.todoSubject.getValue(), todo];
    this.todoSubject.next(todos);
  }

  toggleTodo(todo: TodoItem) {
    const todos = this.todoSubject
      .getValue()
      .map(item => (todo.id === item.id ? { ...item, completed: !item.completed } : item));

    this.todoSubject.next(todos);
  }
}
