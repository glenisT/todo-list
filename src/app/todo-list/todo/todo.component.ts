import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoListStorageService } from 'src/app/todo-list-storage.service';
import { TodoListService } from 'src/app/todo-list.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() todoItem: any;
  @Output() remove:EventEmitter<any> = new EventEmitter();

  isComplete: boolean = false;
  todoListService: any;

  constructor(private storage:TodoListStorageService) { }

  ngOnInit() {
  }

  removeItem() {
    this.remove.emit(this.todoItem);
  }

  completeItem() {
    this.todoItem.checked = !this.todoItem.checked;
    this.storage.put(this.todoItem, this.todoItem);
  }
}
