import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../shared/todo-list.service';
import { TodoListStorageService } from '../shared/todo-list-storage.service';
import { MatDialog } from '@angular/material/dialog';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodoUpdateService } from '../shared/todo-update-service.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  title = 'todo';
  todoList: any;
  totalTodos: number = 0;
  completedCounter: number = 0;

  filtered: boolean = false;

  constructor(
    private todoListService: TodoListService,
    private dialog: MatDialog,
    private todoUpdateService: TodoUpdateService,
    private storageService: TodoListStorageService
  ) {}

  ngOnInit() {
    this.filtered = false;
    this.todoList = this.todoListService.getTodoList();
    this.updateTotalTodos();
    this.loadCounterFromLocalStorage();
    this.loadFilterStateFromLocalStorage();
    // Subscribe to the update event
    this.todoUpdateService.update$.subscribe(() => {
      this.updateTodoList();
    });
  }

  openAddTaskModal(): void {
    const dialogRef = this.dialog.open(AddTodoComponent, {
      panelClass: 'custom-dialog-container',
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }

  private updateTodoList() {
    this.todoList = this.todoListService.getTodoList();
    this.updateTotalTodos();
  }

  restore() {
    this.storageService.restore();
    this.updateTodoList();
  }

  filterTasks() {
    this.filtered = !this.filtered;
    this.saveFilterStateToLocalStorage();
  }

  addItem(title: any): void {
    this.todoList = this.todoListService.addItem({ title });
    this.updateTotalTodos();
    this.saveCounterToLocalStorage(); // Save the counter to localStorage when adding an item
  }

  removeItem(item: any) {
    if (item.completed) {
      this.completedCounter--; // Decrease completedCounter when a checked checkbox is deleted
    }
    this.todoList = this.todoListService.removeItem(item);
    this.updateTotalTodos();
    this.saveCounterToLocalStorage();
  }

  updateCompletedTodos(isCompleted: boolean) {
    this.completedCounter += isCompleted ? 1 : -1;
    this.completedCounter = Math.max(0, this.completedCounter);
    this.completedCounter = Math.min(this.completedCounter, this.totalTodos);
    this.saveCounterToLocalStorage(); // Save the counter to localStorage when updating completed todos
  }

  updateTotalTodos() {
    this.totalTodos = this.todoList.length;
  }

  saveCounterToLocalStorage() {
    localStorage.setItem('completedCounter', this.completedCounter.toString());
  }

  saveFilterStateToLocalStorage() {
    localStorage.setItem('filter', this.filtered.toString());
  }

  loadCounterFromLocalStorage() {
    const storedCounter = localStorage.getItem('completedCounter');
    if (storedCounter !== null) {
      this.completedCounter = +storedCounter;
    }
  }

  loadFilterStateFromLocalStorage() {
    const storedFilterState = localStorage.getItem('filter');
    if (storedFilterState !== null) {
      // Converting the stored string back to a boolean
      this.filtered = storedFilterState === 'true';
    } else {
      // Handling the case where the value is not found in localStorage
      this.filtered = false; // or any default value you prefer
    }
  }
}
