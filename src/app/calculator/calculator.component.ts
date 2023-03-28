import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  checked = false;
  expression = "";
  result = "";
  toggleParent(value: any) {
    console.log(value);
    this.checked = value;
  }
  appendString(value: any) {
    this.expression = this.expression + value;
  }
  clearString() {
    console.log(this.expression);
    
    this.expression = ""
  }

}
