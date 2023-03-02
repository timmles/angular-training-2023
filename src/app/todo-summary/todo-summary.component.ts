import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo-summary',
  templateUrl: './todo-summary.component.html',
  styleUrls: ['./todo-summary.component.css']
})
export class TodoSummaryComponent {
  @Input()
  thingsToDo: string[] = []

  summary(): string {
    return `${this.thingsToDo.length} to do / ${this.thingsToDo.length} done`
  }
}
