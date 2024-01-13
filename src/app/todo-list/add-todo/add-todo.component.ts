import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TodoListService } from 'src/app/shared/todo-list.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  taskName: string = '';

  constructor(
    public dialogRef: MatDialogRef<AddTodoComponent>,
    private todoListService: TodoListService
  ) {}

  ngOnInit(): void {}

  close(): void {
    this.dialogRef.close();
  }

  saveTask(): void {
    const item = { title: this.taskName, checked: false };
    this.todoListService.addItem(item);
    this.dialogRef.close();
  }
}
