import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as math from 'mathjs';
import { DialogComponentComponent } from '../calculator-components/dialog-component/dialog-component.component';
import { getExpressionFromOperator, operatorResolver } from './operatorResolver';
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  checked = false;
  expression = "";
  result = "";
  scientificOperator = "";
  toggleParent(value: any) {
    console.log(value);
    this.checked = value;
  }
  appendString(value: any) {
    if (this.expression == "Equation Invalid") this.expression = ""
    this.expression = this.expression + value;
  }
  clearString() {
    console.log(this.expression);

    this.expression = ""
  }
  evaluateExp() {
    if (this.expression == "") {
      return;
    }
    try {

      this.expression = math.evaluate(this.expression);
    }
    catch {
      this.expression = "Equation Invalid"
    }
  }
  del() {
    if (this.expression == "Equation Invalid") this.expression = "";
    let str = this.expression.toString();
    this.expression = str.substring(0, str.length - 1);
    // this.expression = this.expression.slice(0, - 1);
  }
  constructor(public dialog: MatDialog) { }
  openDialog() {
    let dialogRef = this.dialog.open(DialogComponentComponent, { data: { operator: operatorResolver(this.scientificOperator) } });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {

        let arr = result.split(",");
        let value = arr[0];
        let op = arr[1];
        console.log(arr);
        if (op === 'nth root of x' || op === "logb(x)") this.appendString(getExpressionFromOperator(value, op, arr[2]));
        else {

          console.log(getExpressionFromOperator(value, op));
          this.appendString(getExpressionFromOperator(value, op))
        }
      }
      // if()

    })
  }
  setScientificOperator(value: string) {
    this.scientificOperator = value;
  }
}
