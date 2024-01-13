import { Injectable } from '@angular/core';

const storageName = 'todo_list';

const defaultList = [
  {id: 1, title: 'install NodeJS', checked: false },
  {id: 2, title: 'install Angular CLI', checked: false },
  {id: 3, title: 'create new app', checked: false },
  {id: 4, title: 'serve app', checked: false },
  {id: 5, title: 'develop app', checked: false },
  {id: 6, title: 'deploy app', checked: false },
];

@Injectable()
export class TodoListStorageService {

  private todoList;
  private backUpList: any = [];

  constructor() {
    this.todoList = JSON.parse(localStorage.getItem(storageName)!) || defaultList;
  }

  // get items
  get() {
    return [...this.todoList];
  }

  getById(id: string) {
    for (let i = 0; i < this.todoList.length; i++) {
      const element = this.todoList[i];
      if (element.id == id) {
        return element;
      }
    }
  }

  restore() {
    if (this.backUpList.length > 0) {
      this.todoList.push(...this.backUpList);
      this.backUpList = [];
      this.update();
    }
  }

  // add a new item
  post(item: any) {
    this.todoList.push(item);
    return this.update();
  }

  // update an item
  put(item: any, changes: any) {
    Object.assign(this.todoList[this.findItemIndex(item)], changes);
    return this.update();
  }

  putTitle(id: any, changedTitle: any) {
    const todoToUpdate = this.todoList[this.findItemIndex(this.getById(id))];
    todoToUpdate.title = changedTitle;
    return this.update();
  }

  // remove an item
  destroy(item: any) {
    this.todoList.splice(this.findItemIndex(item), 1);
    this.backUpList.push(item);
    return this.update();
  }

  private update() {
    localStorage.setItem(storageName, JSON.stringify(this.todoList));

    return this.get();
  }

  private findItemIndex(item: any) {
    return this.todoList.indexOf(item);
  }
}
