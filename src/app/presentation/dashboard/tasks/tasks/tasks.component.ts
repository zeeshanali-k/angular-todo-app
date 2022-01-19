import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from 'src/app/domain/models/Todo';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  todos!: Todo[];
  type!: number;

  constructor(router: ActivatedRoute) {
    let todosStr = localStorage.getItem("todos");
    if (todosStr) {
      router.data.subscribe(res => {
        this.type = res["type"];

        let tempTodos: Todo[] = JSON.parse(todosStr!);
        this.loadTodos(tempTodos);
      });
    } else {
      this.todos = [];
    }
  }

  private loadTodos(tempTodos: Todo[]) {
    if (this.type != 1) {
      this.todos = [];
      tempTodos.forEach(val => {
        if (this.type == 2 && !val.isActive) {
          this.todos.push(val);
        } else if (this.type == 3 && val.isActive) {
          this.todos.push(val);
        }
      })
    } else {
      this.todos = tempTodos;
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

  handleToggleActive(todo: Todo) {
    const todosTemp: Todo[] = JSON.parse(localStorage.getItem("todos")!);
    const indexOfTodo = todosTemp.findIndex(val => {
      return val.id == todo.id;
    });
    console.log(indexOfTodo);
    todo.isActive = !todo.isActive;
    todosTemp[indexOfTodo] = todo;
    localStorage.setItem("todos", JSON.stringify(todosTemp));
    this.loadTodos(todosTemp)

  }
}
