import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/domain/models/Todo';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  todos!: Todo[];

  constructor() {
    let todosStr = localStorage.getItem("todos");
    if (todosStr) {
      this.todos = JSON.parse(todosStr);
    } else {
      this.todos = [];
    }
  }

  ngOnInit(): void {
  }

  handleDelete(todo: Todo) {
    this.removeElementFromObjectArray(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  removeElementFromObjectArray(todo: Todo) {
    this.todos.forEach((value, index) => {
      if (value == todo) this.todos.splice(index, 1);
    });
  }
}
