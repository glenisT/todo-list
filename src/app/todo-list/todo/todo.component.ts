import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TodoListStorageService } from 'src/app/shared/todo-list-storage.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  @Input() todoItem: any;
  @Output() remove = new EventEmitter<void>();
  @Output() checkboxChange = new EventEmitter<boolean>();

  isComplete: boolean = false;
  todoListService: any;

  constructor(private storage: TodoListStorageService, private router: Router) {}

  ngOnInit() {}

  completeItem() {
    this.todoItem.checked = !this.todoItem.checked;
    this.storage.put(this.todoItem, this.todoItem);
  }

  onCheckboxChange(event: any) {
    this.checkboxChange.emit(event.target.checked);
  }

  editItem() {
    // Assuming you have a route named 'edit' defined in your router configuration
    // You can replace 'edit' with the actual route path where you want to navigate for editing.
    this.router.navigate(['/edit', this.todoItem.id]);
}
}
