import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo-list.component';
import { CounterComponent } from './counter/counter.component';
import { AddTodoComponent } from './add-todo/add-todo.component';



@NgModule({
  declarations: [
    TodoComponent,
    TodoListComponent,
    CounterComponent,
    AddTodoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ 
    TodoListComponent 
  ],
})
export class TodoListModule { }
