import { Component } from '@angular/core';
import { ToDo, TodoService } from '../todo.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  todoFormGroup: FormGroup
  descriptionFormControl: FormControl
  completedFormControl: FormControl

  constructor(private formBuilder: FormBuilder, private todoService: TodoService) {
    this.descriptionFormControl = new FormControl('', [
      Validators.required,
      Validators.min(3),
      Validators.max(20),
    ])

    this.completedFormControl = new FormControl('')


    this.todoFormGroup = formBuilder.group({
      description: this.descriptionFormControl,
      completed: this.completedFormControl
    })
  }

  createTodo() {
    let todo = new ToDo();
    todo.title = this.todoFormGroup.value.title
    todo.completed = this.todoFormGroup.value.completed
    this.todoService.addTodoFull(todo)
  }
}
