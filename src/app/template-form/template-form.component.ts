import { Component } from '@angular/core';
import { ToDo, TodoService } from '../todo.service';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {
  title: string = '';
  todo: ToDo = new ToDo();

  constructor(private todoService: TodoService) {}

  createTodo() {
    this.todoService.addTodoFull(this.todo);
  }
}
