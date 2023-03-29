import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CalculatorComponent } from 'src/app/calculator/calculator.component';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {
  numbers = [{ value: "1" }, { value: "2" }, { value: "3" }, { value: "4" }, { value: "5" }, { value: "6" }, { value: "7" }, { value: "8" }, { value: "9" }, { value: "." }, { value: "0" }, { value: "C" }];

  operations = [{ operation: "+", value: "+" }, { operation: "-", value: "-" }, { operation: "x", value: "*" }, { operation: "÷", value: "/" }];

  bracketsAndEqual = [{ value: "(" }, { value: ")" }, { value: "DEL" }, { value: "=" }]

  scientificButtons = [{ value: "sin" }, { value: "cos" }, { value: "tan" }, { value: "cosec" }, { value: "cot" }, { value: "sec" }, { value: "sin^-1" }, { value: "cos^-1" }, { value: "tan^-1" }, { value: "cosec^-1" }, { value: "sec^-1" }, { value: "cot^-1" }, { value: "sqrt" }, { value: "log10" }, { value: "ln" }, { value: "logb(x)" }, { value: "pi" }, { value: "mod" }, { value: "^" }, { value: "√" }, { value: "n√" }]
  @Input() checked = false;
  @Output() eval = new EventEmitter();
  @Output() appendS = new EventEmitter<string>();
  @Output() clear = new EventEmitter();
  @Output() openDialogComponent = new EventEmitter();
  @Output() setScientificOp = new EventEmitter<string>();
  @Output() delOperation = new EventEmitter<string>();
  append(value: string) {
    this.appendS.emit(value);
  }
  c() {
    this.clear.emit()
  }
  result() {
    this.eval.emit();
  }
  openDialog() {
    this.openDialogComponent.emit();
  }
  setScientificOperator(value: string) {
    this.setScientificOp.emit(value);
  }
  del() {
    this.delOperation.emit();
  }
  handleBracketResultDel(index: number, val: any,event:any) {
    if (index == 3) {
      this.result();

    }
    else if (index == 2) {
      
      
      this.del();
    }
    else {
      this.append(val);
    }
  }
}
