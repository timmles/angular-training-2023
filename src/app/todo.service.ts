import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export class ToDo {
  userId: number;
  id = 0;
  title: string;
  completed: boolean;

  constructor(userId: number, title: string, completed: boolean) {
    this.userId = userId;
    this.title = title;
    this.completed = completed;
  }
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private url = "https://jsonplaceholder.typicode.com/todos"

  constructor(private http: HttpClient) {
  }

  getAllTodos(): Observable<ToDo[]> {
    return this.http.get<ToDo[]>(this.url)
  }

  addTodo(todo: String) {
    console.log("not implemented")
  }

  deleteTodo(id: number) {
    console.log("not implemented")
  }
}
