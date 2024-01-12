import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListModule } from './todo-list/todo-list.module';
import { TodoListService } from './todo-list.service';
import { TodoListStorageService } from './todo-list-storage.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoListModule
  ],
  providers: [TodoListService, TodoListStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
