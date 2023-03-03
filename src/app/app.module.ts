import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-view/todo-list/todo-list.component';
import { TodoSummaryComponent } from './todo-view/todo-summary/todo-summary.component';
import { FooterComponent } from './footer/footer.component';
import { GenericInputComponent } from './todo-view/generic-input/generic-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SwitchOneComponent } from './switch-one/switch-one.component';
import { SwitchTwoComponent } from './switch-two/switch-two.component';
import { SwitchExampleComponent } from './switch-example/switch-example.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ObservablesComponent } from './observables/observables.component';
import { HttpClientModule } from '@angular/common/http';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { TodoViewComponent } from './todo-view/todo-view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoSummaryComponent,
    FooterComponent,
    GenericInputComponent,
    SwitchOneComponent,
    SwitchTwoComponent,
    SwitchExampleComponent,
    CalculatorComponent,
    ObservablesComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    TodoViewComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatChipsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
