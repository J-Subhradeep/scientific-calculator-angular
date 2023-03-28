import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CalculatorComponent } from 'src/app/calculator/calculator.component';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {
  numbers = [{ value: "1" }, { value: "2" }, { value: "3" }, { value: "4" }, { value: "5" }, { value: "6" }, { value: "7" }, { value: "8" }, { value: "9" }, { value: "." }, { value: "0" }, { value: "C" }];

  operations = [{ operation: "+",value:"+" }, { operation: "-",value:"-" }, { operation: "x",value:"*" }, { operation: "÷",value:"/" }];

  bracketsAndEqual = [{ value: "(" }, { value: ")" }, { value: "DEL" }, { value: "=" }]

  scientificButtons = [{ value: "sin" }, { value: "cos" }, { value: "tan" }, { value: "cosec" }, { value: "cot" }, { value: "sec" }, { value: "sin^-1" }, { value: "cos^-1" }, { value: "tan^-1" }, { value: "sqrt" }, { value: "log10" }, { value: "log" }, { value: "pi" }, { value: "%" }, { value: "^" }]
  @Input() checked = false;
  @Output() appendS = new EventEmitter<string>();
  @Output() clear = new EventEmitter();
  append(value: string) {
    this.appendS.emit(value);
  }
  c(){
    this.clear.emit()
  }
  
}
