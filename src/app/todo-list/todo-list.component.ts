import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  title = 'todo';
  todoList: any;
  totalTodos: any;
  completedTodos: any = [];
  completedCounter: any;

  constructor(private todoListService:TodoListService) { }

  ngOnInit() {
    this.todoList = this.todoListService.getTodoList();
    this.totalTodos = this.todoList.length
    for (let i = 0; i < this.todoList.length; i++) {
      if (this.todoList[i].checked == true) {
        this.completedTodos.push(this.todoList[i]);
      };
    }
    this.completedCounter = this.completedTodos.length;
  }

  addItem(title: any): void {
    this.todoList = this.todoListService.addItem({ title });
  }

  removeItem(item: any) {
    this.todoList = this.todoListService.removeItem(item);
  }

}
