import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @Input()
  thingsToDo: string[] = [];
  @Output() thingsToDoChange: EventEmitter<string[]> = new EventEmitter<
    string[]
  >();

  deleteTodo(index: number) {
    // thingsToDo.splice(index, 1); // this works but is not good because in some scenarios will break 2 way binding
    if (index > -1) {
      let myNewArrayOfToDos = this.thingsToDo.filter((el, idx) => {
        return idx != index;
      });
      // this.thingsToDo = myNewArrayOfToDos; // this would break the 2 way binding beacuse we are changing the reference so the AppComponent and the TodoComponent would reference different arrays
      this.thingsToDoChange.emit(myNewArrayOfToDos);
    }
  }
}
