import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

// service used to trigger the update of the list when a new task is added
@Injectable({
  providedIn: 'root',
})
export class TodoUpdateService {
  private updateSubject = new Subject<void>();

  update$ = this.updateSubject.asObservable();

  triggerUpdate() {
    this.updateSubject.next();
  }
}
