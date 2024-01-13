import { Injectable } from '@angular/core';
import { TodoListStorageService } from './todo-list-storage.service';
import { TodoUpdateService } from './todo-update-service.service';

@Injectable()
export class TodoListService {
  constructor(
    private storage: TodoListStorageService,
    private todoUpdateService: TodoUpdateService
  ) {}

  getTodoList() {
    return this.storage.get();
  }

  getTodoById(id: string) {
    return this.storage.getById(id);
  }

  addItem(item: any) {
    const updatedList = this.storage.post(item);
    this.todoUpdateService.triggerUpdate();
    return updatedList;
  }

  editTitle(id: any, changedTitle: any) {
    this.storage.putTitle(id, changedTitle);
  }

  removeItem(item: any) {
    const updatedList = this.storage.destroy(item);
    this.todoUpdateService.triggerUpdate();
    return updatedList;
  }
}
