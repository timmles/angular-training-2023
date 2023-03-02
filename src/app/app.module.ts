import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoSummaryComponent } from './todo-summary/todo-summary.component';
import { FooterComponent } from './footer/footer.component';
import { GenericInputComponent } from './generic-input/generic-input.component';
import { FormsModule } from '@angular/forms';
import { SwitchOneComponent } from './switch-one/switch-one.component';
import { SwitchTwoComponent } from './switch-two/switch-two.component';
import { SwitchExampleComponent } from './switch-example/switch-example.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ObservablesComponent } from './observables/observables.component';
import { HttpClientModule } from '@angular/common/http';

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
    ObservablesComponent
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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
