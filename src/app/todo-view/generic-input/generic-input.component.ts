import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-generic-input',
  templateUrl: './generic-input.component.html',
  styleUrls: ['./generic-input.component.css']
})
export class GenericInputComponent {
  @Output() newItem: EventEmitter<string> = new EventEmitter<string>();

  inputString: string = '';

  addTodo() {
    this.newItem.emit(this.inputString);
    this.inputString = '';
  }
}
