import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo-list.component';
import { CounterComponent } from './counter/counter.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NgModel } from '@angular/forms';

@NgModule({
  declarations: [
    TodoComponent,
    TodoListComponent,
    CounterComponent,
    AddTodoComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [ 
    TodoListComponent 
  ],
})
export class TodoListModule { }
