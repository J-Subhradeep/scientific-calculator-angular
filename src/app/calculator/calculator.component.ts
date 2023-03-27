import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  checked = false;
  toggleParent(value: any) {
    console.log(value);
    this.checked = value;
  }
}
