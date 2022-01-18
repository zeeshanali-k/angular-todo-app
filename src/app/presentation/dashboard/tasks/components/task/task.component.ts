import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/domain/models/Todo';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Output() deleteTodo = new EventEmitter<Todo>();
  @Input("todo") todo!: Todo;

  constructor() { }

  ngOnInit(): void {
  }

  handleDeleteTodo() {
    console.log("Deleted");
    this.deleteTodo.emit(this.todo);
  }
}
