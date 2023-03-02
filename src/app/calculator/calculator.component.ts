import { Component } from '@angular/core';
import { CalculatorService, Operators } from '../calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  num: number = 5

  constructor(private calculator: CalculatorService) {
  }

  add(number: number) {
    this.num = this.calculator.calc(Operators.ADD, this.num, number)
  }

  subtract(number: number) {
    this.num = this.calculator.calc(Operators.SUB, this.num, number)
  }

  divide(number: number) {
    this.num = this.calculator.calc(Operators.DIV, this.num, number)
  }

  multiply(number: number) {
    this.num = this.calculator.calc(Operators.MULT, this.num, number)
  }
}
