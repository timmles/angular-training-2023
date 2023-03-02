import { Component } from '@angular/core';
import { TodoService } from './todo.service';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Training';
  getAllTodos: Observable<string[]> =
    this.todoService
      .getAllTodos().pipe(
        map(data => data.map(todo => todo.title))
      )

  constructor(private todoService: TodoService) {}

  addTodo(newTodo: String) {
    this.todoService.addTodo(newTodo);
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id);
  }
}
