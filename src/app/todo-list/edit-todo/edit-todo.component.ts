import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoListService } from 'src/app/shared/todo-list.service';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {
  item: any = {};
  todoId: string = '';
  error: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private todoService: TodoListService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.todoId = params['id'];
      // Fetch and set the current todo item
      this.item = this.todoService.getTodoById(this.todoId);
      console.log(this.item);
      
    });
  }

  editTask() {
    if (this.item.title == null || this.item.title.trim() === '') {
      this.error = true;
    } else {
      this.error = false;
      this.todoService.editTitle(this.todoId, this.item.title);
      this.router.navigate(['']);
    }
  }

  cancel() {
    this.router.navigate(['']);
  }
}
