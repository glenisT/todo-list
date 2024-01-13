import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListModule } from './todo-list/todo-list.module';
import { TodoListService } from './shared/todo-list.service';
import { TodoListStorageService } from './shared/todo-list-storage.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoListModule,
    BrowserAnimationsModule,
  ],
  providers: [TodoListService, TodoListStorageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
