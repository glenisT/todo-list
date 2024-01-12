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

  constructor(private todoListService:TodoListService) { }

  ngOnInit() {
    this.todoList = this.todoListService.getTodoList();
  }

  addItem(title: any): void {
    this.todoList = this.todoListService.addItem({ title });
  }

  removeItem(item: any) {
    this.todoList = this.todoListService.removeItem(item);
  }

}
