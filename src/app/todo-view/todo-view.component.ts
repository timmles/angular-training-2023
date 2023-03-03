import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.css']
})
export class TodoViewComponent {
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
