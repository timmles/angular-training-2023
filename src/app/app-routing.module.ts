import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoViewComponent } from './todo-view/todo-view.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ObservablesComponent } from './observables/observables.component';

const routes: Routes = [
  {path: '', redirectTo: '/todo', pathMatch: 'full'},
  {path: 'todo', component: TodoViewComponent},
  {path: 'calculator', component: CalculatorComponent},
  {path: 'observable', component: ObservablesComponent},
  {path: 'template-form', component: TemplateFormComponent},
  {path: 'reactive-form', component: ReactiveFormComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
