import { Component } from '@angular/core';
import { ToDo, TodoService } from '../todo.service';

export enum TodoCategory {
  HOME, WORK, PERSONAL
}

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {
  title: string = ''
  todo: ToDo = new ToDo()
  categoryOptions = Object.keys(TodoCategory).filter((item) => {
    return isNaN(Number(item));
  });

  constructor(private todoService: TodoService) {
  }

  createTodo() {
    this.todoService.addTodoFull(this.todo)
  }
}
