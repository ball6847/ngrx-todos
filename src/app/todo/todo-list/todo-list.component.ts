import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem } from '../interfaces';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  @Input() items: TodoItem[];
  @Output() toggle = new EventEmitter<TodoItem>();
}
