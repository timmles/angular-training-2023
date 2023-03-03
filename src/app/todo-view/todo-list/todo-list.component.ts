import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @Input()
  thingsToDo: string[] = [];
  @Output()
  thingsToDoDelete: EventEmitter<number> = new EventEmitter();

  deleteTodo(index: number) {
    this.thingsToDoDelete.emit(index);
  }
}
