import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditTodoComponent } from './todo-list/edit-todo/edit-todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
        { path: '', component: LayoutComponent }
    ],
  },
  { path: 'edit/:id', component: EditTodoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
