import { Injectable } from '@angular/core';

export enum Operators {
  ADD, SUB, MULT,DIV
}

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

  calc(op: Operators, num1: number, num2: number): number {
    switch (op) {
      case Operators.ADD: return num1 + num2
      case Operators.SUB: return num1 - num2
      case Operators.MULT: return num1 * num2
      case Operators.DIV: return num1 / num2
    }
  }
}
