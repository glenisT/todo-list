import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-edit-todo',
    templateUrl: './edit-todo.component.html',
    styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {
    todoId: string = ''; // Assuming your todo item has an id property

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        // Fetch the todoId from the route parameters
        this.route.params.subscribe(params => {
            this.todoId = params['id'];
            // Use this.todoId to fetch and display the corresponding todo item details
        });
    }
}
