import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from '../../../../domain/models/Todo';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  handleAddTodo(todoForm: NgForm) {
    console.log(todoForm.value);
    if (!todoForm.valid) {
      return;
    }
    let todo: Todo = {
      todo: todoForm.value["todo"],
      date: todoForm.value["todo-date"],
    };
    let todosStr = localStorage.getItem("todos");
    console.log(todosStr);

    let todosList: Todo[];
    if (todosStr) {
      todosList = JSON.parse(todosStr)
      console.log(todosList.toString());
    } else {
      todosList = [];
    }

    todosList.push(todo);
    localStorage.setItem("todos", JSON.stringify(todosList));
    // todoForm.reset();
    todoForm.resetForm();
  }
}
