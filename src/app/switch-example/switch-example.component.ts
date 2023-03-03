import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-example',
  templateUrl: './switch-example.component.html',
  styleUrls: ['./switch-example.component.css']
})
export class SwitchExampleComponent {
  switchVal = true;
  myValues: number[] = [];

  doSwitch() {
    this.switchVal = !this.switchVal;
    this.myValues.push(this.myValues.length);
  }
}
