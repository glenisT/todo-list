import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  taskName: string = '';

  constructor(public dialogRef: MatDialogRef<AddTodoComponent>) {}

  ngOnInit(): void {}

  close(): void {
    this.dialogRef.close();
  }

  saveTask(): void {
    // Add your logic to save the task
    // You can emit an event or call a service to add the task to your todoList
    this.dialogRef.close();
  }
}
