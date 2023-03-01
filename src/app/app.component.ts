import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Training';
  thingsToDo = [
    'Learn JavaScript',
    'Learn Angular',
    'Learn Angular Material'
  ]
  thingsCompleted = []

  constructor() {
    setInterval(() => {
      this.thingsToDo.push('Make coffee')
    }, 1000)
  }

  summary(): string {
    return `${this.thingsToDo.length} to do / ${this.thingsCompleted.length} done`
  }
}
