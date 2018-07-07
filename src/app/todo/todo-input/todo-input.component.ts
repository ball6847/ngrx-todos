import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent {
  @Output() todoAdded = new EventEmitter<string>();

  todoForm = new FormGroup({
    todo: new FormControl('', [Validators.required])
  });

  submit() {
    if (!this.todoForm.valid) {
      return;
    }

    this.todoAdded.emit(this.todoForm.value.todo);
    this.todoForm.reset();
  }
}
