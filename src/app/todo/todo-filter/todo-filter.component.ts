import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-todo-filter',
  templateUrl: './todo-filter.component.html',
  styleUrls: ['./todo-filter.component.scss']
})
export class TodoFilterComponent implements OnInit {
  @Output() filter = new EventEmitter<string>();

  control = new FormControl('');

  ngOnInit() {
    this.control.valueChanges.subscribe(s => this.filter.emit(s));
  }
}
