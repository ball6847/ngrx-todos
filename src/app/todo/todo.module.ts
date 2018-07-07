import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoFilterComponent } from './todo-filter/todo-filter.component';
import { TodoInputComponent } from './todo-input/todo-input.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  imports: [CommonModule, TodoRoutingModule, ReactiveFormsModule],
  declarations: [TodoInputComponent, TodoFilterComponent, TodoListComponent, TodoComponent]
})
export class TodoModule {}
