import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  @Input() totalTodos: any;
  @Input() completedTodos: any;

  constructor() { }

  ngOnInit(): void {
  }

}
