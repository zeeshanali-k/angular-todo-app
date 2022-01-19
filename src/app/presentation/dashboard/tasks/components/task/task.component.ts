import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatCheckbox, MatCheckboxChange } from '@angular/material/checkbox';
import { Todo } from 'src/app/domain/models/Todo';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Output() deleteTodo = new EventEmitter<Todo>();
  @Output() toggleActiveTodo = new EventEmitter<Todo>();
  @Input("todo") todo!: Todo;

  constructor() { }

  ngOnInit(): void {
  }

  handleDeleteTodo() {
    console.log("Deleted");
    this.deleteTodo.emit(this.todo);
  }

  handleToggle(a: MatCheckboxChange) {
    console.log(a.checked);
    this.toggleActiveTodo.emit(this.todo);
  }
}
